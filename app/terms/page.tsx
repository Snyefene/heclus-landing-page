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
        <p className="text-sm mb-12" style={{ color: "oklch(0.72 0 0)" }}>Last updated: September 2026</p>

        <div className="space-y-4 text-sm leading-relaxed" style={{ color: "oklch(0.62 0 0)" }}>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>1. Acceptance of Terms</h2>
            <p>By accessing or using Heclus ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Service. Heclus is operated by aiTrends.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>2. Description of Service</h2>
            <p>Heclus is an AI-powered tool that helps creators analyze YouTube channels, generate scripts, voiceovers, images, thumbnails, and assemble video content. Generation runs on the Heclus Credits included with your plan, on Heclus&apos;s own provider accounts. You may optionally connect your own ElevenLabs account to use voices you have cloned there. Heclus does not guarantee specific output quality, as results depend on the AI models used and on the inputs you give them.</p>
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
            <p>Heclus offers monthly subscription plans and a one-time Founder plan. Subscription fees are billed in advance and renew automatically each month until you cancel. Cancelling stops the next renewal and leaves your access in place until the end of the period you have already paid for. The Founder plan grants access for one year from the date of purchase, after which a monthly subscription is required to continue. We reserve the right to change pricing with 30 days notice.</p>
            <p className="mt-3">Payments are processed by Dodo Payments, which acts as merchant of record for the sale. Prices shown on the site are exclusive of sales tax and VAT; any tax due is calculated and added at checkout based on where you are. Refunds are governed by our <a href="/refund" className="underline" style={{ color: "oklch(0.74 0.10 285)" }}>refund policy</a>.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>6. Heclus Credits</h2>
            <p>Generation is paid for in Heclus Credits, which run on Heclus&apos;s own provider accounts. Each plan includes a monthly allowance of credits together with separate monthly allowances for image, clip and voiceover generation. Each step prices the work before it runs and shows your remaining balance, and only work that completes is charged: a failed generation costs nothing.</p>
            <p className="mt-3">Included allowances are part of your subscription. They reset at the start of each billing period and do not roll over. Credits you purchase as a top-up do not expire while your account is open. Credits are a prepaid entitlement to use the Service, not a currency: they have no cash value, cannot be transferred between accounts or exchanged for money, and are not separately refundable once spent, except where the law or our <a href="/refund" className="underline" style={{ color: "oklch(0.74 0.10 285)" }}>refund policy</a> says otherwise.</p>
            <p className="mt-3">What a given generation costs in credits depends on the model you choose, and those costs follow what the underlying providers charge us. We may change them, and will show the current price on the step before you run it.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>7. Storage and Your Content</h2>
            <p>Each plan includes a standing storage allowance covering everything your projects hold: generated images, clips, voiceovers, thumbnails and finished exports. It is not a monthly reset. When you reach the cap, nothing you have made is deleted or locked and you can still download any project, but new generations will not run until you are back under it. Deleting a project frees its space immediately.</p>
            <p className="mt-3">You can download a complete ZIP of any project at any time, and we recommend doing so for work you want to keep. If your account is closed, by you or by us, we may delete stored content 30 days afterwards.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>8. Third-Party Models and Availability</h2>
            <p>Heclus depends on third-party AI providers for text, image, clip and voice generation. Those providers change their models, prices and availability, sometimes without notice to us. We may add, substitute or withdraw a model, and a provider outage or queue can delay a step. We aim to keep the Service available but do not warrant uninterrupted or error-free operation, and we are not liable for a third-party provider&apos;s failure, though we will not charge credits for work it fails to complete.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>9. Acceptable Use</h2>
            <p>You agree not to use the Service to generate content that is illegal, harmful, defamatory, or infringes on third-party intellectual property. You are solely responsible for the content you create using the Service and how you use it on external platforms such as YouTube.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>10. Intellectual Property</h2>
            <p>You retain ownership of the content you generate using Heclus. Heclus retains ownership of the platform, software, and underlying technology. You grant Heclus a limited license to process your inputs solely to deliver the Service.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>11. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Heclus and aiTrends shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service. Our total liability to you shall not exceed the amount paid by you in the three months preceding the claim.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>12. Termination</h2>
            <p>We reserve the right to suspend or terminate your account if you violate these terms. You may cancel your subscription at any time through your account settings or by contacting support.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>13. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the updated Terms.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>14. Contact</h2>
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
