const FEATURES = [
  {
    eyebrow: "Analysis",
    title: "Learns any channel, fast.",
    body: "Paste a URL and Heclus pulls transcripts and structure, then distills the channel's voice into a profile it can write against. Public channels only, no API keys, no setup.",
  },
  {
    eyebrow: "Script & voice",
    title: "Writes in the voice you already have.",
    body: "Claude drafts the full script — hooks, beats, CTAs — to match how the channel actually sounds. The narration follows: natural pacing, real emotion, no robotic monotone.",
  },
  {
    eyebrow: "Visuals",
    title: "Scenes, thumbnail, the cut.",
    body: "Heclus writes scene-by-scene image prompts and renders them. The most important scenes become motion clips. A click-worthy thumbnail comes for free.",
  },
  {
    eyebrow: "Export",
    title: "Take the cut, or take the parts.",
    body: "Download the finished MP4 ready to upload, or grab the raw pieces — script as DOCX, voiceover as MP3, scenes as PNG. Edit in whatever tool you live in.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 sm:py-36 rule-top"
      style={{ background: "var(--color-paper-2)" }}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
            Features
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight"
            style={{ color: "var(--color-ink)" }}
          >
            Everything a video needs, in one pass.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
          {FEATURES.map((f) => (
            <div key={f.title}>
              <p className="text-xs tracking-widest uppercase mb-3"
                style={{ color: "var(--color-accent-ink)" }}
              >
                {f.eyebrow}
              </p>
              <h3 className="font-serif text-2xl sm:text-[28px] leading-[1.15] tracking-tight mb-4"
                style={{ color: "var(--color-ink)" }}
              >
                {f.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
