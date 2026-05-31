"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    q: "What does Heclus actually do?",
    a: "You give it a YouTube channel URL. Heclus analyses the channel's voice and style, then helps you produce a full video on any topic you choose — script, voiceover, AI-generated scenes, thumbnail, and the assembled MP4. Eight steps, mostly automated, with review checkpoints where your taste matters.",
  },
  {
    q: "Does it work with any YouTube channel?",
    a: "Any public channel, in any niche, at any size. Heclus fetches transcripts and structure to build a style profile specific to that creator. No API keys needed on your end.",
  },
  {
    q: "How long does one video take?",
    a: "Most pipelines complete in 10 to 20 minutes — script in under a minute, voiceover and scenes running in parallel after that. The slowest stages are the AI video clips, which you can selectively enable.",
  },
  {
    q: "Which AI models power Heclus?",
    a: "Claude for script writing and channel analysis, ElevenLabs-grade TTS for voiceovers, and a rotating shelf of image and video models (Flux, Veo, Kling, Runway). All accessed through one provider — no separate accounts to set up.",
  },
  {
    q: "Can I edit before everything generates?",
    a: "Yes. There are approval checkpoints at every expensive stage. Edit the script before voiceover, swap a scene prompt before images render, change the thumbnail concept before final assembly.",
  },
  {
    q: "What do I get when it's done?",
    a: "The assembled video as an MP4, plus the raw pieces: script as DOCX, voiceover as MP3, all scene images as PNG, the thumbnail, and individual video clips. Take the cut, take the parts, or both.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. If you can paste a URL, you can use Heclus. The pipeline guides you with clear steps and previews — you're approving choices, not configuring software.",
  },
  {
    q: "Is my channel data private?",
    a: "Yes. Projects and generated content stay on your account. We only access public channel data — transcripts and metadata — to build the style profile for your specific project.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 sm:py-36 rule-top">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
            <span className="section-num text-base mr-2">07</span>
            Questions
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight"
            style={{ color: "var(--color-ink)" }}
          >
            Before you sign up.
          </h2>
        </div>

        <ul className="space-y-0">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="rule-top" style={{ borderColor: "var(--color-rule)" }}>
                <button
                  className="w-full text-left py-6 flex items-start justify-between gap-6 transition-colors"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-base sm:text-lg font-medium tracking-tight"
                    style={{ color: "var(--color-ink)" }}
                  >
                    {item.q}
                  </span>
                  <span className="shrink-0 mt-1 text-xl leading-none"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 pr-8 text-base leading-relaxed"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {item.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
