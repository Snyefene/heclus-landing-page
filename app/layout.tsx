import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const SITE_URL = "https://heclus.com";
const OG_IMAGE = `${SITE_URL}/og_image.png`;
const OG_LOGO = `${SITE_URL}/heclus-icon.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  verification: {
    google: "GCN0u5bvT9xqLHnEteWKp9tvDpHrk4Wn51oWxUte1VI",
  },
  title: "Heclus — AI YouTube Video Factory",
  description:
    "Clone any YouTube channel/niche. Analyze any YouTube channel, generate scripts, voiceovers, AI images, thumbnails, and assemble complete videos — all in one automated pipeline.",
  keywords: [
    "YouTube automation",
    "AI video generation",
    "YouTube content creator",
    "AI script writing",
    "voiceover generator",
    "thumbnail generator",
    "video pipeline",
  ],
  icons: {
    icon: "/heclus-white.ico",
    apple: "/heclus-icon-white.png",
  },
  openGraph: {
    title: "Heclus — AI YouTube Video Factory",
    description:
      "Clone any YouTube channel/niche. Turn any YouTube channel into your automated video studio. Script, voice, images, and assembly — all on autopilot.",
    type: "website",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1887, height: 763, alt: "Heclus — Clone any YouTube channel/niche" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0a18",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: "Heclus",
  url: SITE_URL,
  description:
    "Clone any YouTube channel/niche. AI-powered YouTube content creation platform — analyze any channel, generate scripts, voiceovers, AI images, thumbnails, and assemble complete videos in one automated pipeline.",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className="antialiased px-[45px]">{children}</body>
    </html>
  );
}
