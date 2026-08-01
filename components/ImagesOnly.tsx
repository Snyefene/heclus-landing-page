// The cheap path: skip video generation and assemble from stills.
//
// Claims are limited to what the assembler actually does — one image held
// for its narration beat (-loop 1 / -tune stillimage), captions, music and
// logo composited in the same pass. There is no pan/zoom, so nothing here
// promises motion inside a shot; the argument rests on the visual changing
// on every beat, which is true.
//
// Follows the site's stated design language: one muted violet accent,
// neutral surfaces, hairline borders. No glows or gradient text.

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Real frames from the product's demo workflow (youtube-engine
// /public/demo/images), downscaled to 480w for page weight. Using the
// actual output rather than placeholders is the whole point of the section:
// this is what an images-only video is made of.
const BEATS = [
  { label: "Hook",    src: "/demo-frames/beat-1.jpg", clip: "/demo-clips/beat-1.mp4" },
  { label: "Point 1", src: "/demo-frames/beat-2.jpg", clip: "/demo-clips/beat-2.mp4" },
  { label: "Point 2", src: "/demo-frames/beat-3.jpg", clip: "/demo-clips/beat-3.mp4" },
  { label: "Point 3", src: "/demo-frames/beat-4.jpg", clip: "/demo-clips/beat-4.mp4" },
  { label: "Payoff",  src: "/demo-frames/beat-5.jpg", clip: "/demo-clips/beat-5.mp4" },
];

// Deterministic pseudo-waveform: a fixed shape beats Math.random(), which
// would differ between server and client render and warn on hydration.
const WAVE = Array.from({ length: 72 }, (_, i) =>
  32 + Math.abs(Math.sin(i * 0.55) * 0.6 + Math.sin(i * 0.21) * 0.4) * 62,
);

// Badges are each lever's SHARE OF THE 70% headline, so they add to 70.
// Measured on the aggregate of 105 production projects that both animated
// and generated images (project_costs), where the two levers are additive
// by construction because they hit separate line items:
//   drop animation 48.9% + cheapest image model 37.2% = 86.1% combined.
// Apportioned to the conservative 70% headline in the same ratio: 40 + 30.
// Per-project medians (46% / 33%) are NOT used here: they do not add up,
// since once animation is gone the image saving applies to a smaller base.
// Swapping the VIDEO model is deliberately absent: most projects already
// use the cheapest one, so the median saving there is ~1%.
const TIPS = [
  {
    badge: "40%",
    title: "Assemble with images only",
    body:
      "Leave video generation off and the video is built from stills, one per narration beat."
  },
  {
    badge: "30%",
    title: "Choose cheap image models",
    body:
      "Every image step sorts by cheapest, with the cost on each card. The range runs over twenty fold."
  },
  {
    badge: "Free",
    title: "Use the Heclus perks",
    body:
      "Free voiceover characters monthly, plus unlimited voice cloning on Pro, all on our account."
  },
  {
    badge: "Per beat",
    title: "Keep videos tighter",
    body:
      "Spend scales with beat count, roughly nine credits each. A typical project runs 240 beats."
  },
  {
    badge: "$18/mo",
    title: "Assemble at 1080p",
    body:
      "1440p and 2160p are Pro features. If you do not need them, Starter covers 1080p."
  },
  {
    // Measured at 36.6% of image spend across 198 production projects
    // (95,050 of 259,687 credits), or 23.9% of all image and video spend.
    // Non-numeric badge on purpose: a third percentage would break the
    // 40 + 30 = 70 arithmetic above.
    badge: "Biggest waste",
    title: "Minimize regenerations",
    body:
      "Re-rolls are a quarter of generation spend. Set the prompt prefix once so you are not paying to fix style drift."
  },
];

const COLUMNS = [
  {
    label: "Images only",
    note: "Lowest cost",
    lead: "One AI image per beat, held for the length of its narration.",
    accent: true,
    points: [
      "A new image every time the script moves on",
      "Captions, background music and logo baked in",
      "Identical script, voiceover and runtime",
      "No video-model spend at all",
    ],
  },
  {
    label: "Animated clips",
    note: "Highest production",
    lead: "Every beat rendered as an AI video clip with motion inside the shot.",
    accent: false,
    points: [
      "Movement within each scene",
      "Best for high-production niches",
      "Same pipeline, same controls",
      "Many times the cost per video",
    ],
  },
];

/** One 16:9 frame. On the animated strip the frame is a button: clicking it
 *  swaps in the real clip. preload="none" and mounting on demand mean no
 *  video bytes are fetched unless a visitor asks for one. */
