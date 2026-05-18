import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const SITE_URL = "https://heclus.io";
const OG_IMAGE = `${SITE_URL}/heclus-icon.png`;

export const metadata: Metadata = {
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
    icon: "/favicon.ico",
    apple: "/heclus-icon.png",
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
  themeColor: "#0f0a18",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Heclus",
  url: SITE_URL,
  logo: OG_IMAGE,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
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
