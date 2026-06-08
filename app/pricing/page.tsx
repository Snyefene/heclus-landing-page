import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const SITE_URL = "https://heclus.com";

const PAGE_TITLE = "Pricing — From $19/mo. Founder Offer: $40/yr Full Access";
const PAGE_DESC =
  "Heclus pricing: limited-time Founder offer at $40 for a full year. Starter plan from $19/month, Pro from $49/month. Secure checkout via Paystack. Cancel anytime, no lock-in.";
const PAGE_DESC_SHORT =
  "Founder offer: $40 for a full year. Starter $19/mo, Pro $49/mo. Cancel anytime.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: `${SITE_URL}/pricing` },
  keywords: [
    "Heclus pricing",
    "AI YouTube tool pricing",
    "AI video generator price",
    "YouTube automation pricing",
    "AI YouTube subscription",
    "founder offer",
    "AI video SaaS pricing",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC_SHORT,
    url: `${SITE_URL}/pricing`,
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

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITE_URL}/pricing` },
  ],
};

// Product/Offer schema for the three plans. Mirrors the PLANS array
// in components/Pricing.tsx — if a plan name/price/period changes there,
// update it here too. (Kept inline rather than imported because the
// component data carries CTA labels and disabled flags that don't
// belong in the public-facing product schema.)
const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Heclus — AI YouTube Video Factory",
  description: "Clone any YouTube channel/niche with an end-to-end AI pipeline: niche research, script, voiceover, AI images and video clips, thumbnails, and assembly.",
  brand: { "@type": "Brand", name: "Heclus" },
  offers: [
    {
      "@type": "Offer",
      name: "Founder",
      price: "40.00",
      priceCurrency: "USD",
      url: `${SITE_URL}/pricing`,
      availability: "https://schema.org/LimitedAvailability",
      description: "$40 for one full year of access. First 100 users only.",
    },
    {
      "@type": "Offer",
      name: "Starter",
      price: "19.00",
      priceCurrency: "USD",
      url: `${SITE_URL}/pricing`,
      availability: "https://schema.org/InStock",
      description: "5 niches per month, full 8-step AI pipeline.",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "49.00",
      priceCurrency: "USD",
      url: `${SITE_URL}/pricing`,
      availability: "https://schema.org/InStock",
      description: "Unlimited niches, priority processing, full 8-step AI pipeline.",
    },
  ],
};

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <Navbar />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
