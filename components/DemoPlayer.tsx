"use client";

import { useState } from "react";

// Click-to-play facade: we render the poster + a play button and only mount
// the video once the user actually clicks, so the 23 MB file is never fetched
// by a visitor who doesn't watch it. The file is served from /public with its
// index at the front (faststart), so playback starts before it has downloaded.
// Used by the Demo section and, on phones, in place of the hero mockup.
const VIDEO_SRC = "/demo.mp4";
const POSTER_SRC = "/demo-poster.jpg";

export default function DemoPlayer({ reveal = true }: { reveal?: boolean }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div
      data-reveal={reveal ? "" : undefined}
      className="relative rounded-2xl overflow-hidden elevated"
      style={{
        aspectRatio: "16 / 9",
        border: "1px solid oklch(1 0 0 / 0.10)",
        background: "oklch(0.07 0.004 285)",
      }}
    >
      {playing ? (
        <video
          className="absolute inset-0 w-full h-full"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          title="Heclus demo"
          autoPlay
          controls
          playsInline
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
            src={POSTER_SRC}
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
  );
}
