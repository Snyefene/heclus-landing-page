import { connection } from "next/server";
import { supabase } from "@/lib/supabase";

// The plans, read from the table the app sells from.
//
// This site used to keep its own copy of them, which is how it came to
// advertise $21 and $39 while the product charged $29.99 and $49.99 and had a
// third plan the site had never heard of. Prices, features, which card is
// highlighted and which is not yet purchasable all live in one row now, edited
// in Admin → Config → Plans, and both the pricing section and the structured
// data read it.

export interface SitePlan {
  slug: string;
  name: string;
  /** As written for a customer: "$29.99". */
  price: string;
  /** "/mo", "/ year". */
  period: string;
  /** Chargeable amount, for the Offer schema, which wants a bare number. */
  priceAmount: string | null;
  features: string[];
  highlighted: boolean;
  /** Listed but not yet purchasable. The card says so instead of linking to a
   *  checkout that would refuse. */
  disabled: boolean;
}

interface PlanRow {
  slug: string;
  name: string;
  price_display: string | null;
  price_cents: number | null;
  period_display: string | null;
  features: unknown;
  highlighted: boolean | null;
  disabled: boolean | null;
  legacy: boolean | null;
}

/**
 * The monthly products, in the order an admin put them in.
 *
 * Founder is left out: it is a closed annual promo sold by its own banner, with
 * a live counter, and it has never been one of these cards. The
 * production-test fixture is left out because it is not a product.
 *
 * Fails to an empty list rather than to stale prices. A pricing section that
 * renders nothing is a visible fault somebody fixes; one that renders last
 * quarter's numbers is not.
 */
export async function fetchSitePlans(): Promise<SitePlan[]> {
  // Opt the enclosing route out of static rendering, the same way the founder
  // counter does, so a price change shows up without a redeploy.
  await connection();
  try {
    const { data, error } = await supabase
      .from("plans")
      .select("slug, name, price_display, price_cents, period_display, features, highlighted, disabled, legacy")
      .order("sort_order");
    if (error) throw error;
    return ((data ?? []) as PlanRow[])
      .filter((r) => r.slug.startsWith("heclus_") && !r.legacy)
      .map((r) => ({
        slug: r.slug,
        name: r.name,
        price: r.price_display ?? "",
        period: (r.period_display ?? "").trim(),
        priceAmount: typeof r.price_cents === "number" ? (r.price_cents / 100).toFixed(2) : null,
        features: Array.isArray(r.features) ? (r.features as string[]) : [],
        highlighted: !!r.highlighted,
        disabled: !!r.disabled,
      }));
  } catch (err) {
    console.error("[plans] read failed", err);
    return [];
  }
}
