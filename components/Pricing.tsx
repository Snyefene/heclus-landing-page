const PLANS = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for creators just getting started.",
    limit: "5 niches / month",
    features: [
      "5 niches per month",
      "Full 8-step AI pipeline",
      "Script & voiceover generation",
      "AI image generation",
      "ZIP export",
    ],
    cta: "Get Started",
    highlighted: false,
    disabled: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For creators scaling their content output.",
    limit: "Unlimited niches",
    features: [
      "Unlimited niches",
      "Full 8-step AI pipeline",
      "Script & voiceover generation",
      "AI image & thumbnail generation",
      "Video clip assembly",
      "ZIP export",
      "Priority support",
    ],
    cta: "Start Pro",
    highlighted: true,
    disabled: false,
  },
  {
    name: "Agency",
    price: "$99",
    period: "/month",
    description: "For teams managing multiple channels.",
    limit: "3 seats + unlimited",
    features: [
      "3 team seats",
      "Unlimited niches",
      "Full 8-step AI pipeline",
      "Script & voiceover generation",
      "AI image & thumbnail generation",
      "Video clip assembly",
      "ZIP export",
      "Priority support",
    ],
    cta: "Coming Soon",
    highlighted: false,
    disabled: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.72 0.25 285 / 0.05) 0%, transparent 70%)",
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
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent
            <br />
            <span
              style={{
                background: "linear-gradient(120deg, oklch(0.88 0.18 285) 0%, oklch(0.72 0.25 285) 60%, oklch(0.65 0.20 200) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              pricing.
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            Pick the plan that fits your output. Upgrade or cancel anytime.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-3xl p-8 flex flex-col overflow-hidden"
              style={{
                background: plan.disabled ? "oklch(0.07 0.002 280)" : plan.highlighted ? "oklch(0.10 0.008 280)" : "oklch(0.08 0.004 280)",
                border: plan.disabled ? "1px solid oklch(1 0 0 / 0.05)" : plan.highlighted
                  ? "1px solid oklch(0.72 0.25 285 / 0.35)"
                  : "1px solid oklch(1 0 0 / 0.08)",
                boxShadow: plan.disabled ? "none" : plan.highlighted
                  ? "0 0 60px oklch(0.72 0.25 285 / 0.12), 0 32px 64px oklch(0 0 0 / 0.40)"
                  : "0 8px 32px oklch(0 0 0 / 0.30)",
                opacity: plan.disabled ? 0.5 : 1,
              }}
            >
              {/* Card glow for highlighted */}
              {plan.highlighted && (
                <>
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-semibold z-10 whitespace-nowrap"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.72 0.25 285) 0%, oklch(0.60 0.22 295) 100%)",
                      color: "white",
                      boxShadow: "0 0 20px oklch(0.72 0.25 285 / 0.40)",
                    }}
                  >
                    Most Popular
                  </div>
                  <div
                    className="pointer-events-none absolute top-0 left-0 right-0 h-48"
                    style={{
                      background: "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.72 0.25 285 / 0.10) 0%, transparent 70%)",
                    }}
                  />
                </>
              )}

              <div className="relative flex flex-col flex-1">
                {/* Plan name + description */}
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.72 0.25 285)" }}>
                    {plan.name}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.50 0 0)" }}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold tracking-tight" style={{ color: "oklch(0.95 0 0)" }}>
                      {plan.price}
                    </span>
                    <span className="text-sm mb-1.5" style={{ color: "oklch(0.48 0 0)" }}>
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-xs mt-1 font-medium" style={{ color: "oklch(0.55 0 0)" }}>
                    {plan.limit}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "oklch(0.68 0 0)" }}>
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "oklch(0.72 0.25 285 / 0.15)", color: "oklch(0.82 0.18 285)" }}
                      >
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.disabled ? (
                  <div
                    className="flex items-center justify-center w-full py-3.5 rounded-xl text-sm font-medium cursor-not-allowed"
                    style={{ background: "oklch(1 0 0 / 0.04)", color: "oklch(0.40 0 0)", border: "1px solid oklch(1 0 0 / 0.06)" }}
                  >
                    Coming Soon
                  </div>
                ) : (
                  <a
                    href={`${process.env.NEXT_PUBLIC_APP_URL ?? ""}/signup`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={plan.highlighted ? {
                      background: "linear-gradient(135deg, oklch(0.72 0.25 285) 0%, oklch(0.60 0.22 295) 100%)",
                      color: "white",
                      boxShadow: "0 0 24px oklch(0.72 0.25 285 / 0.30)",
                    } : {
                      background: "oklch(1 0 0 / 0.06)",
                      color: "oklch(0.75 0 0)",
                      border: "1px solid oklch(1 0 0 / 0.10)",
                    }}
                  >
                    {plan.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-8" style={{ color: "oklch(0.50 0 0)" }}>
          {[
            { icon: "🔒", text: "Secure checkout via Paystack" },
            { icon: "⚡", text: "Instant access after payment" },
            { icon: "🚫", text: "Cancel anytime, no lock-in" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm">
              <span>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
