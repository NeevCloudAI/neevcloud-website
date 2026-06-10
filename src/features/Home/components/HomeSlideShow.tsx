"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/shared/ui-lib";

const AUTOPLAY_INTERVAL = 4500;

export type SlideShowSlide = {
  src: string;
  alt: string;
};

type HomeSlideShowProps = {
  slides: SlideShowSlide[];
  onSlideChange?: (index: number) => void;
};

const HomeSlideShow = ({ slides, onSlideChange }: HomeSlideShowProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(interval);
  }, [slides]);

  useEffect(() => {
    onSlideChange?.(activeIndex);
  }, [activeIndex, onSlideChange]);

  return (
    <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden z-[-1]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
        </div>
      ))}

      {slides.length > 1 && (
        <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <Button
              spacing="none"
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 w-1.5 rounded-full ${
                index === activeIndex ? "bg-secondary" : "bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeSlideShow;
