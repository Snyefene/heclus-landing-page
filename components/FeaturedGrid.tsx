"use client";

import { useEffect, useState } from "react";

export type FeaturedVideo = { id: string; video_url: string; title: string | null; aspect_ratio: string | null };

function Card({ v, onOpen }: { v: FeaturedVideo; onOpen: () => void }) {
  return (
    <article className="space-y-3" data-reveal>
      <button type="button" onClick={onOpen} aria-label={`Play ${v.title ?? "video"}`}
        className="group relative block w-full aspect-video overflow-hidden rounded-2xl cursor-pointer"
        style={{ border: "1px solid oklch(1 0 0 / 0.10)", background: "oklch(0.07 0.004 285)" }}>
        <video src={`${v.video_url}#t=1`} preload="metadata" muted playsInline
          className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.04] ${v.aspect_ratio === "9:16" ? "object-contain" : "object-cover"}`} />
        <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform duration-200 group-hover:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="black" aria-hidden><path d="M8 5v14l11-7z" /></svg>
          </span>
        </span>
      </button>
      {v.title && <h3 className="text-[15px] font-semibold leading-snug line-clamp-2" style={{ color: "oklch(0.88 0 0)" }}>{v.title}</h3>}
    </article>
  );
}

export default function FeaturedGrid({ videos }: { videos: FeaturedVideo[] }) {
  const [open, setOpen] = useState<FeaturedVideo | null>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => <Card key={v.id} v={v} onOpen={() => setOpen(v)} />)}
      </div>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "oklch(0 0 0 / 0.85)", backdropFilter: "blur(6px)" }} onClick={() => setOpen(null)}>
          <button type="button" onClick={() => setOpen(null)} aria-label="Close"
            className="absolute right-4 top-4 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
          <div className="w-full max-w-5xl space-y-3" onClick={(e) => e.stopPropagation()}>
            <video src={open.video_url} controls autoPlay playsInline className="max-h-[78vh] w-full rounded-xl bg-black" />
            {open.title && <p className="text-base font-semibold text-white">{open.title}</p>}
          </div>
        </div>
      )}
    </>
  );
}
