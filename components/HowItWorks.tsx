const STEPS = [
  {
    num: "01",
    title: "Paste a YouTube Channel URL",
    desc: "Enter the URL of any YouTube channel you want to model. Heclus will pull transcripts, titles, and style data automatically.",
    detail: "Works with any public YouTube channel — niches, sizes, languages. No API keys needed.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Review Topics & Approve Script",
    desc: "Heclus proposes trending topic ideas based on the channel's DNA. Pick one, and a full script is generated — edit it or proceed.",
    detail: "You stay in control. Approve, tweak, or regenerate at every checkpoint before moving forward.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Download Your Complete Video",
    desc: "Once the pipeline finishes, your full content package is ready — voiceover, images, thumbnail, clips, and script all exported together.",
    detail: "DOCX, MP3, PNG, and video files — everything packaged in a single ZIP download.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background stripe */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, oklch(0.08 0.006 280 / 0.40) 50%, transparent 100%)",
        }}
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
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Three Steps to Your
            <br />
            <span
              style={{
                background: "linear-gradient(120deg, oklch(0.88 0.18 285) 0%, oklch(0.72 0.25 285) 60%, oklch(0.65 0.20 200) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Next YouTube Video
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            No complex setup, no learning curve. Start a project and Heclus takes
            care of every production step.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connector lines */}
          <div className="hidden lg:block absolute top-16 left-[calc(33%+1rem)] right-[calc(33%+1rem)] h-px"
            style={{ background: "linear-gradient(90deg, oklch(0.72 0.25 285 / 0.30) 0%, oklch(0.72 0.25 285 / 0.30) 100%)" }} />

          {STEPS.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                style={{
                  background: "oklch(0.72 0.25 285 / 0.12)",
                  border: "1px solid oklch(0.72 0.25 285 / 0.25)",
                  color: "oklch(0.82 0.18 285)",
                  boxShadow: "0 0 24px oklch(0.72 0.25 285 / 0.15)",
                }}
              >
                {step.icon}
                <span
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "oklch(0.72 0.25 285)",
                    color: "white",
                  }}
                >
                  {i + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3" style={{ color: "oklch(0.92 0 0)" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.56 0 0)" }}>
                {step.desc}
              </p>
              <p
                className="text-xs px-4 py-2.5 rounded-xl"
                style={{
                  background: "oklch(0.09 0.006 280)",
                  border: "1px solid oklch(1 0 0 / 0.06)",
                  color: "oklch(0.50 0 0)",
                }}
              >
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
