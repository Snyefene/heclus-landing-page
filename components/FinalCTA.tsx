export default function FinalCTA() {
  return (
    <section className="py-28 relative">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-[0.22em] mb-7"
          style={{ color: "oklch(0.66 0.10 285)" }}
        >
          Ready when you are
        </p>

        <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
          Stop planning.
          <br />
          <span style={{ color: "oklch(0.74 0.10 285)" }}>Start shipping videos.</span>
        </h2>

        <p className="text-xl max-w-2xl mx-auto mb-12" style={{ color: "oklch(0.58 0 0)" }}>
          Your next viral YouTube video is one pipeline away. Let Heclus handle
          production so you can focus on growing your channel.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`${process.env.NEXT_PUBLIC_APP_URL ?? ""}/signup`}
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl text-base font-semibold transition-opacity duration-150 hover:opacity-90"
            style={{
              background: "oklch(0.55 0.16 285)",
              color: "white",
            }}
          >
            Create Your First Video
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/pipeline"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl text-base font-medium transition-colors duration-150 hover:text-white"
            style={{ border: "1px solid oklch(1 0 0 / 0.14)", color: "oklch(0.64 0 0)" }}
          >
            Explore the Pipeline
          </a>
        </div>

        {/* Trust micro-copy */}
        <p className="mt-8 text-sm" style={{ color: "oklch(0.50 0 0)" }}>
          No credit card lock-in · Cancel anytime · Full access from day one
        </p>
      </div>
    </section>
  );
}
