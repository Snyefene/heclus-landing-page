"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Pricing",  href: "#pricing"  },
  { label: "FAQ",      href: "#faq"      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "oklch(0.985 0.008 75 / 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-rule)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image src="/heclus-icon-white.svg" alt="Heclus" width={28} height={28}
            className="rounded-md"
            style={{ filter: "invert(1)" }}
          />
          <span className="text-base font-semibold tracking-tight" style={{ color: "var(--color-ink)" }}>
            Heclus
          </span>
          <span className="text-xs tracking-wide ml-0.5" style={{ color: "var(--color-muted)" }}>
            by aiTrends
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href}
                className="text-sm transition-colors duration-150"
                style={{ color: "var(--color-ink-soft)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <a href={`${APP_URL}/login`}
            className="text-sm transition-colors"
            style={{ color: "var(--color-ink-soft)" }}
          >
            Sign in
          </a>
          <a href={`${APP_URL}/signup`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{ background: "var(--color-accent)", color: "white" }}
          >
            Get started
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--color-ink)" }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 space-y-1"
          style={{
            background: "oklch(0.985 0.008 75 / 0.96)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--color-rule)",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}
              className="block py-2.5 text-sm transition-colors"
              style={{ color: "var(--color-ink-soft)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a href={`${APP_URL}/login`}
              className="text-sm text-center py-2.5 rounded-full"
              style={{ color: "var(--color-ink)", border: "1px solid var(--color-rule)" }}
            >
              Sign in
            </a>
            <a href={`${APP_URL}/signup`}
              className="text-sm text-center py-2.5 rounded-full font-medium"
              style={{ background: "var(--color-accent)", color: "white" }}
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
