"use client";

import Image from "next/image";
import { useState } from "react";

type StackLayer = {
  title: string;
};

type StackLayersProps = {
  activeIndex: number;
  count: number;
  layers: StackLayer[];
  onSelectLayer: (index: number) => void;
};

export default function StackLayers({
  activeIndex,
  count,
  layers,
  onSelectLayer,
}: StackLayersProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const resolveZIndex = (index: number) => {
    if (hoveredIndex === index) return 10;
    if (activeIndex === index) return 6;
    return count - index;
  };

  return (
    <div
      className="relative hidden flex-1 md:block"
      role="group"
      aria-label="Stack layers"
    >
      {Array.from({ length: count }).map((_, index) => {
        const isActive = activeIndex === index;
        const layerTitle = layers[index]?.title ?? `Stack layer ${index + 1}`;

        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelectLayer(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            className="absolute left-1/2 w-full -translate-x-1/2 cursor-pointer border-0 bg-transparent p-0 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            style={{
              top: index === 0 ? 0 : index === count - 1 ? 400 : index * 150,
              zIndex: resolveZIndex(index),
              opacity: isActive ? 1 : 0.5,
            }}
            aria-label={`Show ${layerTitle}`}
            aria-current={isActive ? "true" : undefined}
          >
            <Image
              src={`/icons/stack-${index + 1}.svg`}
              alt=""
              width={400}
              height={400}
              priority={index === 0}
              aria-hidden
            />
          </button>
        );
      })}
    </div>
  );
}
