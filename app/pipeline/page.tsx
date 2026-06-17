import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pipeline from "@/components/Pipeline";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const SITE_URL = "https://heclus.com";

const PAGE_TITLE = "Pipeline - From YouTube Niche to Finished AI Video in 8 Steps";
const PAGE_DESC =
  "Heclus's 8-step AI pipeline: niche identification, channel style DNA, topic and script, AI voiceover, bulk image and video generation, thumbnail creation, video assembly, and one-click export.";
const PAGE_DESC_SHORT =
  "8-step automated AI pipeline: niche → script → voiceover → images → video clips → thumbnails → export.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: `${SITE_URL}/pipeline` },
  keywords: [
    "AI YouTube pipeline",
    "YouTube video generation pipeline",
    "automated YouTube content pipeline",
    "AI script to video",
    "faceless YouTube workflow",
    "AI niche cloning",
    "AI video assembly",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC_SHORT,
    url: `${SITE_URL}/pipeline`,
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
    { "@type": "ListItem", position: 2, name: "Pipeline", item: `${SITE_URL}/pipeline` },
  ],
};

// HowTo schema mirrors the 8-step pipeline shown on the page. Kept
// inline (rather than imported from Pipeline.tsx) because the
// component data mixes JSX icons with text - extracting would force
// a separate icon registry. If you reword a step's name/description
// in components/Pipeline.tsx, mirror it here too.
const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "From Niche to Full Video - the Heclus pipeline",
  description: "How Heclus turns a YouTube niche into a complete video, step by step.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Niche Identification", text: "Identifying any trending YouTube niche." },
    { "@type": "HowToStep", position: 2, name: "Style DNA", text: "Heclus reverse-engineers the niche in minutes." },
    { "@type": "HowToStep", position: 3, name: "Topic & Script", text: "Heclus identifies high-potential topics and creates a fully humanized, editable script." },
    { "@type": "HowToStep", position: 4, name: "Voiceover Generation", text: "Latest text-to-speech models for human-sounding voiceover narrations." },
    { "@type": "HowToStep", position: 5, name: "Image & Video Generation", text: "1-click bulk image and video generation with top models including Seedance 2, Kling 3, Nano Banana 2 and more." },
    { "@type": "HowToStep", position: 6, name: "Thumbnail Creation", text: "Scroll-stopping thumbnails matching various styles in your chosen niche." },
    { "@type": "HowToStep", position: 7, name: "Video Assembly", text: "1-click timed video compilation using video clips, images, or both." },
    { "@type": "HowToStep", position: 8, name: "Export & Download", text: "Full video ready for export and upload in minutes." },
  ],
};

export default function PipelinePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <Navbar />
      <Pipeline />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
