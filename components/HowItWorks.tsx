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
    name: "Vee 3",
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
    <section className="py-24 relative overflow-hidden">
      {/* Background stripe */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, oklch(0.08 0.006 280 / 0.40) 50%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "oklch(0.72 0.25 285 / 0.08)",
              border: "1px solid oklch(0.72 0.25 285 / 0.20)",
              color: "oklch(0.75 0.20 285)",
            }}
          >
            Models
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span
              style={{
                backgroundImage:
                  "linear-gradient(120deg, oklch(0.88 0.18 285) 0%, oklch(0.72 0.25 285) 60%, oklch(0.72 0.25 285) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Access the latest models
            </span>
          </h2>
        </div>

        {/* Models grid */}
        <div
          className="rounded-3xl p-8 sm:p-10"
          style={{
            background: "oklch(0.09 0.006 280 / 0.70)",
            border: "1px solid oklch(1 0 0 / 0.06)",
            boxShadow: "0 0 40px oklch(0.72 0.25 285 / 0.06)",
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
