import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { getTestimonials } from "@/lib/reviews";

const SITE_URL = "https://heclus.com";

const PAGE_TITLE = "Pricing - From $21/mo. Founder Offer: $40/yr Full Access";
const PAGE_DESC =
  "Heclus pricing: limited-time Founder offer at $40 for a full year. Starter plan from $21/month, Pro from $39/month. Secure checkout via Paystack. Cancel anytime, no lock-in.";
const PAGE_DESC_SHORT =
  "Founder offer: $40 for a full year. Starter $21/mo, Pro $39/mo. Cancel anytime.";

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
// in components/Pricing.tsx - if a plan name/price/period changes there,
// update it here too. (Kept inline rather than imported because the
// component data carries CTA labels and disabled flags that don't
// belong in the public-facing product schema.)
function buildProductLd(testimonials: Awaited<ReturnType<typeof getTestimonials>>) {
  const base = {
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
      {
        "@type": "Offer",
        name: "Starter",
        price: "21.00",
        priceCurrency: "USD",
        url: `${SITE_URL}/pricing`,
        availability: "https://schema.org/InStock",
        description: "5 niches per month, full AI pipeline, up to 1080p output.",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "39.00",
        priceCurrency: "USD",
        url: `${SITE_URL}/pricing`,
        availability: "https://schema.org/InStock",
        description: "10 niches/month, unlimited videos, bulk generation, priority queue, 2K+ premium output.",
      },
    ],
  } as Record<string, unknown>;

  // Only emit rating schema when the on-page testimonials section
  // actually renders - the reviews backing the schema must be visible
  // on the same URL per Google's structured-data policy.
  if (testimonials) {
    base.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: testimonials.averageRating.toFixed(1),
      reviewCount: testimonials.totalCount,
      bestRating: "5",
      worstRating: "1",
    };
    base.review = testimonials.reviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: { "@type": "Person", name: r.name },
      datePublished: r.createdAt.slice(0, 10),
      reviewBody: r.text,
    }));
  }

  return base;
}

export default async function PricingPage() {
  const testimonials = await getTestimonials();
  const productLd = buildProductLd(testimonials);
  return (
    <main className="min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <Navbar />
      <Pricing />
      {testimonials && <Testimonials data={testimonials} />}
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
