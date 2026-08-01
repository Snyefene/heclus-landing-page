import { connection } from "next/server";
import { supabase } from "@/lib/supabase";

// Live founder counter - sourced from the same Supabase row the
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
    price: "$21",
    period: "/month",
    description: "Perfect for creators just getting started.",
    limit: "5 niches/month",
    features: [
      "5 niches",
      "Full AI pipeline excluding pro features",
      "Standard image processing",
      "Up to 1080p output",
      "Community support",
    ],
    upcoming: [
      "Free 100,000 voiceover chars / month",
    ],
    cta: "Get Started",
    highlighted: false,
    disabled: false,
  },
  {
    name: "Pro",
    price: "$39",
    period: "/month",
    description: "For creators scaling their content output.",
    limit: "10 niches/month",
    features: [
      "Everything in Starter",
      "10 niches",
      "Unlimited videos",
      "Bulk video generation",
      "Priority rendering queue",
      "Priority support",
      "2K+ premium output",
    ],
    upcoming: [
      "Free 200,000 voiceover chars / month",
      "Free Unlimited custom voice cloning - no API key needed",
    ],
    cta: "Start Pro",
    highlighted: true,
    disabled: false,
  },
];

// Feature comparison matrix. Columns mirror the offerings above
// (Founder promo + the two monthly plans). A cell value of true renders
// a check, false renders a dash, and a string renders as-is.
const COMPARE_COLUMNS = [
  { key: "founder", label: "Founder", sub: "$40 · one-time / yr", highlighted: false },
  { key: "starter", label: "Starter", sub: "$21 / mo", highlighted: false },
  { key: "pro", label: "Pro", sub: "$39 / mo", highlighted: true },
] as const;

const COMPARE_ROWS: {
  feature: string;
  founder: boolean | string;
  starter: boolean | string;
  pro: boolean | string;
}[] = [
  { feature: "Niches included", founder: "20 / year", starter: "5 / month", pro: "10 / month" },
  { feature: "Full AI pipeline", founder: true, starter: true, pro: true },
  { feature: "Video generation", founder: "Unlimited", starter: "Unlimited", pro: "Unlimited" },
  { feature: "Image processing", founder: "Standard", starter: "Standard", pro: "Standard" },
  { feature: "Output quality", founder: "Up to 1080p", starter: "Up to 1080p", pro: "Up to 4K premium" },
  { feature: "Bulk image generation", founder: true, starter: true, pro: true },
  { feature: "Bulk video generation", founder: true, starter: true, pro: true },
  { feature: "Priority rendering queue", founder: false, starter: false, pro: true },
  { feature: "Support", founder: "Community", starter: "Community", pro: "Priority" },
  { feature: "Billing", founder: "One-time (1 year)", starter: "Monthly", pro: "Monthly" },
];

