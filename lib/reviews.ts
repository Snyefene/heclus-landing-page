import { unstable_cache } from "next/cache";
import { supabase } from "@/lib/supabase";

export type Testimonial = {
  name: string;
  rating: number;
  text: string;
  createdAt: string;
};

export type TestimonialsData = {
  reviews: Testimonial[];
  totalCount: number;
  averageRating: number;
};

// Threshold for lighting up the on-page section AND the aggregateRating
// / review JSON-LD on /pricing. Below this we render nothing and emit no
// rating schema, since a 1-2 review sample is spammy and Google won't
// render SERP stars from it anyway.
const MIN_REVIEWS_THRESHOLD = 5;
const MIN_TEXT_LENGTH = 20;
const MIN_RATING = 4;
const MAX_REVIEWS_ON_PAGE = 6;

async function fetchTestimonialsRaw(): Promise<TestimonialsData | null> {
  try {
    const { data: rows, error } = await supabase
      .from("user_reviews")
      .select("user_id, rating, review_text, created_at")
      .not("rating", "is", null)
      .not("review_text", "is", null)
      .gte("rating", MIN_RATING)
      .order("created_at", { ascending: false });
    if (error) throw error;
    if (!rows) return null;

    const usable = rows.filter(
      (r) =>
        typeof r.review_text === "string" &&
        r.review_text.trim().length > MIN_TEXT_LENGTH,
    );
    if (usable.length < MIN_REVIEWS_THRESHOLD) return null;

    const userIds = new Set(usable.map((r) => r.user_id as string));
    const nameMap = new Map<string, string>();

    // Paginated because listUsers caps at 1000/page; the current base is
    // ~75 users so page 1 is enough, but the loop keeps this correct if
    // the user base grows.
    let page = 1;
    while (true) {
      const { data, error: usersErr } = await supabase.auth.admin.listUsers({
        page,
        perPage: 200,
      });
      if (usersErr) throw usersErr;
      const users = data?.users ?? [];
      if (users.length === 0) break;
      for (const u of users) {
        if (!userIds.has(u.id)) continue;
        const meta = (u.user_metadata ?? {}) as Record<string, unknown>;
        const fullName =
          typeof meta.full_name === "string" ? meta.full_name.trim() : "";
        const first =
          typeof meta.first_name === "string" ? meta.first_name.trim() : "";
        const last =
          typeof meta.last_name === "string" ? meta.last_name.trim() : "";
        const composed = [first, last].filter(Boolean).join(" ").trim();
        const resolved = fullName || composed;
        if (resolved) nameMap.set(u.id, resolved);
      }
      if (users.length < 200) break;
      page++;
    }

    const withNames = usable
      .map((r) => {
        const name = nameMap.get(r.user_id as string);
        if (!name) return null;
        return {
          name: shortenName(name),
          rating: r.rating as number,
          text: (r.review_text as string).trim(),
          createdAt: r.created_at as string,
        } satisfies Testimonial;
      })
      .filter((t): t is Testimonial => t !== null);

    if (withNames.length < MIN_REVIEWS_THRESHOLD) return null;

    const avg =
      withNames.reduce((sum, r) => sum + r.rating, 0) / withNames.length;

    return {
      reviews: withNames.slice(0, MAX_REVIEWS_ON_PAGE),
      totalCount: withNames.length,
      averageRating: Math.round(avg * 10) / 10,
    };
  } catch (err) {
    console.error("[reviews] fetchTestimonials failed", err);
    return null;
  }
}

// "John Doe" -> "John D." — keeps first name in full, last name to an
// initial. Matches the norm for public testimonials and reduces the
// surface area for reviewer identification without hiding the person.
function shortenName(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return name;
  if (parts.length === 1) return parts[0];
  const first = parts[0];
  const last = parts[parts.length - 1];
  return `${first} ${last[0]?.toUpperCase() ?? ""}.`;
}

export const getTestimonials = unstable_cache(
  fetchTestimonialsRaw,
  ["testimonials-v1"],
  { revalidate: 3600, tags: ["testimonials"] },
);
