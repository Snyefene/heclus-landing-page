const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

export default function FinalCTA() {
  return (
    <section className="py-28 sm:py-36 rule-top"
      style={{ background: "var(--color-paper-2)" }}
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <p className="text-xs tracking-widest uppercase mb-5" style={{ color: "var(--color-muted)" }}>
          Ready when you are
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6"
          style={{ color: "var(--color-ink)" }}
        >
          Make the next one in
          <br />
          <span className="italic" style={{ color: "var(--color-accent-ink)" }}>an afternoon, not a week.</span>
        </h2>
        <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ color: "var(--color-ink-soft)" }}
        >
          One pipeline takes a YouTube channel and a topic, and hands you back a finished
          video. Drop your URL in and try it.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a href={`${APP_URL}/signup`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all"
            style={{ background: "var(--color-accent)", color: "white" }}
          >
            Create your first video
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#pipeline"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: "var(--color-ink)" }}
          >
            Read the pipeline first
          </a>
        </div>
        <p className="mt-10 text-xs" style={{ color: "var(--color-muted)" }}>
          No card lock-in · Cancel anytime
        </p>
      </div>
    </section>
  );
}
