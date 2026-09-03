import { connection } from "next/server";
import { supabase } from "@/lib/supabase";
import { fetchSitePlans, type SitePlan } from "@/lib/plans";

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

/** The one thing the plans table does not carry: a line of copy under the
 *  name. Keyed by slug with a fallback, so a new plan appears on the site the
 *  day it is created rather than the day someone remembers this file. */
const BLURB: Record<string, string> = {
  heclus_starter: "Perfect for creators just getting started.",
  heclus_pro: "For creators scaling their content output.",
  heclus_max: "Everything, at full quality, with no niche limit.",
};

// What one plan gives you against the next, in the terms the product bills in.
// The values are the allowances the app enforces; the prices in the header come
// from the plans table with the rest of them.
const COMPARE_ROWS: {
  feature: string;
  heclus_starter: boolean | string;
  heclus_pro: boolean | string;
  heclus_max: boolean | string;
}[] = [
  { feature: "Niches included", heclus_starter: "5 / month", heclus_pro: "10 / month", heclus_max: "Unlimited" },
  { feature: "Heclus Credits", heclus_starter: "1,000 / month", heclus_pro: "2,000 / month", heclus_max: "6,000 / month" },
  { feature: "Videos", heclus_starter: "Unlimited", heclus_pro: "Unlimited", heclus_max: "Unlimited" },
  { feature: "Free image generations", heclus_starter: "300 / month", heclus_pro: "900 / month", heclus_max: "1,500 / month" },
  { feature: "Free video clips", heclus_starter: "150 / month", heclus_pro: "200 / month", heclus_max: "400 / month" },
  { feature: "Free voiceover characters", heclus_starter: "100,000 / month", heclus_pro: "200,000 / month", heclus_max: "500,000 / month" },
  // A standing allowance, not a monthly one — the quota config records this as
  // period "total", so the cell must not read like a per-month reset.
  { feature: "Asset storage", heclus_starter: "100 GB", heclus_pro: "200 GB", heclus_max: "400 GB" },
  { feature: "Output quality", heclus_starter: "Up to 1080p", heclus_pro: "2K+ premium", heclus_max: "4K" },
  { feature: "Custom voice cloning", heclus_starter: false, heclus_pro: "Unlimited", heclus_max: "Unlimited" },
  { feature: "Bulk image and video generation", heclus_starter: true, heclus_pro: true, heclus_max: true },
  // Every plan edits with these; Max is the premium set. Strings rather than
  // ticks because a tick against all three would hide the difference the Max
  // card is sold on.
  { feature: "Transitions, motion and effects", heclus_starter: "Included", heclus_pro: "Included", heclus_max: "Premium" },
  { feature: "Text, elements and sound effects", heclus_starter: "Included", heclus_pro: "Included", heclus_max: "Premium" },
  { feature: "Multi-track timeline editing", heclus_starter: false, heclus_pro: false, heclus_max: true },
  { feature: "Priority rendering queue", heclus_starter: false, heclus_pro: true, heclus_max: true },
  { feature: "Support", heclus_starter: "Community", heclus_pro: "Priority", heclus_max: "Priority" },
  { feature: "Billing", heclus_starter: "Monthly", heclus_pro: "Monthly", heclus_max: "Monthly" },
];

type CompareKey = "heclus_starter" | "heclus_pro" | "heclus_max";

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
  const [founder, plans] = await Promise.all([fetchFounderState(), fetchSitePlans()]);
  // The comparison table's columns are the plans themselves, so a plan the
  // table has no rows for is left out of it rather than rendering a column of
  // blanks. Three of them today.
  const compareColumns = plans
    .filter((p): p is SitePlan & { slug: CompareKey } =>
      p.slug === "heclus_starter" || p.slug === "heclus_pro" || p.slug === "heclus_max")
    .map((p) => ({ key: p.slug, label: p.name, sub: `${p.price} ${p.period}`.trim(), highlighted: p.highlighted }));
  const founderAvailable = founder.spots_left > 0;
  const claimedPct = founder.limit > 0
    ? Math.min(100, ((founder.limit - founder.spots_left) / founder.limit) * 100)
    : 0;
  // Once the promo sells out (0 spots left), the banner hides itself. The
  // comparison table no longer carries a Founder column either way.
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

        {/* The thing every visitor who knew the old product asks first. It sat
            in an FAQ answer near the bottom of the page, which is not where a
            belief about how you are billed gets corrected. */}
        <div data-reveal className="max-w-3xl mx-auto mb-6 rounded-2xl px-5 py-4 flex items-start gap-3"
          style={{
            background: "oklch(0.55 0.15 160 / 0.10)",
            border: "1px solid oklch(0.55 0.15 160 / 0.30)",
          }}>
          <span
            className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "oklch(0.55 0.15 160 / 0.18)", color: "oklch(0.78 0.14 160)" }}
            aria-hidden
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <p className="text-sm leading-relaxed" style={{ color: "oklch(0.80 0 0)" }}>
            <span className="font-semibold" style={{ color: "oklch(0.88 0.08 160)" }}>No API keys. No KIE account.</span>{" "}
            Generation runs on Heclus Credits, on our provider accounts. Your plan&apos;s credits are in the account
            the moment you sign up and renew every month; if you run out early you top up here, in Heclus, rather
            than on a provider&apos;s dashboard.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6" data-reveal="group">
          {plans.map((plan) => (
            <div
              key={plan.slug}
              className="relative rounded-3xl p-8 flex flex-col"
              style={{
                background: plan.disabled ? "oklch(0.10 0.002 285)" : "oklch(0.115 0.004 285)",
                border: plan.disabled ? "1px solid oklch(1 0 0 / 0.05)" : "1px solid oklch(1 0 0 / 0.35)",
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
                    {BLURB[plan.slug] ?? ""}
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
                    {plan.highlighted ? `Start ${plan.name}` : "Get Started"}
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
