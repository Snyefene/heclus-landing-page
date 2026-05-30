import Image from "next/image";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

const LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pipeline", href: "#pipeline" },
    { label: "Pricing",  href: "#pricing"  },
    { label: "FAQ",      href: "#faq"      },
  ],
  Company: [
    { label: "Sign in",      href: `${APP_URL}/login`  },
    { label: "Get started",  href: `${APP_URL}/signup` },
  ],
  Legal: [
    { label: "Terms",   href: "/terms"   },
    { label: "Privacy", href: "/privacy" },
    { label: "Refunds", href: "/refund"  },
  ],
};

export default function Footer() {
  return (
    <footer className="pt-20 pb-12 rule-top">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/heclus-icon-white.svg" alt="Heclus" width={28} height={28}
                className="rounded-md"
                style={{ filter: "invert(1)" }}
              />
              <span className="text-base font-semibold tracking-tight" style={{ color: "var(--color-ink)" }}>
                Heclus
              </span>
              <span className="text-xs tracking-wide" style={{ color: "var(--color-muted)" }}>
                by aiTrends
              </span>
            </div>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
              A YouTube video pipeline that listens to your channel and builds the rest —
              script, voice, scenes, the cut.
            </p>
          </div>

          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}
                      className="text-sm transition-colors"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 rule-top"
          style={{ borderColor: "var(--color-rule)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            © {new Date().getFullYear()} aiTrends. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            Made with care for creators.
          </p>
        </div>
      </div>
    </footer>
  );
}
