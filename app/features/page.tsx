import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const SITE_URL = "https://heclus.com";

const PAGE_TITLE = "Features — AI YouTube Video Tools, Voiceover, Thumbnails & Auto-Assembly";
const PAGE_DESC =
  "Everything you need in one AI YouTube tool: niche research, channel analysis, AI script writing, natural voiceover, bulk image and video generation, thumbnail creation, and one-click export.";
const PAGE_DESC_SHORT =
  "Niche research, AI scripts, voiceover, AI images, video clips, thumbnails — every step automated.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: `${SITE_URL}/features` },
  keywords: [
    "AI YouTube features",
    "AI script writer",
    "AI voiceover",
    "AI thumbnail generator",
    "AI image generator for YouTube",
    "AI video generator",
    "YouTube content tools",
    "faceless YouTube tools",
    "automated YouTube editor",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC_SHORT,
    url: `${SITE_URL}/features`,
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
