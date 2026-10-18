"use client";

import { useState } from "react";

// Click-to-play facade: we render the YouTube thumbnail + a play button and
// only mount the (heavy) iframe once the user actually clicks. Keeps the
// landing page fast — no third-party player JS on initial load.
const VIDEO_ID = "SOGxuvyFj3s";

export default function VideoDemo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="py-28 relative">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-5" style={{ color: "oklch(0.66 0.10 285)" }}>
            Demo
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            See it in <span style={{ color: "oklch(0.74 0.10 285)" }}>action.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            Watch the full pipeline turn a single niche into finished content.
          </p>
        </div>

        {/* Player */}
        <div
          data-reveal
          className="relative rounded-2xl overflow-hidden elevated"
          style={{
            aspectRatio: "16 / 9",
            border: "1px solid oklch(1 0 0 / 0.10)",
            background: "oklch(0.07 0.004 285)",
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
                  className="flex items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105"
                  style={{
                    width: "84px",
                    height: "84px",
                    background: "oklch(0.55 0.16 285)",
                    boxShadow: "0 8px 32px oklch(0 0 0 / 0.5)",
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
