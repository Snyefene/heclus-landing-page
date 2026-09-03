import Image from "next/image";

export const metadata = {
  title: "Terms of Service - Heclus",
  description: "Heclus terms of service - what you agree to when using the Heclus AI YouTube video pipeline.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6" style={{ background: "var(--bg-page, oklch(0.07 0.004 280))" }}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className="flex items-center gap-2.5 mb-12">
          <Image src="/heclus-icon-white.svg" alt="Heclus" width={32} height={32} className="rounded-lg" />
          <div className="flex flex-col leading-none">
            <span className="text-base font-semibold" style={{ color: "oklch(0.92 0 0)" }}>Heclus</span>
            <span className="text-xs font-medium tracking-wide" style={{ color: "#888" }}>by aiTrends</span>
          </div>
        </a>
        <h1 className="text-4xl font-bold mb-2" style={{ color: "oklch(0.95 0 0)" }}>Terms of Service</h1>
        <p className="text-sm mb-12" style={{ color: "oklch(0.72 0 0)" }}>Last updated: May 2025</p>

        <div className="space-y-4 text-sm leading-relaxed" style={{ color: "oklch(0.62 0 0)" }}>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>1. Acceptance of Terms</h2>
            <p>By accessing or using Heclus ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Service. Heclus is operated by aiTrends.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>2. Description of Service</h2>
            <p>Heclus is an AI-powered tool that helps creators analyze YouTube channels, generate scripts, voiceovers, images, thumbnails, and assemble video content. Generation runs on the Heclus Credits included with your plan, on Heclus&apos;s own provider accounts; you may instead connect your own third-party API keys (e.g. Anthropic, ElevenLabs, KIE.ai) and be billed by those providers directly. Heclus does not guarantee specific output quality as results depend on the third-party services you connect.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>3. Service Limits</h2>
            <p>Generated videos are currently capped at a maximum length of 45 minutes per video. This limit applies to the assembled output produced by the Service and may change as the platform evolves; any changes will take effect for videos generated after the change date. Accounts that need to generate videos longer than 45 minutes must submit a custom request to <a href="mailto:support@heclus.com" className="underline" style={{ color: "oklch(0.74 0.10 285)" }}>support@heclus.com</a>; extended limits are granted on a case-by-case basis and may be subject to additional terms or fees.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>4. User Accounts</h2>
            <p>You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials and for all activity under your account. Notify us immediately at <a href="mailto:support@heclus.com" className="underline" style={{ color: "oklch(0.74 0.10 285)" }}>support@heclus.com</a> if you suspect unauthorized access.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>5. Subscriptions and Payments</h2>
            <p>Heclus offers monthly subscription plans and a one-time Founder plan. Payments are processed securely via Dodo. Subscription fees are billed in advance. The Founder plan grants access for one year from the date of purchase, after which a monthly subscription is required to continue. We reserve the right to change pricing with 30 days notice.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>6. Acceptable Use</h2>
            <p>You agree not to use the Service to generate content that is illegal, harmful, defamatory, or infringes on third-party intellectual property. You are solely responsible for the content you create using the Service and how you use it on external platforms such as YouTube.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>7. Intellectual Property</h2>
            <p>You retain ownership of the content you generate using Heclus. Heclus retains ownership of the platform, software, and underlying technology. You grant Heclus a limited license to process your inputs solely to deliver the Service.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Heclus and aiTrends shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service. Our total liability to you shall not exceed the amount paid by you in the three months preceding the claim.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>9. Termination</h2>
            <p>We reserve the right to suspend or terminate your account if you violate these terms. You may cancel your subscription at any time through your account settings or by contacting support.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>10. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the updated Terms.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>11. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:support@heclus.com" className="underline" style={{ color: "oklch(0.74 0.10 285)" }}>support@heclus.com</a>.</p>
          </section>

        </div>

        <div className="mt-16">
          <a href="/" className="text-sm hover:underline" style={{ color: "oklch(0.74 0.10 285)" }}>← Back to home</a>
        </div>
      </div>
    </div>
  );
}
