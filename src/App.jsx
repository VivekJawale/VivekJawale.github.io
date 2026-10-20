import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import Nav from "./components/Nav";
import { GitHub, LinkedIn, LeetCode, Mail, Phone, Pin, Download } from "./components/Icons";
import { profile, experience, skills, education, certifications } from "./data";

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="border-t border-[var(--line)] py-20 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">{label}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1 font-mono text-xs text-[var(--muted)]">
      {children}
    </span>
  );
}

const socials = [
  ["GitHub", profile.links.github, GitHub],
  ["LinkedIn", profile.links.linkedin, LinkedIn],
  ["LeetCode", profile.links.leetcode, LeetCode],
];

export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }, [dark]);

  return (
    <>
      <Nav dark={dark} onToggleTheme={() => setDark((d) => !d)} />

      <main id="top" className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Hero */}
        <section className="flex min-h-[90vh] flex-col justify-center pt-24 pb-16">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              SDE-II at Motilal Oswal
            </div>
          </div>

          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm {profile.name.split(" ")[0]}.
            <br />
            <span className="text-[var(--muted)]">{profile.role}.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              download="Vivek-Jawale-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--text)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-85"
            >
              <Download width={16} height={16} /> Download resume
            </a>
            <a
              href="#contact"
              className="rounded-md border border-[var(--line)] px-4 py-2.5 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              {socials.map(([name, href, Icon]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="rounded-md p-2.5 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" label="01 · About" title="A bit about me">
          <div className="grid gap-10 md:grid-cols-[1fr_16rem]">
            <div className="space-y-4 text-lg leading-relaxed text-[var(--muted)]">
              {profile.summary.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className="grid h-fit grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--line)] md:grid-cols-1">
              {[
                ["3+ yrs", "Professional experience"],
                ["2", "Trading platforms shipped"],
                ["Go + React", "Primary stack"],
                ["Mumbai", "Based in"],
              ].map(([k, v]) => (
                <div key={v} className="bg-[var(--surface)] p-4">
                  <dt className="text-xl font-semibold">{k}</dt>
                  <dd className="text-sm text-[var(--muted)]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" label="02 · Experience" title="Where I've worked">
          <ol className="relative space-y-12 border-l border-[var(--line)] pl-6 sm:pl-8">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute top-2 -left-[29px] h-2.5 w-2.5 rounded-full border-2 border-[var(--bg)] bg-[var(--accent)] sm:-left-[37px]" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">
                    {job.role} <span className="text-[var(--muted)]">·</span>{" "}
                    <span className="text-[var(--accent)]">{job.company}</span>
                  </h3>
                  <p className="font-mono text-xs text-[var(--muted)]">
                    {job.period} · {job.location}
                  </p>
                </div>
                {job.product && (
                  <p className="mt-2 text-[var(--muted)]">
                    <span className="font-medium text-[var(--text)]">{job.product}</span> — {job.blurb}
                  </p>
                )}
                <ul className="mt-4 space-y-2 text-[var(--muted)]">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--muted)]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Skills */}
        <Section id="skills" label="03 · Skills" title="What I work with">
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map(({ group, items }) => (
              <div key={group} className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5">
                <h3 className="text-sm font-semibold">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* GitHub */}
        {profile.showGithubCalendar && (
        <Section id="github" label="GitHub" title="Contributions">
          <div className="overflow-x-auto rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 text-[var(--muted)]">
            <GitHubCalendar
              username={profile.githubUser}
              colorScheme={dark ? "dark" : "light"}
              theme={{
                light: ["#e7e5e4", "#99f6e4", "#2dd4bf", "#0d9488", "#115e59"],
                dark: ["#292524", "#134e4a", "#0f766e", "#14b8a6", "#5eead4"],
              }}
              blockSize={11}
              fontSize={12}
              errorMessage="Couldn't load the contribution calendar right now."
            />
          </div>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)]"
          >
            <GitHub width={16} height={16} /> github.com/{profile.githubUser} →
          </a>
        </Section>
        )}

        {/* Education */}
        <Section id="education" label="04 · Education" title="Education & certifications">
          <div className="grid gap-10 md:grid-cols-[1fr_18rem]">
            <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {education.map((e) => (
                <li key={e.title} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4">
                  <div>
                    <p className="font-medium">{e.title}</p>
                    <p className="text-sm text-[var(--muted)]">{e.school}</p>
                  </div>
                  <p className="font-mono text-xs text-[var(--muted)]">{e.period}</p>
                </li>
              ))}
            </ul>
            <div>
              <h3 className="text-sm font-semibold">Certifications</h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" label="05 · Contact" title="Let's talk">
          <p className="max-w-xl text-lg text-[var(--muted)]">
            Open to conversations about backend, real-time systems and trading tech. The fastest way
            to reach me is email.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Email", profile.email, `mailto:${profile.email}`, Mail],
              ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`, Phone],
              ["Location", profile.location, null, Pin],
            ].map(([label, value, href, Icon]) => {
              const inner = (
                <>
                  <Icon className="text-[var(--accent)]" />
                  <p className="mt-3 text-xs text-[var(--muted)]">{label}</p>
                  <p className="mt-0.5 font-medium break-all">{value}</p>
                </>
              );
              const cls =
                "block rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 transition-colors";
              return href ? (
                <a key={label} href={href} className={`${cls} hover:border-[var(--accent)]`}>
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </Section>
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-[var(--muted)] sm:px-6">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div className="flex gap-1">
            {socials.map(([name, href, Icon]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="rounded-md p-2 hover:text-[var(--accent)]"
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
