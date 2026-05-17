import Image from "next/image";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

const LINKS = {
  Product: [
    { label: "Features",     href: "#features"  },
    { label: "Pipeline",     href: "#pipeline"  },
    { label: "Pricing",      href: "#pricing"   },
    { label: "FAQ",          href: "#faq"        },
  ],
  Company: [
    { label: "Sign In",      href: `${APP_URL}/login`  },
    { label: "Get Started",  href: `${APP_URL}/signup` },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-10"
      style={{ borderTop: "1px solid oklch(1 0 0 / 0.06)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.svg" alt="Heclus" width={32} height={32} className="rounded-lg" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-semibold" style={{ color: "oklch(0.92 0 0)" }}>
                  Heclus
                </span>
                <span className="text-xs font-medium tracking-wide" style={{ color: "#888" }}>
                  by aiTrends
                </span>
              </div>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "oklch(0.48 0 0)" }}>
              The AI-powered YouTube video factory. Analyze channels, generate
              scripts, voiceovers, images, and full videos — automated.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "oklch(0.45 0 0)" }}>
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
          <p className="text-xs" style={{ color: "oklch(0.38 0 0)" }}>
            © {new Date().getFullYear()} aiTrends. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: "oklch(0.38 0 0)" }}>
            <span>Powered by</span>
            <span
              style={{
                background: "linear-gradient(90deg, oklch(0.72 0.25 285) 0%, oklch(0.65 0.20 200) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 600,
              }}
            >
              Claude AI
            </span>
            <span>&amp; Paystack</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
