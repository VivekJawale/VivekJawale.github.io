import { useEffect, useState } from "react";
import { profile } from "../data";
import { Menu, Close } from "./Icons";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ...(profile.showGithubCalendar ? [["GitHub", "#github"]] : []),
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Vivek Jawale, back to top">
          <span className="display grid h-9 w-9 place-items-center bg-[var(--accent)] pt-0.5 text-2xl text-black">VJ</span>
          <span className="display hidden text-xl tracking-wider sm:inline">
            Vivek <span className="text-[var(--accent)]">Jawale</span>
          </span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map(([label, href], i) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-3 py-2 font-mono text-xs tracking-widest text-[var(--muted)] uppercase transition-colors hover:text-[var(--accent)]"
                >
                  <span className="text-[var(--accent)]">0{i + 1}.</span> {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="btn-signal ml-3 hidden px-4 py-2 text-xs font-bold tracking-wider uppercase sm:inline-block"
          >
            Resume
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="ml-1 rounded-md p-2 text-[var(--muted)] hover:text-[var(--text)] md:hidden"
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
                className="display block py-2 text-3xl text-[var(--muted)] hover:text-[var(--accent)]"
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
