import { useEffect, useRef, useState } from "react";
import { profile } from "../data";

// Background music toggle.
// If profile.music points to an audio file, that file loops.
// Otherwise an original dark ambient track is generated live with the Web Audio API.

const VOLUME = 0.22;

function buildSynth(ctx, out) {
  // Echo-y room: noise impulse response.
  const len = ctx.sampleRate * 3.5;
  const ir = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = ir.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5);
  }
  const reverb = ctx.createConvolver();
  reverb.buffer = ir;
  const wet = ctx.createGain();
  wet.gain.value = 0.55;
  reverb.connect(wet).connect(out);

  const bus = ctx.createGain();
  bus.connect(out);
  bus.connect(reverb);

  // Low drone: detuned saws through a slowly breathing low-pass filter.
  const droneFilter = ctx.createBiquadFilter();
  droneFilter.type = "lowpass";
  droneFilter.frequency.value = 320;
  droneFilter.Q.value = 6;
  const droneGain = ctx.createGain();
  droneGain.gain.value = 0.16;
  droneFilter.connect(droneGain).connect(bus);

  const nodes = [];
  [
    [73.42, -6],
    [73.42, 7],
    [110, 3],
  ].forEach(([f, detune]) => {
    const o = ctx.createOscillator();
    o.type = "sawtooth";
    o.frequency.value = f;
    o.detune.value = detune;
    o.connect(droneFilter);
    o.start();
    nodes.push(o);
  });

  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.07;
  const lfoAmt = ctx.createGain();
  lfoAmt.gain.value = 180;
  lfo.connect(lfoAmt).connect(droneFilter.frequency);
  lfo.start();
  nodes.push(lfo);

  // Sub bass.
  const sub = ctx.createOscillator();
  sub.type = "sine";
  sub.frequency.value = 36.71;
  const subGain = ctx.createGain();
  subGain.gain.value = 0.35;
  sub.connect(subGain).connect(out);
  sub.start();
  nodes.push(sub);

  // Slow two-note pulse (D3 / F3) plus a soft low hit every bar.
  const pluck = (time, freq, gain = 0.18) => {
    const o = ctx.createOscillator();
    o.type = "triangle";
    o.frequency.value = freq;
    const f = ctx.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.setValueAtTime(1400, time);
    f.frequency.exponentialRampToValueAtTime(220, time + 1.2);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(gain, time + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 1.6);
    o.connect(f).connect(g).connect(bus);
    o.start(time);
    o.stop(time + 1.7);
  };
  const hit = (time) => {
    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(90, time);
    o.frequency.exponentialRampToValueAtTime(38, time + 0.5);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(0.5, time + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 1.1);
    o.connect(g).connect(bus);
    o.start(time);
    o.stop(time + 1.2);
  };

  const beat = 0.9;
  const pattern = [146.83, 174.61, 146.83, 174.61, 146.83, 174.61, 196.0, 174.61];
  let step = 0;
  let next = ctx.currentTime + 0.3;
  const timer = setInterval(() => {
    while (next < ctx.currentTime + 0.6) {
      pluck(next, pattern[step % pattern.length]);
      if (step % 4 === 0) hit(next);
      next += beat;
      step++;
    }
  }, 150);

  return () => {
    clearInterval(timer);
    nodes.forEach((n) => {
      try {
        n.stop();
      } catch {
        /* already stopped */
      }
    });
  };
}

const PREF_KEY = "music";
const readPref = () => {
  try {
    return localStorage.getItem(PREF_KEY);
  } catch {
    return null;
  }
};
const writePref = (v) => {
  try {
    localStorage.setItem(PREF_KEY, v);
  } catch {
    /* storage unavailable */
  }
};

export default function Soundtrack() {
  const [playing, setPlaying] = useState(false);
  const engine = useRef(null);
  const wanted = useRef(false); // should music be on (ignoring tab visibility)
  const btn = useRef(null);

  const ensureEngine = () => {
    if (engine.current) return;
    if (profile.music) {
      const audio = new Audio(profile.music);
      audio.loop = true;
      audio.volume = VOLUME;
      engine.current = {
        play: () => audio.play(),
        pause: () => audio.pause(),
        dispose: () => audio.pause(),
      };
    } else {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);
      const stopSynth = buildSynth(ctx, master);
      engine.current = {
        // resume() waits until the browser allows sound (after a user gesture).
        play: async () => {
          await ctx.resume();
          master.gain.cancelScheduledValues(ctx.currentTime);
          master.gain.setTargetAtTime(VOLUME, ctx.currentTime, 0.8);
        },
        pause: () => {
          master.gain.cancelScheduledValues(ctx.currentTime);
          master.gain.setTargetAtTime(0, ctx.currentTime, 0.25);
          setTimeout(() => !wanted.current && ctx.state === "running" && ctx.suspend(), 1200);
        },
        dispose: () => {
          stopSynth();
          ctx.close();
        },
      };
    }
  };

  const play = async () => {
    ensureEngine();
    try {
      await engine.current.play();
      if (wanted.current && !document.hidden) setPlaying(true);
      else engine.current?.pause(); // turned off while we were waiting
    } catch {
      setPlaying(false); // blocked until the first interaction
    }
  };

  const turnOn = () => {
    wanted.current = true;
    writePref("on");
    play();
  };

  const turnOff = () => {
    wanted.current = false;
    writePref("off");
    engine.current?.pause();
    setPlaying(false);
  };

  // On by default. Browsers block sound until the visitor interacts, so keep trying
  // on load, scroll, click, tap and key press until it starts. Click/tap/key always
  // unlock audio; scroll only does in browsers that already trust the site.
  // Respects a saved "off".
  const stopListening = useRef(() => {});
  useEffect(() => {
    if (readPref() === "off") return;
    wanted.current = true;

    const events = ["scroll", "wheel", "pointerdown", "click", "keydown", "touchstart", "touchend"];
    const opts = { capture: true, passive: true };
    let last = 0;
    const kick = (e) => {
      if (e && btn.current?.contains(e.target)) return; // the button handles its own click
      if (!wanted.current) return stopListening.current();
      const now = Date.now();
      if (e && (e.type === "scroll" || e.type === "wheel") && now - last < 400) return; // throttle
      last = now;
      play();
    };
    stopListening.current = () => events.forEach((ev) => window.removeEventListener(ev, kick, opts));
    events.forEach((ev) => window.addEventListener(ev, kick, opts));
    kick();
    return () => stopListening.current();
  }, []);

  // Once music is playing, stop listening for interactions.
  useEffect(() => {
    if (playing) stopListening.current();
  }, [playing]);

  // Pause while the tab is hidden, resume when the visitor comes back.
  useEffect(() => {
    const onVis = () => {
      if (!wanted.current) return;
      if (document.hidden) {
        engine.current?.pause();
        setPlaying(false);
      } else {
        play();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(
    () => () => {
      engine.current?.dispose();
      engine.current = null;
    },
    []
  );

  return (
    <button
      ref={btn}
      onClick={playing ? turnOff : turnOn}
      aria-pressed={playing}
      aria-label={playing ? "Turn background music off" : "Turn background music on"}
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-3 border border-[var(--line)] bg-[var(--bg)]/80 px-4 py-2.5 font-mono text-[10px] tracking-[0.25em] text-[var(--muted)] uppercase backdrop-blur-md transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:right-6 sm:bottom-6"
    >
      <span className="flex h-4 items-end gap-[3px]" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`eq-bar w-[3px] bg-[var(--accent)] ${playing ? "eq-on" : ""}`}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </span>
      {playing ? "Sound on" : "Sound off"}
    </button>
  );
}
