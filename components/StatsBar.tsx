const STATS = [
  {
    value: "8",
    suffix: " steps",
    label: "End-to-end pipeline",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    value: "100",
    suffix: "%",
    label: "AI automated workflow",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    value: "1",
    suffix: " click",
    label: "To start your pipeline",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    value: "∞",
    suffix: "",
    label: "Projects & channels",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
];

export default function StatsBar() {
  return (
    <section className="py-12 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="rounded-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8"
          style={{
            background: "oklch(0.09 0.006 280 / 0.60)",
            border: "1px solid oklch(1 0 0 / 0.06)",
          }}
        >
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.72 0.25 285 / 0.12)", color: "oklch(0.82 0.18 285)" }}
              >
                {s.icon}
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight" style={{ color: "oklch(0.95 0 0)" }}>
                  {s.value}
                  <span className="text-xl" style={{ color: "oklch(0.72 0.25 285)" }}>{s.suffix}</span>
                </div>
                <div className="text-sm mt-0.5" style={{ color: "oklch(0.52 0 0)" }}>
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
