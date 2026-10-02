"use client";

import { useEffect, useRef, useState } from "react";

export type FeaturedVideo = { id: string; video_url: string; title: string | null; aspect_ratio: string | null; style?: string | null };

const withRetry = (url: string, attempt: number) => attempt ? `${url}${url.includes("?") ? "&" : "?"}r=${attempt}` : url;

function Spinner({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="animate-spin" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const RetryIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
    <path d="M21 12a9 9 0 1 1-2.6-6.4M21 4v5h-5" />
  </svg>
);

// Loads only once near the screen, retries once, then offers a retry: phones
// give up when every video on the page loads at once.
function Card({ v, onOpen }: { v: FeaturedVideo; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [near, setNear] = useState(false);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);
  const [hasMeta, setHasMeta] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setNear(true); }, { rootMargin: "300px" });
    io.observe(el);
    return () => io.disconnect();
  }, [near]);
  // iOS can stop at metadata without painting a frame; don't spin forever.
  useEffect(() => {
    if (!hasMeta || state !== "loading") return;
    const t = setTimeout(() => setState("ready"), 4000);
    return () => clearTimeout(t);
  }, [hasMeta, state]);
  const label = v.style;

  return (
    <article className="space-y-3" data-reveal>
      <button ref={ref} type="button" onClick={() => { if (state === "error") { setState("loading"); setAttempt((a) => a + 1); } else onOpen(); }}
        aria-label={state === "error" ? "Retry loading video" : `Play ${label ?? v.title ?? "video"}`}
        className="group relative block w-full aspect-video overflow-hidden rounded-2xl cursor-pointer"
        style={{ border: "1px solid oklch(1 0 0 / 0.10)", background: "oklch(0.07 0.004 285)" }}>
        {near && (
          <video key={attempt} src={`${withRetry(v.video_url, attempt)}#t=1`} preload="metadata" muted playsInline
            onLoadedMetadata={() => setHasMeta(true)} onLoadedData={() => setState("ready")}
            onError={() => { if (attempt === 0) setAttempt(1); else setState("error"); }}
            className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.04] ${v.aspect_ratio === "9:16" ? "object-contain" : "object-cover"}`} />
        )}
        <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute inset-0 flex items-center justify-center">
          {state === "loading" ? (
            <span className="text-white/80"><Spinner size={26} /></span>
          ) : state === "error" ? (
            <span className="flex flex-col items-center gap-2 text-xs font-semibold text-white/85"><RetryIcon /> Couldn&apos;t load. Tap to retry</span>
          ) : (
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform duration-200 group-hover:scale-110">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black" aria-hidden><path d="M8 5v14l11-7z" /></svg>
            </span>
          )}
        </span>
      </button>
      {label && <h3 className="text-[15px] font-semibold leading-snug line-clamp-2" style={{ color: "oklch(0.88 0 0)" }}>{label}</h3>}
    </article>
  );
}

function Player({ url }: { url: string }) {
  const [state, setState] = useState<"loading" | "playing" | "error">("loading");
  const [attempt, setAttempt] = useState(0);
  return (
    <div className="relative">
      <video key={attempt} src={withRetry(url, attempt)} controls autoPlay playsInline className="max-h-[78vh] w-full rounded-xl bg-black"
        onWaiting={() => setState("loading")} onCanPlay={() => setState("playing")} onPlaying={() => setState("playing")}
        onError={() => { if (attempt === 0) setAttempt(1); else setState("error"); }} />
      {state === "loading" && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white/80"><Spinner size={32} /></span>
      )}
      {state === "error" && (
        <button type="button" onClick={() => { setState("loading"); setAttempt((a) => a + 1); }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl bg-black/80 text-sm font-semibold text-white">
          <RetryIcon /> Couldn&apos;t load this video. Tap to retry
        </button>
      )}
    </div>
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
  const openLabel = open?.style;

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
            <Player url={open.video_url} />
            {openLabel && <p className="text-base font-semibold text-white">{openLabel}</p>}
          </div>
        </div>
      )}
    </>
  );
}
