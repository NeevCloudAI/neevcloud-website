"use client";

import Image from "next/image";

type StackLayersProps = {
  activeIndex: number;
  count: number;
};

export default function StackLayers({ activeIndex, count }: StackLayersProps) {
  return (
    <div className="relative flex-1 hidden md:block" aria-hidden>
      {Array.from({ length: count }).map((_, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            className="absolute left-1/2 -translate-x-1/2 w-full h-full"
            style={{
              top: index === 0 ? 0 : index === count - 1 ? 400 : index * 150,
              zIndex: isActive ? 6 : count - index,
              opacity: isActive ? 1 : 0.65,
            }}
          >
            <Image
              src={
                isActive
                  ? `/icons/stack-${index + 1}.svg`
                  : `/icons/stack-${index + 1}-shadow.svg`
              }
              alt={`Stack layer ${index + 1}`}
              width={400}
              height={400}
              priority={index === 0}
            />
          </div>
        );
      })}
    </div>
  );
}
