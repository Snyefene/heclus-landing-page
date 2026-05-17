import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  openGraph: {
    title: "Heclus — AI YouTube Video Factory",
    description:
      "Turn any YouTube channel into your automated video studio. Script, voice, images, and assembly — all on autopilot.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0a18",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
