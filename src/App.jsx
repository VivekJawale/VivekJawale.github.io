import { useEffect, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import Nav from "./components/Nav";
import Soundtrack from "./components/Soundtrack";
import { GitHub, LinkedIn, LeetCode, Mail, Phone, Pin, Download } from "./components/Icons";
import { profile, experience, skills, education, certifications } from "./data";

// Fades children up once they scroll into view.
function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

// Splits a word into letters that slide up one after another.
function Rise({ text, start = 0 }) {
  return (
    <span className="rise" aria-label={text}>
      {[...text].map((ch, i) => (
        <span key={i} aria-hidden style={{ animationDelay: `${start + i * 45}ms` }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

function Section({ id, num, label, title, children }) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <span
        aria-hidden
        className="ghost-num pointer-events-none absolute top-12 right-0 text-[8rem] sm:top-8 sm:text-[14rem]"
      >
        {num}
      </span>
      <Reveal className="relative">
        <p className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-[var(--accent)] uppercase">
          <span className="h-px w-10 bg-[var(--accent)]" /> {num} · {label}
        </p>
        <h2 className="display mt-3 text-6xl sm:text-8xl">{title}</h2>
      </Reveal>
      <div className="relative mt-14">{children}</div>
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="border border-[var(--line)] bg-black/50 px-2.5 py-1 font-mono text-xs text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
      {children}
    </span>
  );
}

const socials = [
  ["GitHub", profile.links.github, GitHub],
  ["LinkedIn", profile.links.linkedin, LinkedIn],
  ["LeetCode", profile.links.leetcode, LeetCode],
];

const tapeWords = [
  "Golang",
  "React",
  "NATS",
  "gRPC",
  "Microservices",
  "Real-time PnL",
  "Redux Toolkit",
  "MongoDB",
  "Redis",
  "Algo Trading",
];

export default function App() {
  const [first, last] = profile.name.toUpperCase().split(" ");

  return (
    <>
      <div className="grain" aria-hidden />
      <Nav />
      <Soundtrack />

      {/* ---------- Hero ---------- */}
      <header id="top" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden">
        <div className="searchlight" aria-hidden />

        <div className="relative mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6">
          <p className="fade-in flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-[var(--accent)] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-70 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            SDE-II · Motilal Oswal · Mumbai
          </p>

          <h1 className="display mt-6 text-[clamp(4.5rem,min(16vw,22vh),13rem)]">
            <Rise text={first} start={150} />
            <br />
            <span className="inline-block text-[var(--accent)] [filter:drop-shadow(0_0_28px_rgba(255,214,10,0.3))]">
              <Rise text={last} start={420} />
            </span>
          </h1>

          <div className="slash mt-6 w-48 sm:w-72" />

          <div className="fade-in mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end" style={{ animationDelay: "0.9s" }}>
            <div>
              <p className="display text-3xl text-[var(--text)] sm:text-4xl">
                {profile.role} <span className="text-[var(--accent)]">/</span>{" "}
                <span className="text-outline">Go · React</span>
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--muted)]">{profile.tagline}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profile.resume}
                download="Vivek-Jawale-Resume.pdf"
                className="btn-signal inline-flex items-center gap-2 px-5 py-3 text-sm font-bold tracking-wider uppercase"
              >
                <Download width={16} height={16} /> Resume
              </a>
              <a href="#contact" className="btn-ghost px-5 py-3 text-sm font-bold tracking-wider uppercase">
                Contact
              </a>
              <div className="flex items-center">
                {socials.map(([name, href, Icon]) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="p-2.5 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* ---------- Caution tape ---------- */}
      <div className="relative z-10 -my-4 overflow-hidden py-6" aria-hidden>
        <div className="tape -mx-4 py-3">
          <div className="tape-track">
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0">
                {tapeWords.map((w) => (
                  <span key={w + k} className="display flex items-center px-6 text-3xl">
                    {w} <span className="ml-12 text-xl">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ---------- About ---------- */}
        <Section id="about" num="01" label="About" title="Who I am">
          <div className="grid gap-12 md:grid-cols-[1fr_20rem]">
            <Reveal className="space-y-5 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              {profile.summary.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
            <div className="grid h-fit grid-cols-2 gap-3">
              {[
                ["3+", "Years experience"],
                ["2", "Trading platforms"],
                ["NATS", "Real-time pipelines"],
                ["Go", "+ React stack"],
              ].map(([k, v], i) => (
                <Reveal key={v} delay={i * 90} className="bat-card hoverable edge p-5">
                  <p className="display text-gold text-5xl">{k}</p>
                  <p className="mt-1 text-xs tracking-wider text-[var(--muted)] uppercase">{v}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* ---------- Experience ---------- */}
        <Section id="experience" num="02" label="Experience" title="The missions">
          <div className="space-y-6">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 80} className="bat-card hoverable edge p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs tracking-[0.2em] text-[var(--accent)] uppercase">{job.role}</p>
                    <h3 className="display mt-2 text-4xl sm:text-5xl">{job.company}</h3>
                  </div>
                  <p className="border border-[var(--line)] px-3 py-1 font-mono text-xs text-[var(--muted)]">
                    {job.period} · {job.location}
                  </p>
                </div>

                {job.product && (
                  <p className="mt-4 text-[var(--muted)]">
                    <span className="font-semibold text-[var(--accent)]">{job.product}</span> — {job.blurb}
                  </p>
                )}

                <ul className="mt-5 grid gap-x-8 gap-y-2.5 text-[var(--muted)] md:grid-cols-2">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--accent)]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ---------- Skills ---------- */}
        <Section id="skills" num="03" label="Skills" title="The arsenal">
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map(({ group, items }, i) => (
              <Reveal key={group} delay={i * 90} className="bat-card hoverable edge p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="display text-3xl">{group}</h3>
                  <span className="font-mono text-xs text-[var(--accent)]">{String(items.length).padStart(2, "0")}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ---------- GitHub (optional) ---------- */}
        {profile.showGithubCalendar && (
          <Section id="github" num="GH" label="GitHub" title="On GitHub">
            <Reveal className="bat-card overflow-x-auto p-6 text-[var(--muted)]">
              <GitHubCalendar
                username={profile.githubUser}
                colorScheme="dark"
                theme={{ dark: ["#161618", "#5c4a00", "#a68500", "#e6b800", "#ffd60a"] }}
                blockSize={11}
                fontSize={12}
                errorMessage="Couldn't load the contribution calendar right now."
              />
            </Reveal>
          </Section>
        )}

        {/* ---------- Education ---------- */}
        <Section id="education" num="04" label="Education" title="Training">
          <div className="grid gap-10 md:grid-cols-[1fr_20rem]">
            <ul>
              {education.map((e, i) => (
                <Reveal
                  as="li"
                  key={e.title}
                  delay={i * 70}
                  className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-[var(--line)] py-5 first:border-t"
                >
                  <div>
                    <p className="text-lg font-semibold transition-colors group-hover:text-[var(--accent)]">{e.title}</p>
                    <p className="text-sm text-[var(--muted)]">{e.school}</p>
                  </div>
                  <p className="font-mono text-xs text-[var(--muted)]">{e.period}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal className="bat-card h-fit p-6">
              <h3 className="display text-3xl text-[var(--accent)]">Certifications</h3>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--accent)]" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="relative py-24 sm:py-32">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-[var(--accent)] uppercase">
              <span className="h-px w-10 bg-[var(--accent)]" /> 05 · Contact
            </p>
            <h2 className="display mt-4 text-[clamp(3.5rem,12vw,9rem)]">
              Let's build
              <br />
              <span className="text-gold">something.</span>
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="sweep mt-8 inline-block pb-1 text-xl font-semibold break-all sm:text-3xl"
            >
              {profile.email} ↗
            </a>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              ["Email", profile.email, `mailto:${profile.email}`, Mail],
              ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`, Phone],
              ["Location", profile.location, null, Pin],
            ].map(([label, value, href, Icon], i) => {
              const inner = (
                <>
                  <Icon className="text-[var(--accent)]" />
                  <p className="mt-4 font-mono text-[10px] tracking-[0.25em] text-[var(--muted)] uppercase">{label}</p>
                  <p className="mt-1 font-medium break-all">{value}</p>
                </>
              );
              return (
                <Reveal key={label} delay={i * 90}>
                  {href ? (
                    <a href={href} className="bat-card edge block h-full p-6">
                      {inner}
                    </a>
                  ) : (
                    <div className="bat-card edge h-full p-6">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6">
          <p className="display text-2xl">
            Vivek <span className="text-[var(--accent)]">Jawale</span>
          </p>
          <p className="font-mono text-xs text-[var(--muted)]">© {new Date().getFullYear()} · Built in Mumbai</p>
          <div className="flex">
            {socials.map(([name, href, Icon]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="p-2 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
