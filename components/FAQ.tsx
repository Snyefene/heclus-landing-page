"use client";

import { useState } from "react";
import { FAQ_ITEMS as QUESTIONS } from "@/lib/faq-data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
                      color: isOpen ? "oklch(0.82 0.18 285)" : "oklch(0.72 0 0)",
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
