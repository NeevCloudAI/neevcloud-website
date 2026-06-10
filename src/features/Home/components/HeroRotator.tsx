"use client";

import { useMemo, useState } from "react";
import { Text } from "@/shared/ui-lib";
import HomeSlideShow, { type SlideShowSlide } from "./HomeSlideShow";
import { HERO_SLIDES } from "../data/hero-slides";
import LinkComponent from "@/shared/ui-lib/link";

const SLIDESHOW_IMAGES: SlideShowSlide[] = [
  { src: "/images/slide-show1.png", alt: "NeevCloud platform overview" },
  { src: "/images/slide-show2.png", alt: "NeevCloud platform overview" },
  { src: "/images/slide-show3.png", alt: "NeevCloud platform overview" },
  { src: "/images/slide-show4.png", alt: "NeevCloud platform overview" },
];

export default function HeroRotator() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const activeHeroSlide = HERO_SLIDES[activeSlideIndex] ?? HERO_SLIDES[0];
  const isDark = activeHeroSlide.theme === "dark";

  const title = useMemo(() => {
    if (!activeHeroSlide) return null;
    const emphasisColor = isDark ? "white" : "primary";
    const restColor = isDark ? "primary" : "black";

    return (
      <Text as="h1" textColor={restColor} align="center" className="max-w-5xl">
        {activeHeroSlide.headlinePrefix}
        <Text as="span" textColor={emphasisColor} variant="h1">
          {activeHeroSlide.headlineEmphasis}
        </Text>
        {activeHeroSlide.headlineSuffix}
      </Text>
    );
  }, [activeHeroSlide, isDark]);

  return (
    <>
      {title}

      <Text as="h6" align="center" textColor={isDark ? "white" : undefined}>
        {activeHeroSlide.subtitle}
      </Text>

      <div className="flex gap-5 mt-5 z-10">
        <LinkComponent
          href={activeHeroSlide.primaryCtaRoute ?? ""}
          variant={activeHeroSlide.primaryCtaVariant}
          target={activeHeroSlide.primaryCtaTarget}
        >
          {activeHeroSlide.primaryCtaLabel}
        </LinkComponent>
        <LinkComponent
          href={activeHeroSlide.secondaryCtaRoute ?? ""}
          variant={activeHeroSlide.secondaryCtaVariant}
          target={activeHeroSlide.secondaryCtaTarget}
        >
          {activeHeroSlide.secondaryCtaLabel}
        </LinkComponent>
      </div>

      <HomeSlideShow
        slides={SLIDESHOW_IMAGES}
        onSlideChange={setActiveSlideIndex}
      />
    </>
  );
}
