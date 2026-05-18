const PIPELINE_STEPS = [
  { name: "Channel Analysis", done: true  },
  { name: "Style DNA",        done: true  },
  { name: "Script",           done: true  },
  { name: "Voiceover",        done: true  },
  { name: "AI Images",        done: false, active: true },
  { name: "Thumbnail",        done: false },
  { name: "Video Clips",      done: false },
  { name: "Export",           done: false },
];

const STATS = [
  { value: "2,400", label: "words in script" },
  { value: "4m 12s", label: "voiceover" },
  { value: "8 / 14", label: "images done" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-24 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, oklch(0.72 0.25 285 / 0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, oklch(0.5 0.18 200 / 0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left column: copy ───────────────────────────────── */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: "oklch(0.72 0.25 285 / 0.10)",
                border: "1px solid oklch(0.72 0.25 285 / 0.25)",
                color: "oklch(0.82 0.18 285)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full animate-ping-slow"
                  style={{ background: "oklch(0.72 0.25 285 / 0.6)" }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "oklch(0.72 0.25 285)" }} />
              </span>
              AI-Powered YouTube Automation
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight mb-4">
              Heclus
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-7">
              <span
                style={{
                  background: "linear-gradient(120deg, oklch(0.88 0.18 285) 0%, oklch(0.72 0.25 285) 40%, oklch(0.65 0.20 200) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Clones any YouTube Niche
              </span>
            </h2>

            {/* Sub */}
            <p className="text-lg lg:text-xl leading-relaxed mb-10 max-w-lg" style={{ color: "oklch(0.62 0 0)" }}>
              Paste a channel URL. Get a style-matched script, voiceover, AI images, and video clips — fully automated.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, oklch(0.72 0.25 285) 0%, oklch(0.60 0.22 295) 100%)",
                  color: "white",
                  boxShadow: "0 0 30px oklch(0.72 0.25 285 / 0.35), 0 4px 20px oklch(0 0 0 / 0.4)",
                }}
              >
                Start Creating
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#pipeline"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-medium transition-all duration-200 hover:text-white"
                style={{ border: "1px solid oklch(1 0 0 / 0.12)", color: "oklch(0.68 0 0)" }}
              >
                See the Pipeline
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap items-center gap-6" style={{ color: "oklch(0.45 0 0)" }}>
              {["No code required", "Works on any channel", "Export in minutes"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="oklch(0.72 0.25 285)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: product mockup ────────────────────── */}
          <div className="animate-fade-up animation-delay-200">
            <div
              className="rounded-2xl p-6 animate-float glow-purple"
              style={{
                background: "oklch(0.09 0.006 280 / 0.90)",
                border: "1px solid oklch(1 0 0 / 0.08)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow: "0 32px 64px oklch(0 0 0 / 0.6)",
              }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full" style={{ background: "oklch(0.55 0.18 22)" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "oklch(0.72 0.15 75)" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "oklch(0.55 0.16 145)" }} />
                </div>
                <div
                  className="flex-1 h-7 rounded-md px-3 flex items-center text-xs font-mono gap-2"
                  style={{ background: "oklch(0.14 0 0)", color: "oklch(0.50 0 0)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  heclus.app — Analyzing youtube.com/c/MrBeast
                </div>
              </div>

              {/* Pipeline step grid */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {PIPELINE_STEPS.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium"
                    style={{
                      background: step.done
                        ? "oklch(0.72 0.25 285 / 0.10)"
                        : step.active
                        ? "oklch(0.72 0.25 285 / 0.06)"
                        : "oklch(0.12 0 0)",
                      border: `1px solid ${
                        step.done
                          ? "oklch(0.72 0.25 285 / 0.30)"
                          : step.active
                          ? "oklch(0.72 0.25 285 / 0.18)"
                          : "oklch(1 0 0 / 0.05)"
                      }`,
                      color: step.done
                        ? "oklch(0.82 0.18 285)"
                        : step.active
                        ? "oklch(0.88 0.15 285)"
                        : "oklch(0.40 0 0)",
                    }}
                  >
                    {step.done ? (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : step.active ? (
                      <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ background: "oklch(0.72 0.25 285)", flexShrink: 0 }}
                      />
                    ) : (
                      <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.22 0 0)", flexShrink: 0 }} />
                    )}
                    {step.name}
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mb-5">
                <div
                  className="flex justify-between text-xs mb-2"
                  style={{ color: "oklch(0.48 0 0)" }}
                >
                  <span>Generating AI images…</span>
                  <span style={{ color: "oklch(0.72 0.25 285)" }}>62%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "oklch(0.14 0 0)" }}>
                  <div
                    className="h-full rounded-full animate-progress"
                    style={{
                      background: "linear-gradient(90deg, oklch(0.72 0.25 285) 0%, oklch(0.65 0.20 200) 100%)",
                      width: "62%",
                    }}
                  />
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-2">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg p-3 text-center"
                    style={{ background: "oklch(0.12 0 0)", border: "1px solid oklch(1 0 0 / 0.05)" }}
                  >
                    <div className="text-sm font-semibold mb-0.5" style={{ color: "oklch(0.90 0 0)" }}>
                      {s.value}
                    </div>
                    <div className="text-xs" style={{ color: "oklch(0.45 0 0)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-2xl animate-slide-in-right animation-delay-400"
              style={{
                background: "oklch(0.11 0.006 280)",
                border: "1px solid oklch(0.72 0.25 285 / 0.25)",
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(0.72 0.25 285 / 0.15)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="oklch(0.82 0.18 285)" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold" style={{ color: "oklch(0.90 0 0)" }}>
                  Video Ready
                </div>
                <div className="text-xs" style={{ color: "oklch(0.50 0 0)" }}>
                  Export your full video
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
