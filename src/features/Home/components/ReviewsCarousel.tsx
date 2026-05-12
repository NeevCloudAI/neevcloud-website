"use client";

import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import { REVIEWS_SECTION_CARDS } from "@/features/Home/constants/reviews-section.constants";
import type { ReviewSectionCard } from "@/features/Home/types/reviews-section.types";
import Image from "next/image";

const SLIDE_GAP_PX = 0;

function renderCard(card: ReviewSectionCard, index: number) {
  if (card.type === "stats") {
    return (
      <article
        key={`stats-${index}`}
        data-slide
        className={
          "flex min-w-76 flex-col items-start justify-end bg-primary p-4 md:p-12 text-center"
        }
      >
        <Text as="h1" textColor="white" weight="normal">
          {card.headline}
        </Text>
        <Text textColor="gray-10">{card.subline}</Text>
      </article>
    );
  }

  if (card.type === "testimonial") {
    return (
      <article
        key={`${card.companyLabel}-${index}`}
        data-slide
        className={
          "flex min-w-80 flex-col justify-between gap-4 bg-white p-4 md:p-8 border-r border-gray-10"
        }
      >
        <Image
          src={"/icons/roor.svg"}
          alt={"roor.ai"}
          width={120}
          height={120}
        />
        <Image
          src={"/icons/quote.svg"}
          alt={"quote"}
          width={20}
          height={20}
          className="mt-4 md:mt-6"
        />
        <Text>{card.quote}</Text>
        <div className="mt-4 md:mt-12 flex items-center gap-3">
          <div
            className="size-10 shrink-0 rounded-full bg-gray-10"
            aria-hidden
          />
          <div>
            <Text as="h6">{card.role}</Text>
            <Text>{card.attributionCompany}</Text>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      key="rating"
      data-slide
      className="flex min-w-76 flex-col items-center justify-center bg-white border-r border-gray-10"
      aria-label={`${card.score} average from ${card.reviewCountLabel} on Google`}
    >
      <Text as="h1" weight="normal">
        {card.score}
      </Text>
      <div
        className="mt-3 flex items-center justify-center gap-0.5 text-primary"
        aria-hidden
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-10 fill-primary-100" strokeWidth={0} />
        ))}
      </div>
      <Text className="mt-2 text-gray-80">{card.reviewCountLabel}</Text>
      <Image
        src="/icons/google-wordmark.svg"
        alt="Google"
        width={120}
        height={120}
        className="mt-12"
      />
    </article>
  );
}

export default function ReviewsCarousel() {
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
    <div className="relative mt-4 md:mt-16 ml-auto w-full mr-0 px-4 sm:px-6 md:px-8 max-w-screen-1xl xl:max-w-screen-3xl">
      <div
        ref={scrollerRef}
        className={
          "grid grid-flow-col overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden"
        }
        tabIndex={0}
        aria-label="Customer reviews carousel"
      >
        {REVIEWS_SECTION_CARDS.map((card, index) => renderCard(card, index))}
      </div>

      <div className="mt-2 md:mt-6 flex justify-end gap-2">
        <button
          type="button"
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border border-gray-50 bg-white text-black",
            "transition-colors hover:bg-gray-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          )}
          aria-label="Show previous reviews"
          onClick={() => scrollByDirection("left")}
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button
          type="button"
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border border-gray-50 bg-white text-black",
            "transition-colors hover:bg-gray-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          )}
          aria-label="Show next reviews"
          onClick={() => scrollByDirection("right")}
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
