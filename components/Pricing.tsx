import { connection } from "next/server";
import { supabase } from "@/lib/supabase";

// Live founder counter — sourced from the same Supabase row the
// youtube-engine /api/founder-spots route reads (product_config row
// service='_global', columns founders_promo_limit /
// founders_subscriptions_count). The RPC get_founder_promo_state returns
// { taken, remaining, active, limit } as a single O(1) read; if it isn't
// deployed we fall back to reading product_config directly so the banner
// still tracks reality. FOUNDER_TOTAL_FALLBACK is the last-resort value
// used only when both reads fail.
const FOUNDER_TOTAL_FALLBACK = 100;

type FounderState = { spots_left: number; limit: number };

async function fetchFounderState(): Promise<FounderState> {
  // Opt the enclosing route out of static rendering so the counter
  // reflects the DB on every request rather than the build snapshot.
  await connection();

  try {
    const { data, error } = await supabase
      .rpc("get_founder_promo_state")
      .single();
    if (error) throw error;
    if (data) {
      const row = data as { taken?: number; remaining?: number; active?: boolean; limit?: number };
      const limit = typeof row.limit === "number"
        ? row.limit
        : (typeof row.taken === "number" && typeof row.remaining === "number"
          ? row.taken + row.remaining
          : FOUNDER_TOTAL_FALLBACK);
      if (typeof row.remaining === "number") {
        return { spots_left: row.remaining, limit };
      }
    }
    throw new Error("get_founder_promo_state returned no usable row");
  } catch (err) {
    console.error("[Pricing] get_founder_promo_state RPC failed", err);
  }

  try {
    const { data, error } = await supabase
      .from("product_config")
      .select("founders_promo_limit, founders_subscriptions_count")
      .eq("service", "_global")
      .single();
    if (error) throw error;
    if (data) {
      const row = data as { founders_promo_limit: number | null; founders_subscriptions_count: number | null };
      const limit = row.founders_promo_limit ?? FOUNDER_TOTAL_FALLBACK;
      const taken = row.founders_subscriptions_count ?? 0;
      return { spots_left: Math.max(0, limit - taken), limit };
    }
  } catch (err) {
    console.error("[Pricing] product_config fallback failed", err);
  }

  return { spots_left: FOUNDER_TOTAL_FALLBACK, limit: FOUNDER_TOTAL_FALLBACK };
}

const PLANS = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for creators just getting started.",
    limit: "5 niches/month",
    features: [
      "5 niches per month",
      "Standard image processing",
      "Full 8-step AI pipeline",
      "All features included",
      "Community support",
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
      "Everything in Starter",
      "Clone unlimited YouTube niches",
      "Unlimited video creation",
      "Bulk video generation",
      "Priority rendering queue",
      "Priority support",
    ],
    cta: "Start Pro",
    highlighted: true,
    disabled: false,
  },
];

export default async function Pricing() {
  const founder = await fetchFounderState();
  const claimedPct = founder.limit > 0
    ? Math.min(100, ((founder.limit - founder.spots_left) / founder.limit) * 100)
    : 0;
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
                backgroundImage: "linear-gradient(120deg, oklch(0.88 0.18 285) 0%, oklch(0.72 0.25 285) 60%, oklch(0.72 0.25 285) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              pricing.
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            Pick the plan that fits your output. Upgrade or cancel anytime.
          </p>
        </div>

        {/* Founder promo */}
        <div className="max-w-3xl mx-auto mb-10 rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, oklch(0.12 0.015 285) 0%, oklch(0.10 0.010 285) 100%)",
            border: "1px solid oklch(0.72 0.25 285 / 0.40)",
            boxShadow: "0 0 40px oklch(0.72 0.25 285 / 0.10)",
          }}>
          <div className="pointer-events-none absolute top-0 right-0 w-64 h-32"
            style={{ background: "radial-gradient(ellipse at top right, oklch(0.72 0.25 285 / 0.12), transparent 70%)" }} />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{ background: "oklch(0.72 0.25 285 / 0.20)", color: "oklch(0.82 0.18 285)" }}>
                  🔥 Founder Offer · First {founder.limit} only
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1" style={{ color: "oklch(0.95 0 0)" }}>
                $40 · Full access for 1 year
              </h3>
              <p className="text-sm" style={{ color: "oklch(0.55 0 0)" }}>
                Pay once, get 20 niches + full AI pipeline for a full year — no monthly renewal. After your year, choose any monthly plan.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-stretch sm:items-end gap-2.5">
              <a
                href={`${process.env.NEXT_PUBLIC_APP_URL ?? ""}/signup?plan=founder`}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, oklch(0.72 0.25 285), oklch(0.58 0.28 300))",
                  color: "white",
                  boxShadow: "0 0 20px oklch(0.72 0.25 285 / 0.30)",
                }}
              >
                Claim Founder Spot →
              </a>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <div className="flex-1 sm:w-[140px] h-1.5 rounded-full overflow-hidden"
                  style={{ background: "oklch(0.14 0.008 285)" }}>
                  <div className="h-full rounded-full"
                    style={{
                      background: "oklch(0.72 0.25 285)",
                      width: `${claimedPct}%`,
                    }} />
                </div>
                <span className="text-xs font-semibold tabular-nums whitespace-nowrap"
                  style={{ color: "oklch(0.82 0.18 285)" }}>
                  {founder.spots_left} spots left
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-3xl p-8 flex flex-col"
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
                    href={`${process.env.NEXT_PUBLIC_APP_URL ?? ""}/signup?plan=${plan.name.toLowerCase()}`}
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
            {
              text: "Secure checkout via Paystack",
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              ),
            },
            {
              text: "Instant access after payment",
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              ),
            },
            {
              text: "Cancel anytime, no lock-in",
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm">
              <span style={{ color: "oklch(0.72 0.25 285)" }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
