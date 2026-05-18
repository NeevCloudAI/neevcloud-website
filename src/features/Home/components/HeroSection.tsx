"use client";

import { useMemo, useState } from "react";
import { Button, Text } from "@/shared/ui-lib";
import HomeSlideShow from "./HomeSlideShow";

const HeroSection = () => {
  const heroSlides = useMemo(
    () => [
      {
        title: (
          <Text
            as="h1"
            textColor="black"
            weight="semibold"
            align="center"
            className="max-w-5xl"
          >
            Full-Stack
            <Text as="span" textColor="primary" weight="semibold" variant="h1">
              AI Infrastructure
            </Text>
            Built to Scale Fearlessly
          </Text>
        ),
        subtitle: (
          <Text as="h6" align="center">
            Run AI workloads with sovereign control, security, and scalability.,
          </Text>
        ),
        button1: <Button>Explore Platform</Button>,
        button2: (
          <Button variant="outline" textColor="black">
            Contact Sales
          </Button>
        ),
      },
      {
        title: (
          <Text
            as="h1"
            textColor="primary"
            weight="semibold"
            align="center"
            className="max-w-5xl"
          >
            Project Noun:
            <Text as="span" textColor="white" weight="semibold" variant="h1">
              The Brain Behind Your AI Infrastructure
            </Text>
          </Text>
        ),
        subtitle: (
          <Text as="h6" align="center" textColor="white">
            Provision high-performance GPU clusters with dependable uptime.,
          </Text>
        ),
        button1: <Button>Explore Platform</Button>,
        button2: (
          <Button variant="white" textColor="black">
            Contact Sales
          </Button>
        ),
      },
      {
        title: (
          <Text
            as="h1"
            textColor="black"
            weight="semibold"
            align="center"
            className="max-w-5xl"
          >
            Full-Stack
            <Text as="span" textColor="primary" weight="semibold" variant="h1">
              AI Infrastructure
            </Text>
            Built to Scale Fearlessly
          </Text>
        ),
        subtitle: (
          <Text as="h6" align="center">
            Run AI workloads with sovereign control, security, and scalability.,
          </Text>
        ),
        button1: <Button>Explore Platform</Button>,
        button2: (
          <Button variant="outline" textColor="black">
            Contact Sales
          </Button>
        ),
      },
    ],
    []
  );

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeHeroSlide = heroSlides[activeSlideIndex] ?? heroSlides[0];

  return (
    <div className="relative flex-1 flex flex-col items-center gap-2 md:gap-4 pt-[10vh] px-4 sm:px-6 md:px-8">
      {activeHeroSlide.title}
      {activeHeroSlide.subtitle}
      <div className="flex gap-4 mt-4 z-10">
        {activeHeroSlide.button1}
        {activeHeroSlide.button2}
      </div>
      <HomeSlideShow onSlideChange={setActiveSlideIndex} />
    </div>
  );
};

export default HeroSection;
