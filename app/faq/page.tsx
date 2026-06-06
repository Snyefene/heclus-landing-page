import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { FAQ_ITEMS } from "@/lib/faq-data";

const SITE_URL = "https://heclus.com";

export const metadata: Metadata = {
  title: "FAQ — Heclus",
  description:
    "Common questions about Heclus: what it is, which AI models it uses, what you get at the end, and how data privacy is handled.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "FAQ — Heclus",
    description:
      "Common questions about Heclus answered: features, models, output, and privacy.",
    url: `${SITE_URL}/faq`,
    type: "website",
  },
};

const faqPageLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
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
