"use client";

import { useEffect, useRef, useState } from "react";
import LatestNewsCard from "./LatestNewsCard";
import { LATEST_NEWS_ITEMS } from "../data/latest-news.data";

// Horizontal scroll row that fades whichever edge has more cards off-screen, so
// cards never cut abruptly. Left fade appears only once scrolled; right fade
// drops at the end.
export default function LatestNewsCarouselClient() {
  const ref = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ left: false, right: true });
  const [masked, setMasked] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const left = el.scrollLeft > 8;
      const right = el.scrollLeft < el.scrollWidth - el.clientWidth - 8;
      setEdges((prev) =>
        prev.left === left && prev.right === right ? prev : { left, right },
      );
      const range = el.scrollWidth - el.clientWidth;
      setProgress(range > 0 ? el.scrollLeft / range : 0);
      // The edge fade reads as an ugly "blur" on phones — only mask from sm up.
      setMasked(window.innerWidth >= 640);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const from = edges.left ? "transparent 0%, #000 5%" : "#000 0%";
  const to = edges.right ? "#000 95%, transparent 100%" : "#000 100%";
  const mask = masked ? `linear-gradient(to right, ${from}, ${to})` : undefined;

  // Full-bleed: the track spans the viewport; padding aligns the first card
  // with the Container's content edge (max-w 1360px, 1536px from 2xl).
  return (
    <>
    <ul
      ref={ref}
      className="flex w-full list-none snap-x snap-mandatory gap-4 overflow-x-auto pb-1 px-[max(1rem,calc((100%-1360px)/2+1rem))] scroll-pl-[max(1rem,calc((100%-1360px)/2+1rem))] 2xl:px-[max(1rem,calc((100%-1536px)/2+1rem))] 2xl:scroll-pl-[max(1rem,calc((100%-1536px)/2+1rem))] [&::-webkit-scrollbar]:hidden"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      {LATEST_NEWS_ITEMS.map((item, index) => (
        <li key={item.title} className="snap-start">
          <LatestNewsCard item={item} priority={index < 3} />
        </li>
      ))}
    </ul>
    {/* Accenture-style scroll indicator (mobile only) — sits close under the cards */}
    <div className="mx-auto mt-2 h-1 w-40 overflow-hidden rounded-full bg-white/15 sm:hidden">
      <div
        className="h-full rounded-full bg-white/70 transition-[width] duration-150 ease-out"
        style={{ width: `${Math.max(8, Math.round(progress * 100))}%` }}
      />
    </div>
    </>
  );
}
