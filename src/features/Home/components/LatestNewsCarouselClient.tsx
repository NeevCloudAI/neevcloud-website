"use client";

import { useRef } from "react";
import LatestNewsCard from "./LatestNewsCard";
import { LATEST_NEWS_ITEMS } from "../data/latest-news.data";

const RESUME_DELAY = 1500;

// Auto-scrolling marquee: the track renders the list twice back-to-back and
// CSS-animates it left by exactly half its width, looping seamlessly (see
// .latest-news-track in globals.css). The wrapper is also manually
// scrollable — any scroll or touch pauses the animation, which resumes
// shortly after the user stops interacting.
export default function LatestNewsCarouselClient() {
  const trackRef = useRef<HTMLUListElement>(null);
  const resumeTimer = useRef(0);

  const onInteract = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      if (trackRef.current)
        trackRef.current.style.animationPlayState = "running";
    }, RESUME_DELAY);
  };

  return (
    <div
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
  );
}
