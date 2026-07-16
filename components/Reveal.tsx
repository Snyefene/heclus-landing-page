"use client";

import { useEffect } from "react";

// Global scroll-reveal driver. Any element with [data-reveal] fades up
// once when it enters the viewport; data-reveal="group" instead staggers
// its direct children (see globals.css). Renders nothing — it only tags
// elements with .in-view. With reduced motion or no JS, everything is
// simply visible (globals.css gates the hidden state on html.js).
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
