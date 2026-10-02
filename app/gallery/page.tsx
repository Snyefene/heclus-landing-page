import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FeaturedVideos from "@/components/FeaturedVideos";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const SITE_URL = "https://heclus.com";

const PAGE_TITLE = "Gallery - AI YouTube Videos Made with Heclus";
const PAGE_DESC =
  "Watch faceless YouTube videos made with Heclus: Pixar-style animation, stick figure explainers, 3D cinematic stories and more, each scripted, voiced and assembled by AI.";
const PAGE_DESC_SHORT =
  "Faceless YouTube videos made with Heclus, from Pixar-style animation to stick figure explainers.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: `${SITE_URL}/gallery` },
  keywords: [
    "AI video examples",
    "AI YouTube video gallery",
    "faceless YouTube video examples",
    "Pixar style AI animation",
    "stick figure animation",
    "3D cinematic AI video",
    "AI animated videos",
    "made with AI",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC_SHORT,
    url: `${SITE_URL}/gallery`,
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
    { "@type": "ListItem", position: 2, name: "Gallery", item: `${SITE_URL}/gallery` },
  ],
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <FeaturedVideos standalone />
      <FinalCTA />
      <Footer />
    </main>
  );
}
