"use client";

import { useEffect, useState } from "react";

// Each step loops 0%→100% at its own cadence so the cards look like
// independent workers, not a single synchronized progress group.
// durationMs = how long one fill takes; delayMs = how long before the
// step's first cycle begins (creates the cascade on initial paint).
// SPEED_MULTIPLIER is the single knob to tune the overall pace —
// raise it to slow everything down proportionally without re-tuning
// each step relative to the others.
const SPEED_MULTIPLIER = 3;
const PIPELINE_STEPS = [
  { name: "Niche Analysis",              done: true,  durationMs: 1600 * SPEED_MULTIPLIER, delayMs: 0    },
  { name: "Script Generation & Editing", done: true,  durationMs: 2050 * SPEED_MULTIPLIER, delayMs: 200  },
  { name: "Voiceover Generation",        done: true,  durationMs: 2500 * SPEED_MULTIPLIER, delayMs: 400  },
  { name: "Bulk Image Generation",       done: true,  durationMs: 2950 * SPEED_MULTIPLIER, delayMs: 600  },
  { name: "Bulk Video Clips", done: false, active: true, durationMs: 3400 * SPEED_MULTIPLIER, delayMs: 800 },
  { name: "Thumbnail Generation",        done: false, durationMs: 3850 * SPEED_MULTIPLIER, delayMs: 1000 },
  { name: "Export",                      done: false, durationMs: 4300 * SPEED_MULTIPLIER, delayMs: 1200 },
];

function useLoaderProgress(): number[] {
  const [progress, setProgress] = useState<number[]>(() => PIPELINE_STEPS.map(() => 0));

  useEffect(() => {
    // Freeze mid-run for reduced motion: looks like a paused snapshot.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(PIPELINE_STEPS.map((_, i) => (i < 4 ? 100 : 40 - i * 4)));
      return;
    }
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      setProgress(
        PIPELINE_STEPS.map(({ durationMs, delayMs }) => {
          if (elapsed < delayMs) return 0;
          const t = (elapsed - delayMs) % durationMs;
          return Math.min(100, (t / durationMs) * 100);
        }),
      );
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return progress;
}

const STATS = [
  { value: "2,400", label: "words in script" },
  { value: "4m 12s", label: "voiceover" },
  { value: "8 / 14", label: "images done" },
];

export default function Hero() {
  const loaderProgress = useLoaderProgress();

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-8 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left column: copy ───────────────────────────────── */}
          <div className="animate-fade-up">
            {/* Eyebrow */}
            <p
              className="text-xs font-semibold uppercase tracking-[0.22em] mt-[25px] mb-6"
              style={{ color: "oklch(0.66 0.10 285)" }}
            >
              Heclus: AI YouTube Automation
            </p>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.05] tracking-tight mb-6">
              Clone any
              <br />
              <span className="accent-serif">YouTube niche</span>
              <span style={{ color: "oklch(0.62 0.15 285)" }}>.</span>
            </h1>

            {/* Sub */}
            <p className="text-base lg:text-lg leading-relaxed mb-9 max-w-lg" style={{ color: "oklch(0.62 0 0)" }}>
              Analyze any trending YouTube niche. Generate humanized scripts, voiceover
              narration, images, videos, and thumbnails.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/pricing"
                className="lift inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold"
                style={{
                  background: "oklch(0.55 0.16 285)",
                  color: "white",
                }}
              >
                Start Creating
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/pipeline"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-medium transition-colors duration-150 hover:text-white"
                style={{ border: "1px solid oklch(1 0 0 / 0.14)", color: "oklch(0.70 0 0)" }}
              >
                See the Pipeline
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-sm" style={{ color: "oklch(0.48 0 0)" }}>
              Full access from day one · Cancel anytime
            </p>
          </div>

          {/* ── Right column: product mockup ────────────────────── */}
          <div className="animate-fade-up animation-delay-200 relative">
            <div
              className="rounded-2xl p-6 elevated"
              style={{
                background: "oklch(0.115 0.004 285)",
                border: "1px solid oklch(1 0 0 / 0.09)",
              }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-1.5" aria-hidden>
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(0.22 0 0)" }} />
                  ))}
                </div>
                <div
                  className="flex-1 min-w-0 h-7 rounded-md px-3 flex items-center text-xs font-mono gap-2"
                  style={{ background: "oklch(0.09 0.004 285)", color: "oklch(0.62 0 0)", border: "1px solid oklch(1 0 0 / 0.06)" }}
                >
                  <svg className="shrink-0" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="truncate">heclus.app - Analyzing youtube.com/c/MrBeast</span>
                </div>
              </div>

              {/* Pipeline step grid */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {PIPELINE_STEPS.map((step, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium"
                    style={{
                      background: step.done || step.active ? "oklch(1 0 0 / 0.035)" : "oklch(1 0 0 / 0.015)",
                      border: `1px solid ${step.done || step.active ? "oklch(1 0 0 / 0.10)" : "oklch(1 0 0 / 0.05)"}`,
                      color: step.done || step.active ? "oklch(0.84 0 0)" : "oklch(0.55 0 0)",
                    }}
                  >
                    {step.done ? (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="oklch(0.70 0.11 285)" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : step.active ? (
                      <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ background: "oklch(0.62 0.15 285)", flexShrink: 0 }}
                      />
                    ) : (
                      <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.24 0 0)", flexShrink: 0 }} />
                    )}
                    <span className="flex-1 truncate">{step.name}</span>
                    <span
                      className="text-[10px] font-mono tabular-nums shrink-0"
                      style={{ color: "oklch(0.55 0 0)" }}
                    >
                      {Math.floor(loaderProgress[i])}%
                    </span>

                    {/* Per-step progress loader — JS-driven so bar + text stay in sync */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ background: "oklch(1 0 0 / 0.04)" }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${loaderProgress[i]}%`,
                          background: "oklch(0.62 0.15 285)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mb-5">
                <div
                  className="flex justify-between text-xs mb-2"
                  style={{ color: "oklch(0.64 0 0)" }}
                >
                  <span>Generating AI images…</span>
                  <span className="font-mono tabular-nums" style={{ color: "oklch(0.74 0.10 285)" }}>62%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "oklch(1 0 0 / 0.06)" }}>
                  <div
                    className="h-full rounded-full animate-progress"
                    style={{
                      background: "oklch(0.62 0.15 285)",
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
                    style={{ background: "oklch(1 0 0 / 0.02)", border: "1px solid oklch(1 0 0 / 0.06)" }}
                  >
                    <div className="text-sm font-semibold mb-0.5 tabular-nums" style={{ color: "oklch(0.92 0 0)" }}>
                      {s.value}
                    </div>
                    <div className="text-xs" style={{ color: "oklch(0.55 0 0)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status chip */}
            <div
              className="absolute -bottom-4 left-6 flex items-center gap-2.5 px-4 py-3 rounded-xl elevated animate-fade-up animation-delay-400"
              style={{
                background: "oklch(0.13 0.004 285)",
                border: "1px solid oklch(1 0 0 / 0.10)",
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(0.58 0.15 285 / 0.12)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="oklch(0.74 0.10 285)" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold" style={{ color: "oklch(0.92 0 0)" }}>
                  Video Ready
                </div>
                <div className="text-xs" style={{ color: "oklch(0.58 0 0)" }}>
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
