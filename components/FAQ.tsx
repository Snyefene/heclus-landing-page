"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    q: "What exactly is Heclus?",
    a: "Heclus is an AI-powered YouTube video production engine. You give it a YouTube channel URL, it studies the channel's style and content patterns, then guides you through an 8-step automated pipeline that produces a complete video — script, voiceover, AI images, thumbnail, and assembled clips — ready to upload.",
  },
  {
    q: "Does it work with any YouTube channel?",
    a: "Yes. Heclus works with any public YouTube channel, regardless of niche, size, or language. It fetches transcripts and analyses content structure to build a style profile specific to that creator.",
  },
  {
    q: "How long does a full pipeline take?",
    a: "Most pipelines complete within 10–20 minutes depending on the complexity of the script and the number of AI images being generated. Some steps run in parallel to keep total time low.",
  },
  {
    q: "What AI models does Heclus use?",
    a: "Heclus uses Claude (Anthropic) for script writing and content analysis, and integrates with AI image generation models for visuals and thumbnails. All models are accessed automatically — no accounts or API keys required on your side.",
  },
  {
    q: "Do I need any technical knowledge to use it?",
    a: "None whatsoever. If you can paste a URL and click a button, you can use Heclus. The entire pipeline is guided with clear steps and preview checkpoints so you always know what's happening.",
  },
  {
    q: "Can I edit the script before it generates voiceover and images?",
    a: "Yes. There are approval checkpoints throughout the pipeline. After the script is generated you can review and edit it, approve or regenerate topics, and adjust visual prompts before the more expensive generation steps run.",
  },
  {
    q: "What do I get at the end?",
    a: "You receive a complete content package: a DOCX script file, an MP3 voiceover, all AI-generated images (PNG), a thumbnail, and assembled video clips — everything bundled in a ZIP you can download and take straight to your editing app or upload directly.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your projects and generated content are stored under your account and are never shared with other users. Channel data is only accessed to analyse your specific project.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "oklch(0.72 0.25 285 / 0.08)",
              border: "1px solid oklch(0.72 0.25 285 / 0.20)",
              color: "oklch(0.75 0.20 285)",
            }}
          >
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Common Questions
          </h2>
          <p className="text-lg" style={{ color: "oklch(0.58 0 0)" }}>
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: isOpen ? "oklch(0.11 0.008 280)" : "oklch(0.09 0.006 280 / 0.70)",
                  border: `1px solid ${isOpen ? "oklch(0.72 0.25 285 / 0.20)" : "oklch(1 0 0 / 0.06)"}`,
                }}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-base font-medium" style={{ color: "oklch(0.88 0 0)" }}>
                    {item.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: isOpen ? "oklch(0.72 0.25 285 / 0.15)" : "oklch(0.14 0 0)",
                      color: isOpen ? "oklch(0.82 0.18 285)" : "oklch(0.45 0 0)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.58 0 0)" }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
