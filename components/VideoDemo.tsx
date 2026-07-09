"use client";

import { useState } from "react";

// Click-to-play facade: we render the YouTube thumbnail + a play button and
// only mount the (heavy) iframe once the user actually clicks. Keeps the
// landing page fast — no third-party player JS on initial load.
const VIDEO_ID = "SOGxuvyFj3s";

export default function VideoDemo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, oklch(0.72 0.25 285 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "oklch(0.72 0.25 285 / 0.08)",
              border: "1px solid oklch(0.72 0.25 285 / 0.20)",
              color: "oklch(0.75 0.20 285)",
            }}
          >
            Demo
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            See it in{" "}
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
              action.
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            Watch the full pipeline turn a single niche into finished content.
          </p>
        </div>

        {/* Player */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            aspectRatio: "16 / 9",
            border: "1px solid oklch(0.72 0.25 285 / 0.25)",
            boxShadow:
              "0 0 60px oklch(0.72 0.25 285 / 0.12), 0 32px 64px oklch(0 0 0 / 0.45)",
            background: "oklch(0.06 0.004 280)",
          }}
        >
          {playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Heclus demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 w-full h-full cursor-pointer"
              aria-label="Play demo video"
            >
              {/* Thumbnail */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Heclus demo video thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Dark overlay for contrast */}
              <span
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0 0 0 / 0.10) 0%, oklch(0 0 0 / 0.35) 100%)",
                }}
              />
              {/* Play button */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span
                  className="flex items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
                  style={{
                    width: "84px",
                    height: "84px",
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.25 285) 0%, oklch(0.60 0.22 295) 100%)",
                    boxShadow: "0 0 40px oklch(0.72 0.25 285 / 0.50)",
                  }}
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="white" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
