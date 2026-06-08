const STEPS = [
  {
    name: "Niche Identification",
    desc: "Identifying any trending YouTube niche",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    name: "Style DNA",
    desc: "Heclus reverse-engineers the niche in minutes",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: "Topic & Script",
    desc: "Heclus identifies high-potential topics, and creates a fully humanized and editable script",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    name: "Voiceover Generation",
    desc: "Latest text-to-speech models for human-sounding voiceover narrations",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    name: "Image & Video Generation",
    desc: "1-Click Bulk Image and video generation with top models including Seedance 2, Kling 3, Nano Banana 2, and more",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    name: "Thumbnail Creation",
    desc: "Scroll-stopping thumbnails matching various styles in your chosen niche",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: "Video Assembly",
    desc: "1-Click timed video compilation using video clips, images, or both",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    name: "Export & Download",
    desc: "Full video ready for export and upload in minutes",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
];

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-24 relative">
      {/* Section glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 50%, oklch(0.72 0.25 285 / 0.04) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "oklch(0.72 0.25 285 / 0.08)",
              border: "1px solid oklch(0.72 0.25 285 / 0.20)",
              color: "oklch(0.75 0.20 285)",
            }}
          >
            The Pipeline
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            From Niche to Full Video 
            <br />
            <span
              style={{
                backgroundImage: "linear-gradient(120deg, oklch(0.88 0.18 285) 0%, oklch(0.72 0.25 285) 60%, oklch(0.72 0.25 285) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Automated & Customizable
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            Heclus handles every stage of production so you never face a blank page
            or a timeline full of manual work.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="group relative rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "oklch(0.09 0.006 280 / 0.70)",
                border: "1px solid oklch(1 0 0 / 0.06)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.72 0.25 285 / 0.06) 0%, transparent 70%)" }}
              />

              <div className="mb-4 flex justify-center">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "oklch(0.72 0.25 285 / 0.12)",
                    color: "oklch(0.82 0.18 285)",
                    border: "1px solid oklch(0.72 0.25 285 / 0.20)",
                  }}
                >
                  {step.icon}
                </div>
              </div>

              <h3 className="text-sm font-semibold mb-2 text-center" style={{ color: "oklch(0.88 0 0)" }}>
                {step.name}
              </h3>
              <p className="text-xs leading-relaxed text-center" style={{ color: "oklch(0.52 0 0)" }}>
                {step.desc}
              </p>

              {/* Connector arrow (not on last col) */}
              {(i + 1) % 4 !== 0 && i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10"
                  style={{ color: "oklch(0.72 0.25 285 / 0.30)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, oklch(0.72 0.25 285) 0%, oklch(0.60 0.22 295) 100%)",
              color: "white",
              boxShadow: "0 0 28px oklch(0.72 0.25 285 / 0.30)",
            }}
          >
            Run the Full Pipeline
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
