import Image from "next/image";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/heclus",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.07-.93-2.07-2.07s.93-2.07 2.07-2.07 2.07.93 2.07 2.07-.93 2.07-2.07 2.07zm1.78 13.02H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18az1NsZrZ",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/heclus.io",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

const LINKS = {
  Product: [
    { label: "Features",     href: "/features"  },
    { label: "Pipeline",     href: "/pipeline"  },
    { label: "Pricing",      href: "/pricing"   },
    { label: "FAQ",          href: "/faq"        },
  ],
  Company: [
    { label: "Sign In",      href: `${APP_URL}/login`  },
    { label: "Get Started",  href: `${APP_URL}/signup` },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms"   },
    { label: "Privacy Policy",   href: "/privacy" },
    { label: "Refund Policy",    href: "/refund"  },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-10"
      style={{ borderTop: "1px solid oklch(1 0 0 / 0.06)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/heclus-icon-white.svg" alt="Heclus" width={32} height={32} className="rounded-lg" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-semibold" style={{ color: "oklch(0.92 0 0)" }}>
                  Heclus
                </span>
                <span className="text-xs font-medium tracking-wide" style={{ color: "#888" }}>
                  by aiTrends
                </span>
              </div>
            </div>
            <p className="text-sm max-w-xs leading-relaxed mb-5" style={{ color: "oklch(0.76 0 0)" }}>
              The AI-powered YouTube video factory. Analyze channels, generate
              scripts, voiceovers, images, and full videos - automated.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:text-white"
                  style={{
                    background: "oklch(1 0 0 / 0.04)",
                    border: "1px solid oklch(1 0 0 / 0.08)",
                    color: "oklch(0.62 0 0)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "oklch(0.72 0 0)" }}>
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "oklch(0.55 0 0)" }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.05)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.62 0 0)" }}>
            © {new Date().getFullYear()} aiTrends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