function CompareCell({ value, highlighted }: { value: boolean | string; highlighted: boolean }) {
  if (value === true) {
    return (
      <span
        className="inline-flex w-5 h-5 rounded-full items-center justify-center"
        style={{
          background: "oklch(1 0 0 / 0.06)",
          color: "oklch(0.72 0.11 285)",
        }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-block" style={{ color: "oklch(0.40 0 0)" }} aria-label="Not included">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className="text-xs font-medium"
      style={{ color: highlighted ? "oklch(0.88 0 0)" : "oklch(0.72 0 0)" }}
    >
      {value}
    </span>
  );
}

export default async function Pricing() {
  const founder = await fetchFounderState();
  const founderAvailable = founder.spots_left > 0;
  const claimedPct = founder.limit > 0
    ? Math.min(100, ((founder.limit - founder.spots_left) / founder.limit) * 100)
    : 0;
  // Once the promo sells out (0 spots left), drop the Founder plan entirely -
  // hide the promo banner and its comparison-table column.
  const compareColumns = founderAvailable
    ? COMPARE_COLUMNS
    : COMPARE_COLUMNS.filter((col) => col.key !== "founder");
  return (
    <section id="pricing" className="py-28 relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-5" style={{ color: "oklch(0.66 0.10 285)" }}>
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent
            <br />
            <span style={{ color: "oklch(0.74 0.10 285)" }}>pricing.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            Pick the plan that fits your output. Upgrade or cancel anytime.
          </p>
        </div>

        {/* Founder promo - hidden once the promo sells out */}
        {founderAvailable && (
        <div data-reveal className="max-w-3xl mx-auto mb-10 rounded-2xl p-6 relative overflow-hidden elevated"
          style={{
            background: "oklch(0.13 0.006 285)",
            border: "1px solid oklch(0.58 0.15 285 / 0.35)",
          }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{ background: "oklch(0.58 0.15 285 / 0.14)", color: "oklch(0.76 0.10 285)" }}>
                  Founder Offer · First {founder.limit} only
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1" style={{ color: "oklch(0.95 0 0)" }}>
                $40 · Full access for 1 year
              </h3>
              <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.74 0.10 285)" }}>
                Everything in Starter
              </p>
              <p className="text-sm" style={{ color: "oklch(0.55 0 0)" }}>
                Pay once, get 20 niches + full AI pipeline for a full year - no monthly renewal. After one year, choose any monthly plan.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-stretch sm:items-end gap-2.5">
              <a
                href={`${process.env.NEXT_PUBLIC_APP_URL ?? ""}/signup?plan=founder`}
                className="lift flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap"
                style={{
                  background: "oklch(0.55 0.16 285)",
                  color: "white",
                }}
              >
                Claim Founder Spot →
              </a>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <div className="flex-1 sm:w-[140px] h-1.5 rounded-full overflow-hidden"
                  style={{ background: "oklch(1 0 0 / 0.07)" }}>
                  <div className="h-full rounded-full"
                    style={{
                      background: "oklch(0.62 0.15 285)",
                      width: `${claimedPct}%`,
                    }} />
                </div>
                <span className="text-xs font-semibold tabular-nums whitespace-nowrap"
                  style={{ color: "oklch(0.74 0.10 285)" }}>
                  {founder.spots_left} spots left
                </span>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6" data-reveal="group">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-3xl p-8 flex flex-col"
              style={{
                background: plan.disabled ? "oklch(0.10 0.002 285)" : "oklch(0.115 0.004 285)",
                border: plan.disabled ? "1px solid oklch(1 0 0 / 0.05)" : plan.highlighted
                  ? "1px solid oklch(0.58 0.15 285 / 0.40)"
                  : "1px solid oklch(1 0 0 / 0.08)",
                boxShadow: plan.disabled ? "none" : "0 8px 32px oklch(0 0 0 / 0.30)",
                opacity: plan.disabled ? 0.5 : 1,
              }}
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold z-10 whitespace-nowrap"
                  style={{
                    background: "oklch(0.55 0.16 285)",
                    color: "white",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div className="relative flex flex-col flex-1">
                {/* Plan name + description */}
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.74 0.10 285)" }}>
                    {plan.name}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.78 0 0)" }}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold tracking-tight" style={{ color: "oklch(0.95 0 0)" }}>
                      {plan.price}
                    </span>
                    <span className="text-sm mb-1.5" style={{ color: "oklch(0.76 0 0)" }}>
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
                        style={{ background: "oklch(1 0 0 / 0.06)", color: "oklch(0.72 0.11 285)" }}
                      >
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}

                  {plan.upcoming && plan.upcoming.length > 0 && (
                    <li className="pt-3 mt-1" style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
                      <p className="text-[10px] font-semibold uppercase tracking-wider mb-2"
                        style={{ color: "oklch(0.72 0.11 285)" }}>
                        Releasing this week
                      </p>
                      <ul className="space-y-2.5">
                        {plan.upcoming.map((f) => (
                          <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "oklch(0.68 0 0)" }}>
                            <span
                              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ background: "oklch(0.72 0.11 285 / 0.12)", color: "oklch(0.72 0.11 285)" }}
                            >
                              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <circle cx="12" cy="12" r="9" />
                              </svg>
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>

                {/* CTA */}
                {plan.disabled ? (
                  <div
                    className="flex items-center justify-center w-full py-3.5 rounded-xl text-sm font-medium cursor-not-allowed"
                    style={{ background: "oklch(1 0 0 / 0.04)", color: "oklch(0.66 0 0)", border: "1px solid oklch(1 0 0 / 0.06)" }}
                  >
                    Coming Soon
                  </div>
                ) : (
                  <a
                    href={`${process.env.NEXT_PUBLIC_APP_URL ?? ""}/signup?plan=${plan.name.toLowerCase()}`}
                    className="lift flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold"
                    style={plan.highlighted ? {
                      background: "oklch(0.55 0.16 285)",
                      color: "white",
                    } : {
                      background: "oklch(1 0 0 / 0.06)",
                      color: "oklch(0.78 0 0)",
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

        {/* Comparison table */}
        <div className="mt-16 max-w-4xl mx-auto" data-reveal>
          <h3 className="text-center text-2xl font-bold tracking-tight mb-2" style={{ color: "oklch(0.95 0 0)" }}>
            Compare plans
          </h3>
          <p className="text-center text-sm mb-8" style={{ color: "oklch(0.55 0 0)" }}>
            Every feature, side by side.
          </p>

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "oklch(0.115 0.004 285)",
              border: "1px solid oklch(1 0 0 / 0.08)",
              boxShadow: "0 8px 32px oklch(0 0 0 / 0.30)",
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left" style={{ minWidth: "560px" }}>
                <thead>
                  <tr>
                    <th className="py-5 px-5 sm:px-6 text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.55 0 0)" }}>
                      Feature
                    </th>
                    {compareColumns.map((col) => (
                      <th
                        key={col.key}
                        className="py-5 px-4 text-center align-bottom relative"
                        style={{
                          background: col.highlighted ? "oklch(1 0 0 / 0.025)" : "transparent",
                        }}
                      >
                        {col.highlighted && (
                          <span
                            className="absolute top-0 left-0 right-0 h-0.5"
                            style={{ background: "oklch(0.58 0.15 285)" }}
                          />
                        )}
                        <span className="block text-sm font-bold" style={{ color: col.highlighted ? "oklch(0.76 0.10 285)" : "oklch(0.90 0 0)" }}>
                          {col.label}
                        </span>
                        <span className="block text-xs mt-0.5 font-medium whitespace-nowrap" style={{ color: "oklch(0.55 0 0)" }}>
                          {col.sub}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{ borderTop: "1px solid oklch(1 0 0 / 0.06)" }}
                    >
                      <td
                        className="py-3.5 px-5 sm:px-6 text-sm font-medium"
                        style={{
                          color: "oklch(0.78 0 0)",
                          background: i % 2 === 1 ? "oklch(1 0 0 / 0.012)" : "transparent",
                        }}
                      >
                        {row.feature}
                      </td>
                      {compareColumns.map((col) => (
                        <td
                          key={col.key}
                          className="py-3.5 px-4 text-center"
                          style={{
                            background: col.highlighted
                              ? "oklch(1 0 0 / 0.025)"
                              : i % 2 === 1
                                ? "oklch(1 0 0 / 0.012)"
                                : "transparent",
                          }}
                        >
                          <CompareCell value={row[col.key]} highlighted={col.highlighted} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Guarantee strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-8" style={{ color: "oklch(0.78 0 0)" }}>
          {[
            {
              text: "Secure checkout via Dodo",
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
              <span style={{ color: "oklch(0.70 0.11 285)" }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
