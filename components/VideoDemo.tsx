import DemoPlayer from "@/components/DemoPlayer";

// The Demo section. On phones the same player sits in the hero instead of the
// mockup, so this section is hidden there rather than showing it twice.
export default function VideoDemo() {
  return (
    <section id="demo" className="py-28 relative hidden md:block">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12" data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-5" style={{ color: "oklch(0.66 0.10 285)" }}>
            Demo
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            See it in <span style={{ color: "oklch(0.74 0.10 285)" }}>action.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            Watch the full pipeline turn a single niche into finished content.
          </p>
        </div>

        <DemoPlayer />
      </div>
    </section>
  );
}
