import Image from "next/image";

export const metadata = {
  title: "Terms of Service — Heclus",
  description: "Heclus terms of service — what you agree to when using the Heclus AI YouTube video pipeline.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-2" style={{ color: "oklch(0.95 0 0)" }}>Terms of Service</h1>
        <p className="text-sm mb-12" style={{ color: "oklch(0.45 0 0)" }}>Last updated: May 2025</p>

        <div className="space-y-10 text-sm leading-relaxed" style={{ color: "oklch(0.62 0 0)" }}>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>1. Acceptance of Terms</h2>
            <p>By accessing or using Heclus ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Service. Heclus is operated by aiTrends.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>2. Description of Service</h2>
            <p>Heclus is an AI-powered tool that helps creators analyze YouTube channels, generate scripts, voiceovers, images, thumbnails, and assemble video content. The Service requires users to provide their own third-party API keys (e.g. Claude AI, ElevenLabs, KIE.ai). Heclus does not guarantee specific output quality as results depend on the third-party services you connect.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>3. User Accounts</h2>
            <p>You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials and for all activity under your account. Notify us immediately at <a href="mailto:support@heclus.com" className="underline">support@heclus.com</a> if you suspect unauthorized access.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>4. Subscriptions and Payments</h2>
            <p>Heclus offers monthly subscription plans and a one-time Founder plan. Payments are processed securely via Gumroad. Subscription fees are billed in advance. The Founder plan grants access for one year from the date of purchase, after which a monthly subscription is required to continue. We reserve the right to change pricing with 30 days notice.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>5. Acceptable Use</h2>
            <p>You agree not to use the Service to generate content that is illegal, harmful, defamatory, or infringes on third-party intellectual property. You are solely responsible for the content you create using the Service and how you use it on external platforms such as YouTube.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>6. Intellectual Property</h2>
            <p>You retain ownership of the content you generate using Heclus. Heclus retains ownership of the platform, software, and underlying technology. You grant Heclus a limited license to process your inputs solely to deliver the Service.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Heclus and aiTrends shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service. Our total liability to you shall not exceed the amount paid by you in the three months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>8. Termination</h2>
            <p>We reserve the right to suspend or terminate your account if you violate these terms. You may cancel your subscription at any time through your account settings or by contacting support.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>9. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>10. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:support@heclus.com" className="underline">support@heclus.com</a>.</p>
          </section>

        </div>

        <div className="mt-16">
          <a href="/" className="text-sm hover:underline" style={{ color: "oklch(0.72 0.25 285)" }}>← Back to home</a>
        </div>
      </div>
    </div>
  );
}
