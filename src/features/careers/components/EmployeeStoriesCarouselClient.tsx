"use client";

import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { EmployeeStory } from "../types/employee-stories-section.types";
import EmployeeStoryCard from "./EmployeeStoryCard";
import { Button } from "@/shared/ui-lib";

const SLIDE_GAP_PX = 24;

type EmployeeStoriesCarouselClientProps = {
  stories: readonly EmployeeStory[];
};

const EmployeeStoriesCarouselClient = ({
  stories,
}: EmployeeStoriesCarouselClientProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

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
    <div className="relative mt-8 w-full md:mt-12.5">
      <Button
        spacing="none"
        borderRadius="full"
        className="size-11 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:inline-flex items-center justify-center"
        aria-label="Show previous employee stories"
        onClick={() => scrollByDirection("left")}
      >
        <ChevronLeft size={20} aria-hidden />
      </Button>

      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] md:px-0 [&::-webkit-scrollbar]:hidden"
        tabIndex={0}
        aria-label="Employee stories carousel"
      >
        {stories.map((story) => (
          <EmployeeStoryCard key={story.id} story={story} />
        ))}
      </div>

      <Button
        spacing="none"
        borderRadius="full"
        className="size-11 absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10 hidden md:inline-flex items-center justify-center"
        aria-label="Show next employee stories"
        onClick={() => scrollByDirection("right")}
      >
        <ChevronRight size={20} aria-hidden />
      </Button>

      <div className="mt-4 flex justify-center gap-2 md:hidden">
        <Button
          spacing="none"
          borderRadius="full"
          className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-white"
          aria-label="Show previous employee stories"
          onClick={() => scrollByDirection("left")}
        >
          <ChevronLeft size={20} aria-hidden />
        </Button>
        <Button
          spacing="none"
          borderRadius="full"
          className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-white"
          aria-label="Show next employee stories"
          onClick={() => scrollByDirection("right")}
        >
          <ChevronRight size={20} aria-hidden />
        </Button>
      </div>
    </div>
  );
};

export default EmployeeStoriesCarouselClient;
