import Image from "next/image";

export const metadata = { title: "Refund Policy — Heclus" };

export default function RefundPage() {
  return (
    <div className="min-h-screen py-20 px-6" style={{ background: "var(--bg-page, oklch(0.07 0.004 280))" }}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className="flex items-center gap-2.5 mb-12">
          <Image src="/heclus-icon-white.svg" alt="Heclus" width={32} height={32} className="rounded-lg" />
          <div className="flex flex-col leading-none">
            <span className="text-base font-semibold" style={{ color: "oklch(0.92 0 0)" }}>Heclus</span>
            <span className="text-xs font-medium tracking-wide" style={{ color: "#888" }}>by aiTrends</span>
          </div>
        </a>
        <h1 className="text-4xl font-bold mb-2" style={{ color: "oklch(0.95 0 0)" }}>Refund Policy</h1>
        <p className="text-sm mb-12" style={{ color: "oklch(0.45 0 0)" }}>Last updated: May 2025</p>

        <div className="space-y-10 text-sm leading-relaxed" style={{ color: "oklch(0.62 0 0)" }}>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>Overview</h2>
            <p>We want you to be satisfied with Heclus. If you are not happy with your purchase, we offer refunds under the conditions outlined below.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>Monthly Subscriptions (Starter & Pro)</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You may request a full refund within <strong style={{ color: "oklch(0.78 0 0)" }}>7 days</strong> of your initial purchase.</li>
              <li>Refunds are not available after the 7-day window has passed.</li>
              <li>Cancelling your subscription stops future billing but does not entitle you to a refund for the current billing period.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>Founder Plan (One-Time Payment)</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You may request a full refund within <strong style={{ color: "oklch(0.78 0 0)" }}>14 days</strong> of purchase if you have not extensively used the Service.</li>
              <li>Refunds are evaluated on a case-by-case basis for the Founder plan.</li>
              <li>If approved, your Founder access will be revoked upon refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>Non-Refundable Situations</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Requests made after the applicable refund window</li>
              <li>Accounts terminated for violation of our Terms of Service</li>
              <li>Dissatisfaction with AI-generated output quality (as results depend on third-party AI services)</li>
              <li>Renewals — please cancel before your renewal date to avoid being charged</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>How to Request a Refund</h2>
            <p>Email us at <a href="mailto:support@heclus.com" className="underline">support@heclus.com</a> with:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your account email address</li>
              <li>Date of purchase</li>
              <li>Reason for the refund request</li>
            </ul>
            <p className="mt-3">We will respond within 3 business days.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>Processing Time</h2>
            <p>Approved refunds are processed within 5–10 business days and returned to your original payment method via Gumroad.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>Contact</h2>
            <p>Questions about refunds? Reach us at <a href="mailto:support@heclus.com" className="underline">support@heclus.com</a>.</p>
          </section>

        </div>

        <div className="mt-16">
          <a href="/" className="text-sm hover:underline" style={{ color: "oklch(0.72 0.25 285)" }}>← Back to home</a>
        </div>
      </div>
    </div>
  );
}
