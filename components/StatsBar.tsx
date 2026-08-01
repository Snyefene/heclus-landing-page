const STATS = [
  { value: "8",   suffix: " steps", label: "End-to-end pipeline" },
  { value: "100", suffix: "%",      label: "AI automated workflow" },
  { value: "1",   suffix: " click", label: "To start your pipeline" },
  { value: "∞",   suffix: "",       label: "Videos" },
];

export default function StatsBar() {
  return (
    <section className="py-12 relative">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-5 lg:px-6">
        <div
          data-reveal="group"
          className="rounded-2xl px-4 py-10 grid grid-cols-2 lg:grid-cols-4 gap-y-10"
          style={{
            background: "oklch(0.115 0.004 285)",
            border: "1px solid oklch(1 0 0 / 0.07)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center gap-1.5 px-4 ${i % 2 === 1 ? "border-l" : ""} ${i > 0 ? "lg:border-l" : ""}`}
              style={{ borderColor: "oklch(1 0 0 / 0.07)" }}
            >
              <div className="text-4xl font-bold tracking-tight tabular-nums" style={{ color: "oklch(0.96 0 0)" }}>
                {s.value}
                <span className="text-xl font-semibold" style={{ color: "oklch(0.70 0.11 285)" }}>{s.suffix}</span>
              </div>
              <div className="text-sm" style={{ color: "oklch(0.55 0 0)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
