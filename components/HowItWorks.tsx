const MODELS = [
  {
    name: "ElevenLabs",
    sub: null as string | null,
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <rect x="6"  y="3" width="4" height="18" rx="0.5" />
        <rect x="14" y="3" width="4" height="18" rx="0.5" />
      </svg>
    ),
  },
  {
    name: "Nano Banana 2",
    sub: "Nano Banana Pro",
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 12.27a9 9 0 1 1-3.5-7.13" />
        <path d="M21 5v6h-6" />
      </svg>
    ),
  },
  {
    name: "Seedance 2.0",
    sub: null,
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <rect x="3"  y="10" width="3" height="8"  rx="0.4" />
        <rect x="8"  y="6"  width="3" height="14" rx="0.4" />
        <rect x="13" y="3"  width="3" height="18" rx="0.4" />
        <rect x="18" y="8"  width="3" height="10" rx="0.4" />
      </svg>
    ),
  },
  {
    name: "Kling 3",
    sub: null,
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <ellipse cx="12" cy="12" rx="9" ry="5.5" transform="rotate(-22 12 12)" />
        <circle cx="16.4" cy="9.4" r="1.3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Veo 3",
    sub: null,
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
        <path d="M12 3a9 9 0 1 1-8.5 6" />
        <path d="M12 7a5 5 0 1 1-4.7 3.4" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 relative">
      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-5 lg:px-6">
        {/* Heading */}
        <div className="text-center mb-14" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-5" style={{ color: "oklch(0.66 0.10 285)" }}>
            Models
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Access the latest models
          </h2>
        </div>

        {/* Models grid */}
        <div
          data-reveal
          className="rounded-2xl p-8 sm:p-10"
          style={{
            background: "oklch(0.115 0.004 285)",
            border: "1px solid oklch(1 0 0 / 0.07)",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
            {MODELS.map((m) => (
              <div
                key={m.name}
                className="flex flex-col items-center text-center gap-3"
                style={{ color: "oklch(0.95 0 0)" }}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center"
                  style={{ color: "oklch(0.95 0 0)" }}
                  aria-hidden
                >
                  {m.icon}
                </div>
                <div className="leading-snug">
                  <p className="text-sm font-semibold" style={{ color: "oklch(0.95 0 0)" }}>
                    {m.name}
                  </p>
                  {m.sub && (
                    <p className="text-sm font-semibold" style={{ color: "oklch(0.95 0 0)" }}>
                      {m.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center text-sm font-semibold mt-8"
            style={{ color: "oklch(0.85 0 0)" }}
          >
            and more
          </p>
        </div>
      </div>
    </section>
  );
}
