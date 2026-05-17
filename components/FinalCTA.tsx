export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.72 0.25 285 / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Decorative dots */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-16"
          style={{ background: "linear-gradient(180deg, transparent 0%, oklch(0.72 0.25 285 / 0.40) 100%)" }} />

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: "oklch(0.72 0.25 285 / 0.10)",
            border: "1px solid oklch(0.72 0.25 285 / 0.25)",
            color: "oklch(0.80 0.20 285)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full animate-ping-slow"
              style={{ background: "oklch(0.72 0.25 285 / 0.6)" }}
            />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "oklch(0.72 0.25 285)" }} />
          </span>
          Ready when you are
        </div>

        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
          Stop Planning.
          <br />
          <span
            style={{
              background: "linear-gradient(120deg, oklch(0.88 0.18 285) 0%, oklch(0.72 0.25 285) 40%, oklch(0.65 0.20 200) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Start Shipping Videos.
          </span>
        </h2>

        <p className="text-xl max-w-2xl mx-auto mb-12" style={{ color: "oklch(0.58 0 0)" }}>
          Your next viral YouTube video is one pipeline away. Let Heclus handle
          production so you can focus on growing your channel.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={process.env.NEXT_PUBLIC_APP_URL ?? "#"}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, oklch(0.72 0.25 285) 0%, oklch(0.60 0.22 295) 100%)",
              color: "white",
              boxShadow: "0 0 40px oklch(0.72 0.25 285 / 0.40), 0 8px 32px oklch(0 0 0 / 0.40)",
            }}
          >
            Create Your First Video
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#pipeline"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-medium transition-all duration-200 hover:text-white"
            style={{ border: "1px solid oklch(1 0 0 / 0.12)", color: "oklch(0.62 0 0)" }}
          >
            Explore the Pipeline
          </a>
        </div>

        {/* Trust micro-copy */}
        <p className="mt-8 text-sm" style={{ color: "oklch(0.40 0 0)" }}>
          No credit card lock-in · Cancel anytime · Full access from day one
        </p>
      </div>
    </section>
  );
}
