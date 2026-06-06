import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const SITE_URL = "https://heclus.com";

export const metadata: Metadata = {
  title: "Features — Heclus",
  description:
    "Everything you need in one tool: niche research, AI script writing, voiceover, bulk image and video generation, thumbnail creation, and one-click export.",
  alternates: { canonical: `${SITE_URL}/features` },
  openGraph: {
    title: "Features — Heclus",
    description:
      "Everything you need in one tool: niche research, AI script writing, voiceover, bulk image and video generation.",
    url: `${SITE_URL}/features`,
    type: "website",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Features", item: `${SITE_URL}/features` },
  ],
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <Features />
      <FinalCTA />
      <Footer />
    </main>
  );
}
