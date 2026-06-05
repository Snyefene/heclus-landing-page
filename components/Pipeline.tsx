const STEPS = [
  {
    num: "01",
    name: "Channel analysis",
    desc: "Heclus fetches the channel's recent videos and transcripts. No setup, no API keys on your end.",
  },
  {
    num: "02",
    name: "Style DNA",
    desc: "It distills the channel's voice — hooks, sentence rhythm, pacing, retention moves — into a reusable profile.",
  },
  {
    num: "03",
    name: "Topic & script",
    desc: "Pick your topic or let Claude propose ideas the channel would credibly cover. A full script lands matching the voice.",
  },
  {
    num: "04",
    name: "Voiceover",
    desc: "The script becomes a narrated track. Natural pacing, emotion, no robotic monotone.",
  },
  {
    num: "05",
    name: "AI scenes",
    desc: "Heclus writes scene-by-scene image prompts, then renders them. ~30 visuals per video, on-brand.",
  },
  {
    num: "06",
    name: "Thumbnail",
    desc: "A click-worthy thumbnail concept is generated alongside the scenes — typography, contrast, the works.",
  },
  {
    num: "07",
    name: "Video clips",
    desc: "Selected scenes become motion clips, timed to the voiceover.",
  },
  {
    num: "08",
    name: "Export",
    desc: "Final MP4 plus the raw assets — script, audio, images, thumbnail — bundled and downloadable.",
  },
];

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-28 sm:py-36 rule-top">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
              The pipeline
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight"
              style={{ color: "var(--color-ink)" }}
            >
              How a video gets made.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            <p className="text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
              Each step has a checkpoint — review the topic, edit the script, swap a scene prompt
              before the expensive generators fire. You stay in control; Heclus handles the
              between-work.
            </p>
          </div>
        </div>

        <ol className="space-y-0">
          {STEPS.map((step, i) => (
            <li key={step.num}
              className="grid grid-cols-12 gap-6 py-7 rule-top"
              style={{ borderColor: "var(--color-rule)" }}
            >
              <div className="col-span-2 sm:col-span-1">
                <span className="font-serif italic text-3xl sm:text-4xl"
                  style={{ color: "var(--color-accent-ink)" }}
                >
                  {step.num}
                </span>
              </div>
              <div className="col-span-10 sm:col-span-4">
                <h3 className="text-base sm:text-lg font-semibold tracking-tight"
                  style={{ color: "var(--color-ink)" }}
                >
                  {step.name}
                </h3>
              </div>
              <div className="col-span-12 sm:col-span-7 sm:pl-4">
                <p className="text-base leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
