import FeaturedGrid, { type FeaturedVideo } from "@/components/FeaturedGrid";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

// Videos made with Heclus that an admin featured in the app. Refreshed every
// five minutes,
// so featuring one in Admin -> Gallery reaches the site without a deploy.
// Renders nothing when none are featured or the app can't be reached.
async function featured(): Promise<FeaturedVideo[]> {
  if (!APP_URL) return [];
  try {
    // The query string is part of the cache key: changing it drops a cached
    // empty answer from before anything was featured.
    const res = await fetch(`${APP_URL}/api/public/gallery?v=3`, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = (await res.json()) as { videos?: FeaturedVideo[] };
    return data.videos ?? [];
  } catch {
    return [];
  }
}

// standalone: the /gallery page, where this is the h1 and an empty list says so.
export default async function FeaturedVideos({ standalone = false }: { standalone?: boolean }) {
  const videos = await featured();
  if (!videos.length && !standalone) return null;
  const Heading = standalone ? "h1" : "h2";
  return (
    <section id="made-with-heclus" className="py-28 relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-5" style={{ color: "oklch(0.66 0.10 285)" }}>
            Made with Heclus
          </p>
          <Heading className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {standalone ? "AI video gallery, " : "Real videos, "}
            <span style={{ color: "oklch(0.74 0.10 285)" }}>{standalone ? "made with Heclus." : "made here."}</span>
          </Heading>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            {standalone
              ? "AI YouTube videos creators made with Heclus, in every style: Pixar-style animation, stick figure explainers, 3D cinematic and more."
              : "A few of the videos creators have made with Heclus."}
          </p>
        </div>
        {videos.length ? <FeaturedGrid videos={videos} /> : (
          <p className="text-center" style={{ color: "oklch(0.58 0 0)" }}>New videos are on their way.</p>
        )}
        <div className="mt-14 text-center" data-reveal>
          <a href={`${APP_URL}/signup`}
            className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "oklch(0.72 0.25 285)", color: "white" }}>
            Start creating
          </a>
        </div>
      </div>
    </section>
  );
}
