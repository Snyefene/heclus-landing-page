"use client";

import { useState } from "react";
import { FAQ_ITEMS as QUESTIONS } from "@/lib/faq-data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-5" style={{ color: "oklch(0.66 0.10 285)" }}>
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Common Questions
          </h2>
          <p className="text-lg" style={{ color: "oklch(0.58 0 0)" }}>
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3" data-reveal="group">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: isOpen ? "oklch(0.13 0.004 285)" : "oklch(0.115 0.004 285)",
                  border: `1px solid oklch(1 0 0 / 0.35)`,
                }}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium" style={{ color: "oklch(0.88 0 0)" }}>
                    {item.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: "oklch(1 0 0 / 0.05)",
                      color: isOpen ? "oklch(0.74 0.10 285)" : "oklch(0.62 0 0)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                {/* Height animates via the 0fr→1fr grid-rows trick; the
                    answer stays in the DOM so crawlers always see it. */}
                <div
                  className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "oklch(0.58 0 0)" }}>
                      <p>{item.a}</p>
                      {item.bullets && (
                        <ul className="mt-3 space-y-2">
                          {item.bullets.map((b) => (
                            <li key={b} className="flex gap-2.5">
                              <span
                                className="mt-[0.5em] w-1 h-1 rounded-full flex-shrink-0"
                                style={{ background: "oklch(0.72 0.11 285)" }}
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.outro && <p className="mt-3">{item.outro}</p>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
