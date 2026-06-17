import Image from "next/image";

export const metadata = {
  title: "Privacy Policy - Heclus",
  description: "How Heclus handles your data, projects, and generated content. Privacy policy for the Heclus AI video platform.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold mb-2" style={{ color: "oklch(0.95 0 0)" }}>Privacy Policy</h1>
        <p className="text-sm mb-12" style={{ color: "oklch(0.72 0 0)" }}>Last updated: May 2025</p>

        <div className="space-y-4 text-sm leading-relaxed" style={{ color: "oklch(0.62 0 0)" }}>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>1. Information We Collect</h2>
            <p>We collect information you provide directly - including your name, email address, and payment information when you sign up or subscribe. We also collect usage data such as the niches and videos you create, and technical data like your IP address and browser type.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, maintain, and improve the Service</li>
              <li>To process payments and manage your subscription</li>
              <li>To send account-related emails (receipts, password resets, updates)</li>
              <li>To respond to support requests</li>
              <li>To monitor for abuse and enforce our Terms of Service</li>
            </ul>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>3. Third-Party Services</h2>
            <p>Heclus uses the following third-party services to operate:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong style={{ color: "oklch(0.78 0 0)" }}>Supabase</strong> - user authentication and data storage</li>
              <li><strong style={{ color: "oklch(0.78 0 0)" }}>Dodo</strong> - payment processing</li>
              <li><strong style={{ color: "oklch(0.78 0 0)" }}>Cloudflare R2</strong> - file storage</li>
              <li><strong style={{ color: "oklch(0.78 0 0)" }}>Resend</strong> - transactional email</li>
            </ul>
            <p className="mt-3">Each service has its own privacy policy. We recommend reviewing them separately.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>4. Your API Keys</h2>
            <p>Heclus requires you to provide your own API keys for third-party AI services (e.g. Anthropic, ElevenLabs). These keys are stored encrypted and are only used to process your requests within the Service. We do not share your API keys with any third party.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>5. Data Retention</h2>
            <p>We retain your account data for as long as your account is active. If you cancel or your account is terminated, we may retain certain data for up to 90 days before deletion, unless legally required to retain it longer.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>6. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="mailto:support@heclus.com" className="underline" style={{ color: "oklch(0.72 0.25 285)" }}>support@heclus.com</a>. We will respond within 30 days.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>7. Cookies</h2>
            <p>We use essential cookies to maintain your session and authentication state. We do not use advertising or tracking cookies.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of significant changes via email or a notice on the platform.</p>
          </section>

          <section className="rounded-xl p-6" style={{ background: "oklch(0.10 0.006 280 / 0.55)", border: "1px solid oklch(1 0 0 / 0.06)" }}>
            <h2 className="text-base font-semibold mb-3" style={{ color: "oklch(0.88 0 0)" }}>9. Contact</h2>
            <p>For privacy-related questions, contact us at <a href="mailto:support@heclus.com" className="underline" style={{ color: "oklch(0.72 0.25 285)" }}>support@heclus.com</a>.</p>
          </section>

        </div>

        <div className="mt-16">
          <a href="/" className="text-sm hover:underline" style={{ color: "oklch(0.72 0.25 285)" }}>← Back to home</a>
        </div>
      </div>
    </div>
  );
}
