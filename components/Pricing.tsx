const FEATURES = [
  "Full 8-step AI automation pipeline",
  "Unlimited projects & channels",
  "Claude AI script generation",
  "Professional voiceover generation",
  "AI image generation (scene-level)",
  "AI thumbnail generation",
  "Video clip assembly",
  "ZIP export — script, audio, images, video",
  "Priority support",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.72 0.25 285 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{
              background: "oklch(0.72 0.25 285 / 0.08)",
              border: "1px solid oklch(0.72 0.25 285 / 0.20)",
              color: "oklch(0.75 0.20 285)",
            }}
          >
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            One Plan. Everything
            <br />
            <span
              style={{
                background: "linear-gradient(120deg, oklch(0.88 0.18 285) 0%, oklch(0.72 0.25 285) 60%, oklch(0.65 0.20 200) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Included.
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "oklch(0.58 0 0)" }}>
            No tiers, no feature gates, no surprises. One affordable subscription
            unlocks the full Heclus pipeline.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg relative">
            {/* Most popular badge */}
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-semibold z-10"
              style={{
                background: "linear-gradient(135deg, oklch(0.72 0.25 285) 0%, oklch(0.60 0.22 295) 100%)",
                color: "white",
                boxShadow: "0 0 20px oklch(0.72 0.25 285 / 0.40)",
              }}
            >
              Full Access
            </div>

            {/* Card */}
            <div
              className="relative rounded-3xl p-8 overflow-hidden"
              style={{
                background: "oklch(0.10 0.008 280)",
                border: "1px solid oklch(0.72 0.25 285 / 0.25)",
                boxShadow: "0 0 60px oklch(0.72 0.25 285 / 0.12), 0 32px 64px oklch(0 0 0 / 0.50)",
              }}
            >
              {/* Card glow */}
              <div
                className="pointer-events-none absolute top-0 left-0 right-0 h-64"
                style={{
                  background: "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.72 0.25 285 / 0.12) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                {/* Price */}
                <div className="mb-8">
                  <div className="text-sm font-medium mb-2" style={{ color: "oklch(0.55 0 0)" }}>
                    Monthly subscription
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold tracking-tight" style={{ color: "oklch(0.95 0 0)" }}>
                      Get Full Access
                    </span>
                  </div>
                  <div className="text-sm mt-2" style={{ color: "oklch(0.50 0 0)" }}>
                    Powered by Paystack — secure, fast checkout
                  </div>
                </div>

                {/* Feature list */}
                <ul className="space-y-3 mb-8">
                  {FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "oklch(0.72 0 0)" }}>
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "oklch(0.72 0.25 285 / 0.15)", color: "oklch(0.82 0.18 285)" }}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={process.env.NEXT_PUBLIC_APP_URL ?? "#"}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.72 0.25 285) 0%, oklch(0.60 0.22 295) 100%)",
                    color: "white",
                    boxShadow: "0 0 30px oklch(0.72 0.25 285 / 0.35)",
                  }}
                >
                  Start Your First Video
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <p className="text-xs text-center mt-4" style={{ color: "oklch(0.40 0 0)" }}>
                  Cancel anytime · No hidden fees · Secure payment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-8" style={{ color: "oklch(0.50 0 0)" }}>
          {[
            { icon: "🔒", text: "Secure checkout via Paystack" },
            { icon: "⚡", text: "Instant access after payment" },
            { icon: "🚫", text: "Cancel anytime, no lock-in" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm">
              <span>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
