import { useState } from "react";
import { profile } from "../data";
import { Sun, Moon, Menu, Close } from "./Icons";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ...(profile.showGithubCalendar ? [["GitHub", "#github"]] : []),
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Nav({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          vivek<span className="text-[var(--accent)]">.jawale</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-md px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 hidden rounded-md border border-[var(--line)] px-3 py-1.5 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:inline-block"
          >
            Resume
          </a>

          <button
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="ml-1 rounded-md p-2 text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            {dark ? <Sun /> : <Moon />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-md p-2 text-[var(--muted)] hover:text-[var(--text)] md:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-[var(--line)] bg-[var(--bg)] px-4 py-2 md:hidden">
          {[...links, ["Resume", profile.resume]].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[var(--muted)] hover:text-[var(--text)]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
