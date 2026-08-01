"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

const NAV_LINKS = [
  { label: "Features",   href: "/features"  },
  { label: "Pipeline",   href: "/pipeline"  },
  { label: "Pricing",    href: "/pricing"   },
  { label: "FAQ",        href: "/faq"       },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-[10px] right-[10px] md:left-[25px] md:right-[25px] z-50 transition-all duration-300"
      style={{
        background: scrolled ? "oklch(0.07 0.008 280 / 0.90)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 0.06)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto max-w-[90rem] px-4 sm:px-5 lg:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image src="/heclus-icon-white.svg" alt="Heclus" width={32} height={32} className="rounded-lg" />
          <div className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-tight" style={{ color: "oklch(0.95 0 0)" }}>
              Heclus
            </span>
            <span className="text-xs font-medium tracking-wide" style={{ color: "#888" }}>
              by aiTrends
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium transition-colors duration-150 hover:text-white"
                style={{ color: "oklch(0.60 0 0)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${APP_URL}/login`}
            className="text-sm font-medium transition-colors hover:text-white"
            style={{ color: "oklch(0.60 0 0)" }}
          >
            Sign in
          </a>
          <a
            href={`${APP_URL}/signup`}
            className="lift inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold"
            style={{
              background: "oklch(0.55 0.16 285)",
              color: "white",
            }}
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "oklch(0.65 0 0)" }}
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

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 space-y-1"
          style={{
            background: "oklch(0.08 0.008 280 / 0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid oklch(1 0 0 / 0.06)",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block py-2.5 text-sm font-medium transition-colors hover:text-white"
              style={{ color: "oklch(0.65 0 0)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href={`${APP_URL}/login`}
              className="text-sm text-center py-2.5 rounded-lg font-medium"
              style={{ color: "oklch(0.65 0 0)", border: "1px solid oklch(1 0 0 / 0.10)" }}
            >
              Sign in
            </a>
            <a
              href={`${APP_URL}/signup`}
              className="text-sm text-center py-2.5 rounded-lg font-semibold text-white"
              style={{ background: "oklch(0.55 0.16 285)" }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
