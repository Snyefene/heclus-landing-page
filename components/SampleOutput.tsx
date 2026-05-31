export default function SampleOutput() {
  return (
    <section className="py-28 sm:py-36 rule-top"
      style={{ background: "var(--color-paper-2)" }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-muted)" }}>
            <span className="section-num text-base mr-2">02</span>
            Sample output
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight"
            style={{ color: "var(--color-ink)" }}
          >
            What lands on your desk.
          </h2>
          <p className="text-base leading-relaxed mt-5 max-w-xl"
            style={{ color: "var(--color-ink-soft)" }}
          >
            One pipeline run produces a finished video and the raw artifacts behind it.
            Here&apos;s a slice of each, from a sample run modeling{" "}
            <span className="italic">@moneymindset</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {/* ── Script excerpt ──────────────────────────────────── */}
          <figure className="flex flex-col">
            <div className="rounded-md p-6 sm:p-7 flex-1"
              style={{ background: "var(--color-paper)", border: "1px solid var(--color-rule)" }}
            >
              <p className="font-serif text-[17px] leading-[1.55]" style={{ color: "var(--color-ink)" }}>
                &ldquo;Most people think building wealth means saving every dollar.
                They&apos;re wrong&nbsp;— and I can prove it.
                Here&apos;s the one shift that took me from paycheck-to-paycheck
                to $10K a month in passive income…&rdquo;
              </p>
            </div>
            <figcaption className="mt-4 text-xs flex items-center justify-between"
              style={{ color: "var(--color-muted)" }}
            >
              <span>
                <span className="section-num text-sm mr-1.5">01</span>
                Script · 2,418 words
              </span>
              <span>DOCX</span>
            </figcaption>
          </figure>

          {/* ── Thumbnail mockup ────────────────────────────────── */}
          <figure className="flex flex-col">
            <div className="rounded-md overflow-hidden flex-1 relative aspect-video"
              style={{
                background: "linear-gradient(135deg, oklch(0.32 0.18 290) 0%, oklch(0.18 0.10 280) 100%)",
                border: "1px solid var(--color-rule)",
              }}
            >
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <span className="self-end px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: "oklch(0.95 0.12 60)", color: "oklch(0.20 0.10 60)" }}
                >
                  Watch now
                </span>
                <div>
                  <p className="font-serif italic text-2xl leading-tight mb-1" style={{ color: "white" }}>
                    The one money
                  </p>
                  <p className="font-serif text-3xl leading-none tracking-tight" style={{ color: "white" }}>
                    shift that worked.
                  </p>
                </div>
              </div>
            </div>
            <figcaption className="mt-4 text-xs flex items-center justify-between"
              style={{ color: "var(--color-muted)" }}
            >
              <span>
                <span className="section-num text-sm mr-1.5">02</span>
                Thumbnail · 1280×720
              </span>
              <span>PNG</span>
            </figcaption>
          </figure>

          {/* ── Scene image ─────────────────────────────────────── */}
          <figure className="flex flex-col">
            <div className="rounded-md overflow-hidden flex-1 relative aspect-video"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 40%, oklch(0.75 0.18 65) 0%, oklch(0.45 0.20 35) 45%, oklch(0.18 0.08 280) 100%)",
                border: "1px solid var(--color-rule)",
              }}
            >
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-[10px] uppercase tracking-widest font-mono px-2 py-0.5 rounded"
                  style={{ background: "oklch(0 0 0 / 0.4)", color: "white" }}
                >
                  Scene 12 / 32
                </span>
              </div>
            </div>
            <figcaption className="mt-4 text-xs flex items-center justify-between"
              style={{ color: "var(--color-muted)" }}
            >
              <span>
                <span className="section-num text-sm mr-1.5">03</span>
                Scene · sunrise establishing
              </span>
              <span>PNG</span>
            </figcaption>
          </figure>
        </div>

        <p className="mt-14 text-sm italic text-center" style={{ color: "var(--color-muted)" }}>
          Plus the assembled MP4, the voiceover MP3, and the 30+ other scenes — all in one bundle.
        </p>
      </div>
    </section>
  );
}
