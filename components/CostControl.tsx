// "We provide the tool, you control the cost."
//
// Every claim here is verified against the product:
//   • account_settings.kie_api_key / elevenlabs_api_key — generation runs on
//     the user's OWN provider keys, so providers bill them directly.
//   • ModelPicker exposes All / Fastest / Cheapest tabs and prints
//     model.costPerUnit on each card.
//   • StepCostCard shows spend per step; StepBalanceCard shows live provider
//     credit inside the app.
//   • The images-only route skips video spend entirely (see ImagesOnly).
//
// Site design language: one muted violet accent, neutral surfaces, hairline
// borders, no glows or gradient text.

const POINTS = [
  {
    title: "Your keys, your provider bill",
    body:
      "Connect your own generation keys once. The providers bill you directly at their own rates. We never resell credits or add a markup, so there is nothing between you and the real price.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3" />
      </svg>
    ),
  },
  {
    title: "Pick the model per step",
    body:
      "Every step lists its models with the cost printed on the card, sortable by cheapest or fastest. Run a premium model on the hook and a budget one everywhere else.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
        <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    title: "See the spend as it happens",
    body:
      "Each step shows what it cost and your remaining provider balance sits in the same view. No end-of-month surprise, because the number is on screen while you work.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
  },
  {
    title: "Spend nothing on animation",
    body:
      "Turn video generation off and the whole thing assembles from images, with no video-model spend at all. The expensive layer is a choice, not a requirement.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.4" /><path d="m21 15-5-5L5 21" />
      </svg>
    ),
  },
];

export default function CostControl() {
  return (
    <section id="cost-control" className="py-28 relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-6">
        {/* Heading */}
        <div className="text-center mb-14" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-5" style={{ color: "oklch(0.66 0.10 285)" }}>
            No markup
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            We provide the tool,
            <br />
            <span style={{ color: "oklch(0.74 0.10 285)" }}>you control the cost.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            Your subscription buys the pipeline, not the credits. Generation runs on your own
            provider keys at their prices, and every expensive decision stays yours to make.
          </p>
        </div>

        {/* Points */}
        <div className="grid gap-5 sm:grid-cols-2" data-reveal="group">
          {POINTS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-7"
              style={{ background: "oklch(0.115 0.004 285)", border: "1px solid oklch(1 0 0 / 0.35)" }}
            >
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "oklch(0.58 0.15 285 / 0.12)", color: "oklch(0.74 0.10 285)" }}
              >
                {p.icon}
              </span>
              <h3 className="text-base font-bold tracking-tight mb-2" style={{ color: "oklch(0.95 0 0)" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.66 0 0)" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" data-reveal style={{ color: "oklch(0.58 0 0)" }}>
          One flat subscription. Everything else is a dial you set.
        </p>
      </div>
    </section>
  );
}
