const PLANS = [
  {
    name: "Starter",
    price: "$19",
    period: " / month",
    description: "For creators getting their first videos out.",
    limit: "5 niches per month",
    features: [
      "5 niches per month",
      "Standard image processing",
      "Full pipeline access",
      "Community support",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: " / month",
    description: "For creators scaling output across channels.",
    limit: "Unlimited niches",
    features: [
      "Everything in Starter",
      "Unlimited niches & videos",
      "Bulk video generation",
      "Priority rendering queue",
      "Priority support",
    ],
    cta: "Start Pro",
    highlighted: true,
  },
];

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 sm:py-36 rule-top"
      style={{ background: "var(--color-paper-2)" }}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
            <span className="section-num text-base mr-2">05</span>
            Pricing
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight"
            style={{ color: "var(--color-ink)" }}
          >
            Pick a pace. Upgrade when you outgrow it.
          </h2>
        </div>

        {/* Founder strip */}
        <div className="mb-10 rounded-md p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
          style={{
            background: "var(--color-paper)",
            border: "1px solid var(--color-accent)",
          }}
        >
          <div>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--color-accent-ink)" }}>
              Founder offer · First 100 only
            </p>
            <p className="font-serif text-2xl leading-tight mb-1" style={{ color: "var(--color-ink)" }}>
              $40 for a full year.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
              Pay once, get 20 niches plus the full pipeline for twelve months. After your year, pick any monthly plan.
            </p>
          </div>
          <a href={`${APP_URL}/signup?plan=founder`}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
            style={{ background: "var(--color-accent)", color: "white" }}
          >
            Claim founder spot
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PLANS.map((plan) => (
            <div key={plan.name}
              className="rounded-md p-8 flex flex-col"
              style={{
                background: "var(--color-paper)",
                border: plan.highlighted
                  ? "1px solid var(--color-accent)"
                  : "1px solid var(--color-rule)",
              }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-serif text-2xl tracking-tight" style={{ color: "var(--color-ink)" }}>
                  {plan.name}
                </h3>
                {plan.highlighted && (
                  <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-accent-ink)" }}>
                    Most popular
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-ink-soft)" }}>
                {plan.description}
              </p>

              <div className="mb-6 pb-6 rule-bottom" style={{ borderColor: "var(--color-rule)" }}>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-5xl tracking-tight" style={{ color: "var(--color-ink)" }}>
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                    {plan.period}
                  </span>
                </div>
                <p className="text-xs mt-2" style={{ color: "var(--color-muted)" }}>
                  {plan.limit}
                </p>
              </div>

              <ul className="space-y-2 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="var(--color-accent)" strokeWidth="2.5"
                      className="mt-1 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href={`${APP_URL}/signup?plan=${plan.name.toLowerCase()}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-medium transition-all"
                style={plan.highlighted
                  ? { background: "var(--color-accent)", color: "white" }
                  : { background: "transparent", color: "var(--color-accent-ink)", border: "1px solid var(--color-accent)" }
                }
              >
                {plan.cta}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-center" style={{ color: "var(--color-muted)" }}>
          Secure checkout · Instant access · Cancel anytime
        </p>
      </div>
    </section>
  );
}
