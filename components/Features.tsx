const FEATURES = [
  {
    title: "Niche Research & Analysis",
    desc: "Analyze patterns in any trending niche to identify high-performing topics",
    highlights: ["Transcript extraction", "Style & tone mapping", "Winning topic analysis", "Content DNA profile"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
    accent: "oklch(0.72 0.25 285)",
    accentDim: "oklch(0.72 0.25 285 / 0.10)",
    accentBorder: "oklch(0.72 0.25 285 / 0.20)",
  },
  {
    title: "Script + Professional Voiceover",
    desc:"Fully editable - Engaging full length script matching popular styles in the niche, converted to voiceover using latest text-to-speech tools",
    highlights: ["Claude-powered writing", "Voice-matched scripts", "Natural TTS narration", "Export as audio file"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    accent: "oklch(0.72 0.25 285)",
    accentDim: "oklch(0.72 0.25 285 / 0.10)",
    accentBorder: "oklch(0.72 0.25 285 / 0.20)",
  },
  {
    title: "Images, Video Clips & Thumbnail",
    desc: "Automated 1-click image generation using the latest image models like Nano Banana 2. Bulk video generation using Seedance 2, Kling 3 and more",
    highlights: ["Scene-level image prompts", "AI image generation", "Thumbnail generation", "Video clip assembly"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    accent: "oklch(0.72 0.25 285)",
    accentDim: "oklch(0.72 0.25 285 / 0.10)",
    accentBorder: "oklch(0.72 0.25 285 / 0.20)",
  },
  {
    title: "1-Click export",
    desc: "Export fully completed video without long pauses or Bulk export images, and video clip assets",
    highlights: ["DOCX script export", "Audio & image files", "Video clip bundle", "ZIP download"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    accent: "oklch(0.72 0.25 285)",
    accentDim: "oklch(0.72 0.25 285 / 0.10)",
    accentBorder: "oklch(0.72 0.25 285 / 0.20)",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Everything You Need
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
              In One Single Tool
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            Don’t miss the next trending niche. Speed up your production
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "oklch(0.09 0.006 280 / 0.70)",
                border: "1px solid oklch(1 0 0 / 0.06)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 70% 50% at 20% 20%, ${f.accentDim} 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                style={{
                  background: f.accentDim,
                  border: `1px solid ${f.accentBorder}`,
                  color: f.accent,
                }}
              >
                {f.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: "oklch(0.92 0 0)" }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6 text-center" style={{ color: "oklch(0.56 0 0)" }}>
                {f.desc}
              </p>

              {/* Highlight pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {f.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: f.accentDim, border: `1px solid ${f.accentBorder}`, color: f.accent }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
