const STEPS = [
  {
    num: "01",
    title: "Drop a channel URL.",
    body: "Any public YouTube channel works. Heclus fetches the videos and learns the voice in under a minute.",
  },
  {
    num: "02",
    title: "Pick the topic, review the script.",
    body: "Take a Heclus suggestion or bring your own. The script lands in the channel's tone — edit before voiceover and scenes generate.",
  },
  {
    num: "03",
    title: "Download the finished cut.",
    body: "The assembled MP4 lands with the raw assets — script, voiceover, scenes, thumbnail — ready for upload or further editing.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 sm:py-36 rule-top">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
            How it works
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight"
            style={{ color: "var(--color-ink)" }}
          >
            Three steps. The rest is patience.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {STEPS.map((s) => (
            <div key={s.num}>
              <span className="font-serif italic text-5xl sm:text-6xl block mb-5"
                style={{ color: "var(--color-accent-ink)" }}
              >
                {s.num}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl leading-[1.2] tracking-tight mb-3"
                style={{ color: "var(--color-ink)" }}
              >
                {s.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
