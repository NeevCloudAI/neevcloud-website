"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "@/shared/icons/lucide-icon-map";
import { Button } from "@/shared/ui-lib";
import LatestNewsCard from "./LatestNewsCard";
import { LATEST_NEWS_ITEMS } from "../data/latest-news.data";
import Container from "@/shared/components/container";

const RESUME_DELAY = 1500;

// Auto-scrolling marquee: the track renders the list twice back-to-back and
// CSS-animates it left by exactly half its width, looping seamlessly (see
// .latest-news-track in globals.css). The wrapper is also manually
// scrollable — any scroll or touch pauses the animation, which resumes
// shortly after the user stops interacting.
//
// The animation drives a CSS transform independently of the wrapper's
// scrollLeft. Merely pausing it (old behaviour) freezes that transform
// mid-shift, which visually offsets the track and makes the true left edge
// (scrollLeft 0) unreachable. Dropping the animation entirely while
// interacting — instead of just pausing it — resets the transform so native
// scrolling covers the full range, then restarts the animation from 0% once
// the user stops.
export default function LatestNewsCarouselClient() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const resumeTimer = useRef(0);

  const onInteract = () => {
    if (trackRef.current) trackRef.current.style.animation = "none";
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      if (trackRef.current) trackRef.current.style.animation = "";
    }, RESUME_DELAY);
  };

  const scrollByDirection = (direction: "left" | "right") => {
    const el = wrapperRef.current;
    if (!el) return;
    const cardWidth =
      el.querySelector("li")?.clientWidth ?? el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <Container className="mb-4 flex justify-end gap-2">
        <Button
          variant="ghost"
          spacing="none"
          borderRadius="full"
          className="size-11 inline-flex items-center justify-center border border-white/15 text-white/70"
          aria-label="Scroll latest news left"
          onClick={() => scrollByDirection("left")}
        >
          <ChevronLeft size={20} aria-hidden />
        </Button>
        <Button
          variant="ghost"
          spacing="none"
          borderRadius="full"
          className="size-11 inline-flex items-center justify-center border border-white/15 text-white/70"
          aria-label="Scroll latest news right"
          onClick={() => scrollByDirection("right")}
        >
          <ChevronRight size={20} aria-hidden />
        </Button>
      </Container>

      <div
        ref={wrapperRef}
        className="w-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden px-[max(1rem,calc((100%-1360px)/2+1rem))] scroll-pl-[max(1rem,calc((100%-1360px)/2+1rem))] 2xl:px-[max(1rem,calc((100%-1536px)/2+1rem))] 2xl:scroll-pl-[max(1rem,calc((100%-1536px)/2+1rem))]"
        onScroll={onInteract}
        onPointerDown={onInteract}
      >
        <ul
          ref={trackRef}
          className="latest-news-track flex w-max list-none gap-4 pb-1"
        >
          {LATEST_NEWS_ITEMS.map((item, index) => (
            <li key={index} className="shrink-0 snap-start">
              <LatestNewsCard item={item} priority={index < 3} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
