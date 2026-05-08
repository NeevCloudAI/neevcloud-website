"use client";

import { useMemo, useState } from "react";
import { Button, Text } from "@/shared/ui-lib";
import HomeSlideShow from "./HomeSlideShow";

const HeroSection = () => {
  const heroSlides = useMemo(
    () => [
      {
        leadText: "Full-Stack",
        accentText: "AI Infrastructure",
        accentColor: "primary" as const,
        textColor: "black" as const,
        accentFirst: false,
        buttonVariant: "outline" as const,
        title: "Build to Scale Fearlessly",
        subtitle:
          "Run AI workloads with sovereign control, security, and scalability.",
      },
      {
        leadText: "Enterprise-Ready",
        accentText: "Project Noun:",
        accentColor: "primary" as const,
        textColor: "white" as const,
        accentFirst: true,
        buttonVariant: "white" as const,
        title: "Accelerate Model Training",
        subtitle:
          "Provision high-performance GPU clusters with dependable uptime.",
      },
      {
        leadText: "Full-Stack",
        accentText: "AI Infrastructure",
        accentColor: "primary" as const,
        textColor: "black" as const,
        accentFirst: false,
        buttonVariant: "outline" as const,
        title: "Build to Scale Fearlessly",
        subtitle:
          "Run AI workloads with sovereign control, security, and scalability.",
      },
    ],
    []
  );

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeHeroSlide = heroSlides[activeSlideIndex] ?? heroSlides[0];

  return (
    <div className="relative flex-1 flex flex-col items-center gap-2 md:gap-4 pt-[10vh] px-4 sm:px-6 md:px-8">
      <div className="flex gap-2 md:gap-4  z-10">
        {activeHeroSlide.accentFirst ? (
          <>
            <Text as="h1" textColor={activeHeroSlide.accentColor}>
              {activeHeroSlide.accentText}
            </Text>
            <Text as="h1" textColor={activeHeroSlide.textColor}>
              {activeHeroSlide.leadText}
            </Text>
          </>
        ) : (
          <>
            <Text as="h1" textColor={activeHeroSlide.textColor}>
              {activeHeroSlide.leadText}
            </Text>
            <Text as="h1" textColor={activeHeroSlide.accentColor}>
              {activeHeroSlide.accentText}
            </Text>
          </>
        )}
      </div>
      <Text
        as="h1"
        className="z-10 text-center"
        textColor={activeHeroSlide.textColor}
      >
        {activeHeroSlide.title}
      </Text>
      <Text
        as="h6"
        className="z-10"
        align="center"
        textColor={activeHeroSlide.textColor}
      >
        {activeHeroSlide.subtitle}
      </Text>
      <div className="flex gap-4 mt-4 z-10">
        <Button>Explore Platform</Button>
        <Button variant={activeHeroSlide.buttonVariant} textColor="black">
          Contact Sales
        </Button>
      </div>
      <HomeSlideShow onSlideChange={setActiveSlideIndex} />
    </div>
  );
};

export default HeroSection;
