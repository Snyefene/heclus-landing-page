import { fetchSitePlans, type SitePlan } from "@/lib/plans";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const SITE_URL = "https://heclus.com";

// The prices on the cards come from the plans table; these three strings are
// metadata and cannot, so they are the ones that go stale. They named $21 and
// $39, which the product stopped charging in July, and Paystack, which has
// never taken a payment for Heclus: Dodo Payments is the merchant of record.
const PAGE_TITLE = "Pricing - From $29.99/mo, credits included";
const PAGE_DESC =
  "Heclus pricing: Starter $29.99/month with 1,000 Heclus Credits, Pro $49.99 with 2,000, Max $129 with 6,000. No API keys to bring. Secure checkout via Dodo Payments. Cancel anytime, no lock-in.";
const PAGE_DESC_SHORT =
  "Starter $29.99/mo, Pro $49.99/mo, Max $129/mo. Credits included, no API keys. Cancel anytime.";

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

// Product/Offer schema, built from the same plans table the page renders, so
// the price Google reads and the price a customer sees cannot disagree. They
// did: this block advertised $21 and $39 for months after the product moved to
// $29.99 and $49.99.
function buildProductLd(plans: SitePlan[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Heclus - AI YouTube Video Factory",
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
      ...plans.filter((p) => p.priceAmount).map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.priceAmount as string,
        priceCurrency: "USD",
        url: `${SITE_URL}/pricing`,
        // A plan the app will not sell yet is not in stock, whatever the card
        // beside it says.
        availability: p.disabled
          ? "https://schema.org/PreOrder"
          : "https://schema.org/InStock",
        description: p.features.slice(0, 4).join(". "),
      })),
    ],
  };
}

export default async function PricingPage() {
  const plans = await fetchSitePlans();
  const productLd = buildProductLd(plans);
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
