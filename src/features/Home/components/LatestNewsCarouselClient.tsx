"use client";

import { useCallback, useRef } from "react";
import { MoveLeft, MoveRight } from "@/shared/icons/lucide-icon-map";
import { cn } from "@/lib/utils";
import LatestNewsCard from "./LatestNewsCard";
import { LATEST_NEWS_ITEMS } from "../data/latest-news.data";

const SLIDE_GAP_PX = 16; // gap-4

const arrowButtonClassName = cn(
  "inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full",
  "border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-colors",
  "hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neev-green",
);

export default function LatestNewsCarouselClient() {
  const scrollerRef = useRef<HTMLUListElement>(null);

  const scrollByDirection = useCallback((direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstSlide = el.querySelector<HTMLElement>("[data-slide]");
    const slideWidth = firstSlide?.offsetWidth ?? el.clientWidth * 0.85;
    const delta = slideWidth + SLIDE_GAP_PX;

    el.scrollBy({
      left: direction === "left" ? -delta : delta,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <ul
        ref={scrollerRef}
        className="flex list-none snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [&::-webkit-scrollbar]:hidden"
        tabIndex={0}
        aria-label="Latest at NeevCloud stories"
      >
        {LATEST_NEWS_ITEMS.map((item) => (
          <li key={item.title} data-slide className="snap-start">
            <LatestNewsCard item={item} />
          </li>
        ))}
      </ul>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          className={arrowButtonClassName}
          aria-label="Show previous stories"
          onClick={() => scrollByDirection("left")}
        >
          <MoveLeft size={15} aria-hidden />
        </button>
        <button
          type="button"
          className={arrowButtonClassName}
          aria-label="Show next stories"
          onClick={() => scrollByDirection("right")}
        >
          <MoveRight size={15} aria-hidden />
        </button>
      </div>
    </div>
  );
}