function Frame({
  src, alt, clip, playing, onPlay,
}: {
  src: string;
  alt: string;
  clip?: string;
  playing?: boolean;
  onPlay?: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [forcedMute, setForcedMute] = useState(false);

  useEffect(() => {
    if (!playing) { setForcedMute(false); return; }
    const el = videoRef.current;
    if (!el) return;
    // Driven from the effect rather than the autoPlay attribute so the
    // rejection is catchable: unmuted autoplay is only allowed off the back
    // of a user gesture, and policies differ between browsers.
    el.play().catch(() => {
      setForcedMute(true);
      el.muted = true;
      void el.play().catch(() => { /* give up quietly; poster still shows */ });
    });
  }, [playing]);

  const body = (
    <>
      {playing && clip ? (
        <video
          ref={videoRef}
          src={clip}
          poster={src}
          muted={forcedMute}
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={480}
          height={268}
          sizes="(max-width: 640px) 20vw, 190px"
          className="w-full h-full object-cover"
        />
      )}

      {/* Play badge only while paused — once it is running the motion says it.
          A scrim sits under it because most of these frames are near-white
          artwork, where a translucent badge would disappear. */}
      {clip && !playing && (
        <span className="absolute inset-0 flex items-center justify-center" aria-hidden
          style={{ background: "oklch(0.09 0.004 285 / 0.30)" }}>
          <span
            className="rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
            style={{
              width: "38px",
              height: "38px",
              background: "oklch(0.98 0 0 / 0.94)",
              boxShadow: "0 2px 10px oklch(0 0 0 / 0.45)",
            }}
          >
            {/* Nudged right: a triangle's optical centre sits left of its box. */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="oklch(0.16 0.01 285)" style={{ marginLeft: "2px" }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      )}

      {/* The burnt-in caption line, so "captions included" is shown rather
          than only asserted in the bullet list. */}
      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-sm px-1"
        style={{ background: "oklch(0.09 0.004 285 / 0.62)" }} aria-hidden>
        <span className="block rounded-full" style={{ width: "42px", height: "2.5px", background: "oklch(1 0 0 / 0.7)" }} />
      </span>
    </>
  );

  const shell = "relative rounded-lg overflow-hidden block w-full";
  const shellStyle = { aspectRatio: "16 / 9", border: "1px solid oklch(1 0 0 / 0.10)" } as const;

  if (!clip) return <div className={shell} style={shellStyle}>{body}</div>;

  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={playing ? `${alt} playing` : `Play ${alt}`}
      className={`${shell} group cursor-pointer transition-transform hover:scale-[1.02]`}
      style={shellStyle}
    >
      {body}
    </button>
  );
}

function Strip({
  title, animated = false, hint, playing, onPlay,
}: {
  title: string;
  animated?: boolean;
  hint?: string;
  playing?: string | null;
  onPlay?: (label: string) => void;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2.5">
        <span className="text-[11px] font-semibold tracking-wide shrink-0"
          style={{ color: animated ? "oklch(0.58 0 0)" : "oklch(0.74 0.10 285)" }}>
          {title}
        </span>
        {hint && (
          <span className="text-[10px] shrink-0" style={{ color: "oklch(0.45 0 0)" }}>{hint}</span>
        )}
        <span className="flex-1 h-px" style={{ background: "oklch(1 0 0 / 0.06)" }} />
      </div>
      <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
        {BEATS.map((b) => (
          <Frame
            key={b.label}
            src={b.src}
            alt={`${b.label} beat visual`}
            clip={animated ? b.clip : undefined}
            playing={animated && playing === b.label}
            onPlay={() => onPlay?.(b.label)}
          />
        ))}
      </div>
    </div>
  );
}

export default function ImagesOnly() {
  // One clip at a time: a row of five simultaneous videos is noise, and
  // only the clicked beat should ever fetch its bytes.
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section id="images-only" className="py-28 relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-6">
        {/* Heading */}
        <div className="text-center mb-12" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-5" style={{ color: "oklch(0.66 0.10 285)" }}>
            Images only
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Worried about cost?
            <br />
            <span style={{ color: "oklch(0.74 0.10 285)" }}>
              Animation is optional, images alone still carry the video.
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            Animating every shot is the expensive part. Turn it off and Heclus assembles the
            whole video from AI images instead, one per narration beat, so the picture
            still changes with every line your narrator says.
          </p>
        </div>

        {/* The visual argument: both routes share one narration track, and
            only the visual layer differs. */}
        <div
          data-reveal
          className="rounded-2xl p-6 sm:p-8 elevated"
          style={{ background: "oklch(0.115 0.004 285)", border: "1px solid oklch(1 0 0 / 0.08)" }}
        >
          <div className="space-y-6">
            <Strip title="Images only" />
            <Strip
              title="Animated clips"
              animated
              hint="click any frame to play"
              playing={playing}
              onPlay={(label) => setPlaying((cur) => (cur === label ? null : label))}
            />
          </div>

          {/* Shared narration track with beat boundaries, aligned to the
              five columns above so the timing claim is legible. */}
          <div className="mt-7">
            <div className="grid grid-cols-5 gap-2 sm:gap-2.5 mb-2">
              {BEATS.map((b) => (
                <p key={b.label} className="text-[10px] text-center truncate" style={{ color: "oklch(0.5 0 0)" }}>
                  {b.label}
                </p>
              ))}
            </div>
            <div className="relative rounded-md overflow-hidden"
              style={{ height: "30px", background: "oklch(0.145 0.006 285)", border: "1px solid oklch(1 0 0 / 0.07)" }}>
              <div className="absolute inset-0 flex items-center gap-[2px] px-2" aria-hidden>
                {WAVE.map((h, i) => (
                  <span key={i} className="flex-1 rounded-full"
                    style={{ height: `${h}%`, background: "oklch(0.58 0.15 285 / 0.5)" }} />
                ))}
              </div>
              {/* Beat dividers at 20% intervals — the cut points. */}
              {[20, 40, 60, 80].map((pct) => (
                <span key={pct} className="absolute top-0 bottom-0" aria-hidden
                  style={{ left: `${pct}%`, width: "1px", background: "oklch(0.09 0.004 285)" }} />
              ))}
            </div>
            <p className="mt-3 text-xs text-center" style={{ color: "oklch(0.55 0 0)" }}>
              Every visual is cut to its own line of narration. Nothing drifts.
            </p>
          </div>
        </div>

        {/* Side-by-side */}
        <div className="grid gap-5 sm:grid-cols-2 mt-8" data-reveal="group">
          {COLUMNS.map((col) => (
            <div
              key={col.label}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: col.accent ? "oklch(0.13 0.012 285)" : "oklch(0.115 0.004 285)",
                border: `1px solid oklch(1 0 0 / 0.35)`,
              }}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="text-lg font-bold tracking-tight" style={{ color: "oklch(0.95 0 0)" }}>
                  {col.label}
                </h3>
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full shrink-0"
                  style={col.accent
                    ? { background: "oklch(0.58 0.15 285 / 0.14)", color: "oklch(0.74 0.10 285)" }
                    : { background: "oklch(1 0 0 / 0.05)", color: "oklch(0.55 0 0)" }}
                >
                  {col.note}
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "oklch(0.66 0 0)" }}>
                {col.lead}
              </p>
              <ul className="space-y-2.5 mt-auto">
                {col.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.7 0 0)" }}>
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={col.accent
                        ? { background: "oklch(0.58 0.15 285 / 0.14)", color: "oklch(0.74 0.10 285)" }
                        : { background: "oklch(1 0 0 / 0.05)", color: "oklch(0.55 0 0)" }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Cost-cutting subsection: the three levers a user actually has. */}
        <div
          data-reveal
          className="mt-8 rounded-2xl p-7 sm:p-8"
          style={{ background: "oklch(0.115 0.004 285)", border: "1px solid oklch(1 0 0 / 0.08)" }}
        >
          <div className="text-center mb-7">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Tips to cut cost by <span style={{ color: "oklch(0.74 0.10 285)" }}>70%</span>
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal="group">
            {TIPS.map((t) => (
              <div
                key={t.title}
                className="rounded-xl p-5"
                style={{ background: "oklch(0.145 0.006 285)", border: "1px solid oklch(1 0 0 / 0.35)" }}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span
                    className="px-2 py-1 rounded-md text-[11px] font-bold shrink-0 tabular-nums"
                    style={{ background: "oklch(0.58 0.15 285 / 0.16)", color: "oklch(0.74 0.10 285)" }}
                  >
                    {t.badge}
                  </span>
                  <p className="text-sm font-semibold" style={{ color: "oklch(0.95 0 0)" }}>{t.title}</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.66 0 0)" }}>{t.body}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs mt-6" style={{ color: "oklch(0.5 0 0)" }}>
            Shares of the 70%, measured from our own generation ledger.
          </p>
        </div>

        <p className="text-center text-sm mt-8" data-reveal style={{ color: "oklch(0.58 0 0)" }}>
          A per-beat choice, not a plan. Animate the hook, leave the rest as images.
        </p>
      </div>
    </section>
  );
}
