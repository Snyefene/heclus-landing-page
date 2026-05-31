const QUOTES = [
  {
    quote: "I used to spend three days a week scripting. Heclus drafts in the voice I've spent years building — I'm shipping twice as often with the same quality bar.",
    author: "Marcus T.",
    channel: "@moneymindset",
    role: "Personal finance creator",
  },
  {
    quote: "It nails the rhythm of my hooks. Not 'AI-rewritten' — it actually sounds like me on a good day.",
    author: "Lia R.",
    channel: "@craftedhome",
    role: "Lifestyle channel · 240K subs",
  },
  {
    quote: "The thumbnail it produced beat my last six attempts on click-through. Now I draft three concepts every video and let the numbers decide.",
    author: "Devon K.",
    channel: "@studio.devon",
    role: "Indie filmmaker",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 sm:py-36 rule-top">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
            <span className="section-num text-base mr-2">06</span>
            From creators
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight"
            style={{ color: "var(--color-ink)" }}
          >
            What people say after a week.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-14">
          {QUOTES.map((q) => (
            <figure key={q.author}>
              <span className="font-serif italic text-5xl leading-none block mb-3"
                style={{ color: "var(--color-accent-ink)" }}
              >
                &ldquo;
              </span>
              <blockquote className="font-serif text-xl sm:text-[22px] leading-[1.45] mb-6"
                style={{ color: "var(--color-ink)" }}
              >
                {q.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm shrink-0"
                  style={{ background: "var(--color-accent-soft)", color: "var(--color-accent-ink)" }}
                >
                  {q.author.charAt(0)}
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                    {q.author}
                  </div>
                  <div className="text-xs" style={{ color: "var(--color-muted)" }}>
                    {q.channel} · {q.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
