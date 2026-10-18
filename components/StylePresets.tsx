const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

type Preset = { id: string; name: string; bestFor: string; sample: string };

// Public names for presets the app names after other people's shows and
// studios: the look is what we offer, not the trademark.
const PUBLIC_NAMES: Record<string, string> = {
  "pixar-3d": "3D Animation",
  "family-guy-cartoon": "Adult Cartoon",
  "stick-figure": "Stick Figure",
};

// Looks Heclus makes that are switched off in the product but shown here: the
// app returns these when named in ?also=, sample image and all.
const ALSO_SHOW = ["stick-figure"];

// The editorial collage look (yellow highlights, halftone cut-outs, marker
// arrows). Its preset in the app has since been rewritten as a different style,
// so it is listed here with the sample still served by the app, third in the grid.
const EDITORIAL: Preset = {
  id: "editorial-explainer",
  name: "Editorial Explainer",
  bestFor: "News, analysis and data explainers",
  sample: `${APP_URL}/style-presets/vox-editorial.jpg`,
};

// The style presets switched on in the app (Admin -> Styles), with the sample
// each one was tuned on: the same rooftop-at-sunrise scene in every style, so
// the grid compares looks rather than subjects. Refreshed every five minutes;
// renders nothing if the app can't be reached.
async function presets(): Promise<Preset[]> {
  if (!APP_URL) return [];
  try {
    const res = await fetch(`${APP_URL}/api/public/style-presets?also=${ALSO_SHOW.join(",")}`, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = (await res.json()) as { presets?: Preset[] };
    const list = (data.presets ?? []).filter((p) => p.sample);
    return list.length ? [...list.slice(0, 2), EDITORIAL, ...list.slice(2)] : [];
  } catch {
    return [];
  }
}

// The first clause of "what it suits", short enough for a card.
const shortFor = (s: string) => s.split(/[,;.]/)[0].trim();

export default async function StylePresets() {
  const list = await presets();
  if (!list.length) return null;
  return (
    <section id="style-presets" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-5" style={{ color: "oklch(0.66 0.10 285)" }}>
            Style presets
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            One scene,
            <span style={{ color: "oklch(0.74 0.10 285)" }}> {list.length} looks.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            Pick a style and every image and clip in your video follows it. Or save your own look as a preset.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" data-reveal="group">
          {list.map((p) => (
            <figure key={p.id} className="group rounded-2xl overflow-hidden card-hover"
              style={{ background: "oklch(0.115 0.004 285)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.sample} alt={`${PUBLIC_NAMES[p.id] ?? p.name} style sample`} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
              </div>
              <figcaption className="px-3.5 py-3">
                <p className="text-sm font-semibold" style={{ color: "oklch(0.93 0 0)" }}>{PUBLIC_NAMES[p.id] ?? p.name}</p>
                {p.bestFor && (
                  <p className="text-xs mt-0.5 line-clamp-1" style={{ color: "oklch(0.56 0 0)" }}>{shortFor(p.bestFor)}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
