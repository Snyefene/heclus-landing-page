import type { MetadataRoute } from "next";

const SITE_URL = "https://heclus.com";

// Allow everything for general crawlers, with explicit allow for the
// auto-generated Next.js asset path (_next/) so OG images and the font
// CSS don't get blocked when a bot tries to render a preview. The
// /api/* path is excluded since it's not user-facing content. Each
// major search bot also gets its own block so we can tune limits per
// crawler later without rewriting the wildcard.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/", "/_next/static/chunks/", "/og_image.png$"],
      },
      // Googlebot - primary search crawler. Explicit allow lets us
      // diverge from the wildcard later (e.g. open up an internal route
      // to Google only) without forgetting to remove a disallow rule.
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/api/"],
      },
      // Bingbot covers Microsoft search + Copilot citations.
      {
        userAgent: "Bingbot",
        allow: ["/"],
        disallow: ["/api/"],
      },
      // AI-search crawlers. Opt-in by default so the product surfaces
      // in ChatGPT, Perplexity, Claude, etc. when users ask about
      // AI YouTube tools. Flip these to disallow if usage ever becomes
      // a cost/scrape concern.
      { userAgent: "GPTBot",           allow: ["/"], disallow: ["/api/"] },
      { userAgent: "OAI-SearchBot",    allow: ["/"], disallow: ["/api/"] },
      { userAgent: "ChatGPT-User",     allow: ["/"], disallow: ["/api/"] },
      { userAgent: "PerplexityBot",    allow: ["/"], disallow: ["/api/"] },
      { userAgent: "ClaudeBot",        allow: ["/"], disallow: ["/api/"] },
      { userAgent: "Claude-Web",       allow: ["/"], disallow: ["/api/"] },
      { userAgent: "anthropic-ai",     allow: ["/"], disallow: ["/api/"] },
      { userAgent: "Google-Extended",  allow: ["/"], disallow: ["/api/"] },
      { userAgent: "Applebot",         allow: ["/"], disallow: ["/api/"] },
      { userAgent: "Applebot-Extended", allow: ["/"], disallow: ["/api/"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
