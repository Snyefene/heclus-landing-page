import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const serifDisplay = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif-display",
  display: "swap",
});

const SITE_URL = "https://heclus.com";
const OG_IMAGE = `${SITE_URL}/heclus-icon.png`;

export const metadata: Metadata = {
  verification: {
    google: "GCN0u5bvT9xqLHnEteWKp9tvDpHrk4Wn51oWxUte1VI",
  },
  title: "Heclus — AI YouTube Video Factory",
  description:
    "Analyze any YouTube channel, generate scripts, voiceovers, AI images, thumbnails, and assemble complete videos — all in one automated pipeline.",
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
      "Turn any YouTube channel into your automated video studio. Script, voice, images, and assembly — all on autopilot.",
    type: "website",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 512, height: 512, alt: "Heclus" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f9f6f0",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Heclus",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: OG_IMAGE,
    width: 512,
    height: 512,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serifDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
