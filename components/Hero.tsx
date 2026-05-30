import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* ── Left column: editorial headline ─────────────────────── */}
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs tracking-widest uppercase mb-8"
              style={{
                background: "var(--color-accent-soft)",
                color: "var(--color-accent-ink)",
                border: "1px solid var(--color-accent)",
              }}
            >
              End-to-end AI video automation workflow
            </span>

            <h1 className="font-serif text-[44px] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
              style={{ color: "var(--color-ink)" }}
            >
              Make viral videos
              <br />
              with your niche&apos;s{" "}
              <span className="italic" style={{ color: "var(--color-accent-ink)" }}>top creators&apos; secrets</span>
              <span style={{ color: "var(--color-accent-ink)" }}>.</span>
            </h1>

            <p className="text-lg leading-relaxed max-w-xl mb-10"
              style={{ color: "var(--color-ink-soft)" }}
            >
              Paste a channel you love watching. Heclus reads its rhythm — the hooks,
              the voice, the beats — then ships a full video on any topic, in that
              creator&apos;s style. Script, voiceover, AI scenes, thumbnail, and the
              final cut.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all"
                style={{ background: "var(--color-accent)", color: "white" }}
              >
                Try Heclus
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#pipeline"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: "var(--color-ink)" }}
              >
                See how it works
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right column: product screenshot ────────────────────── */}
          <div className="lg:col-span-5 animate-fade-up animation-delay-200 relative">
            <div className="rounded-md overflow-hidden"
              style={{
                background: "var(--color-paper-2)",
                border: "1px solid var(--color-rule)",
                boxShadow: "0 24px 48px oklch(0.18 0.015 280 / 0.08)",
              }}
            >
              <Image
                src="/chaneel_setup.png"
                alt="Heclus channel setup — paste a YouTube URL to begin"
                width={1920}
                height={1104}
                priority
                quality={95}
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 80vw, 100vw"
                className="w-full h-auto block"
              />
            </div>

            {/* Floating context badge */}
            <div className="absolute -bottom-4 -left-4 flex items-center gap-3 pl-2 pr-4 py-2.5 rounded-full"
              style={{
                background: "var(--color-paper)",
                border: "1px solid var(--color-rule)",
                boxShadow: "0 12px 32px oklch(0.18 0.015 280 / 0.10)",
              }}
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-serif text-lg leading-none"
                style={{ background: "var(--color-accent)", color: "var(--color-paper)" }}
              >
                1
              </div>
              <div className="leading-tight">
                <div className="text-[10px] uppercase tracking-widest" style={{ color: "var(--color-muted)" }}>
                  Step 1
                </div>
                <div className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                  Paste a channel URL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
