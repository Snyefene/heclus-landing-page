import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

// Manual cache-buster for the /pricing testimonials feed. Called by the
// product side after a new user_reviews row lands so the section and the
// Product JSON-LD reflect it without waiting for the 1h unstable_cache
// TTL. Auth is a shared secret in a header - not signed, not replay
// protected, but the blast radius is a single cache purge so that's
// enough.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected) {
    return NextResponse.json(
      { error: "REVALIDATE_SECRET not configured" },
      { status: 500 },
    );
  }

  const provided = request.headers.get("x-revalidate-secret");
  if (provided !== expected) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  revalidateTag("testimonials");
  return NextResponse.json({
    revalidated: true,
    tag: "testimonials",
    now: Date.now(),
  });
}
