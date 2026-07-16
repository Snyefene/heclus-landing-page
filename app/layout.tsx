import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Reveal from "@/components/Reveal";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const SITE_URL = "https://heclus.com";
const OG_IMAGE = `${SITE_URL}/og_image.png`;
const OG_LOGO = `${SITE_URL}/heclus-icon.png`;

// One-line product description reused across <title>, OG, Twitter, and
// the SoftwareApplication JSON-LD so search results and social previews
// stay consistent.
const DESCRIPTION_SHORT =
  "Clone any YouTube channel or niche with AI. Analyze a channel, generate scripts, voiceovers, AI images, thumbnails, and assemble complete videos - all in one automated pipeline.";
const DESCRIPTION_LONG =
  "Heclus is an AI YouTube video factory. Paste any channel URL, pick a topic, and the pipeline produces a humanized script, natural voiceover, scene-level AI images, motion clips, and scroll-stopping thumbnails - assembled into a ready-to-upload video.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  verification: {
    google: "GCN0u5bvT9xqLHnEteWKp9tvDpHrk4Wn51oWxUte1VI",
  },
  title: {
    default: "Heclus - AI YouTube Video Factory | Clone Any Niche, Auto-Generate Videos",
    template: "%s | Heclus",
  },
  description: DESCRIPTION_SHORT,
  applicationName: "Heclus",
  authors: [{ name: "aiTrends", url: SITE_URL }],
  creator: "aiTrends",
  publisher: "aiTrends",
  category: "technology",
  // Keywords are a weak ranking signal for Google specifically, but Bing,
  // Yandex, Duck/Brave, and most LLM-driven search agents still ingest
  // them. List the actual queries a content creator would type.
  keywords: [
    "AI YouTube video generator",
    "YouTube automation",
    "AI video generation",
    "YouTube faceless channel",
    "faceless YouTube automation",
    "clone YouTube channel",
    "YouTube niche cloning",
    "YouTube content automation",
    "automated YouTube content",
    "AI script writing",
    "AI script generator",
    "YouTube script writer AI",
    "AI voiceover generator",
    "voiceover generator",
    "AI thumbnail generator",
    "thumbnail generator",
    "YouTube thumbnail maker",
    "AI video pipeline",
    "AI content creation",
    "AI video creator",
    "Nano Banana 2",
    "Seedance 2.0",
    "Kling 3",
    "Veo 3",
    "ElevenLabs voice",
    "Heclus",
    "aiTrends",
  ],
  icons: {
    icon: "/heclus-white.ico",
    apple: "/heclus-icon-white.png",
  },
  // Tell crawlers explicitly: index everything, follow links, and let
  // the largest image preview + a long snippet appear in results so the
  // featured-snippet / how-to box has enough room to render.
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Stop iOS from auto-linking strings that look like phone numbers or
  // addresses in the body copy (e.g. "$40 · Full access for 1 year").
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    type: "website",
    siteName: "Heclus",
    locale: "en_US",
    title: "Heclus - AI YouTube Video Factory | Clone Any Niche, Auto-Generate Videos",
    description: DESCRIPTION_SHORT,
    url: SITE_URL,
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE,
        width: 1887,
        height: 763,
        alt: "Heclus - Clone any YouTube channel/niche with AI",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heclus - AI YouTube Video Factory",
    description: DESCRIPTION_SHORT,
    images: [OG_IMAGE],
    creator: "@heclus",
    site: "@heclus",
  },
  other: {
    // Pinterest rich pin opt-in. Cheap to include - only fires when
    // someone pins a page, but improves the pin's metadata for free.
    "pinterest-rich-pin": "true",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0a18",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: "Heclus",
  alternateName: ["Heclus AI", "Heclus by aiTrends"],
  url: SITE_URL,
  description: DESCRIPTION_LONG,
  logo: {
    "@type": "ImageObject",
    url: OG_LOGO,
    width: 512,
    height: 512,
  },
  // sameAs anchors the brand to its presence on other platforms. Google
  // uses these to build the knowledge-graph entry that later becomes
  // the source for sitelinks under a branded search.
  sameAs: [
    "https://www.linkedin.com/company/heclus",
    "https://www.facebook.com/share/18az1NsZrZ",
    "https://www.instagram.com/heclus.io",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  name: "Heclus",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}#organization` },
  inLanguage: "en-US",
  // The SearchAction block lets Google render a sitelinks search box
  // under the brand result. The target URL is a no-op today (the app
  // doesn't expose a public /search route), but having the markup in
  // place means we can wire one up without touching SEO again.
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// SoftwareApplication is the schema Google leans on for SaaS rich
// results - pricing, category, and platform show up directly in the
// SERP under the brand result. Offers mirror the plans listed in
// components/Pricing.tsx; keep them in sync if the plans change.
const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}#software`,
  name: "Heclus",
  url: SITE_URL,
  applicationCategory: "MultimediaApplication",
  applicationSubCategory: "VideoEditingSoftware",
  operatingSystem: "Web",
  description: DESCRIPTION_LONG,
  image: OG_IMAGE,
  brand: { "@id": `${SITE_URL}#organization` },
  publisher: { "@id": `${SITE_URL}#organization` },
  offers: [
    {
      "@type": "Offer",
      name: "Founder",
      price: "40.00",
      priceCurrency: "USD",
      description: "$40 for a full year of access. 20 niches + the full AI pipeline.",
      url: `${SITE_URL}/pricing`,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Starter",
      price: "21.00",
      priceCurrency: "USD",
      description: "5 niches per month, full AI pipeline, up to 1080p output.",
      url: `${SITE_URL}/pricing`,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "39.00",
      priceCurrency: "USD",
      description: "10 niches/month, unlimited videos, bulk generation, priority queue, 2K+ premium output.",
      url: `${SITE_URL}/pricing`,
      availability: "https://schema.org/InStock",
    },
  ],
  featureList: [
    "YouTube channel analysis",
    "AI script generation",
    "AI voiceover narration",
    "Bulk AI image generation",
    "AI video clip generation",
    "AI thumbnail generation",
    "One-click video assembly and export",
  ],
};

// Breadcrumb anchors the homepage as the top of the site so the
// /features, /pipeline, /pricing, /faq pages inherit a clear position
// when they reference back to it.
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* Tag <html> before first paint so scroll-reveal CSS only hides
            content when JS will actually be there to reveal it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Reveal />
      </body>
    </html>
  );
}
