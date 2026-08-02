import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { FAQ_ITEMS, faqPlainText } from "@/lib/faq-data";

const SITE_URL = "https://heclus.com";

const PAGE_TITLE = "FAQ - How Heclus AI YouTube Video Generation Works";
const PAGE_DESC =
  "Common questions about Heclus: what it does, which AI models it uses (Claude, ElevenLabs, Nano Banana, Seedance, Kling, Veo), what you get at the end, output formats, and how data privacy is handled.";
const PAGE_DESC_SHORT =
  "Heclus FAQ: features, supported AI models, output, privacy, and refund policy.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: `${SITE_URL}/faq` },
  keywords: [
    "Heclus FAQ",
    "how does Heclus work",
    "AI YouTube tool questions",
    "AI video generator FAQ",
    "Heclus models",
    "Heclus privacy",
    "Heclus refund",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC_SHORT,
    url: `${SITE_URL}/faq`,
    type: "website",
    siteName: "Heclus",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC_SHORT,
  },
};

const faqPageLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: faqPlainText(item) },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
  ],
};

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
