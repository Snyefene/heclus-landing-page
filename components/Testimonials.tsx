import type { TestimonialsData } from "@/lib/reviews";

function Stars({ value, size = 14 }: { value: number; size?: number }) {
  const filled = Math.round(value);
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < filled ? "oklch(0.82 0.18 285)" : "oklch(1 0 0 / 0.10)"}
          stroke="none"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

function initials(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const second = parts[1]?.[0] ?? "";
  return (first + second).toUpperCase();
}

export default function Testimonials({ data }: { data: TestimonialsData }) {
  const { reviews, totalCount, averageRating } = data;

  return (
    <section id="testimonials" className="py-24 relative">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.72 0.25 285 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "oklch(0.72 0.25 285 / 0.08)",
              border: "1px solid oklch(0.72 0.25 285 / 0.20)",
              color: "oklch(0.75 0.20 285)",
            }}
          >
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Loved by creators
          </h2>
          <div className="inline-flex items-center gap-3">
            <Stars value={averageRating} size={16} />
            <span className="text-sm font-medium" style={{ color: "oklch(0.82 0.18 285)" }}>
              {averageRating.toFixed(1)}
            </span>
            <span className="text-sm" style={{ color: "oklch(0.58 0 0)" }}>
              from {totalCount} {totalCount === 1 ? "review" : "reviews"}
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <figure
              key={`${r.name}-${i}`}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                background: "oklch(0.09 0.006 280 / 0.80)",
                border: "1px solid oklch(1 0 0 / 0.06)",
              }}
            >
              <Stars value={r.rating} />
              <blockquote
                className="text-sm leading-relaxed mt-4 flex-1"
                style={{ color: "oklch(0.82 0 0)" }}
              >
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-5">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{
                    background: "oklch(0.72 0.25 285 / 0.15)",
                    color: "oklch(0.82 0.18 285)",
                  }}
                >
                  {initials(r.name)}
                </span>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "oklch(0.92 0 0)" }}>
                    {r.name}
                  </div>
                  <div className="text-xs" style={{ color: "oklch(0.55 0 0)" }}>
                    Verified customer
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
