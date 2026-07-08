"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Cpu, Zap } from "@/shared/icons/lucide-icon-map";
import Mesh from "@/shared/components/mesh-gradient";
import Container from "@/shared/components/container";
import { cn } from "@/lib/utils";
import {
  STACK_ACCORDION_ITEMS,
  STACK_SECTION,
} from "../data/stack-accordion.data";
import type { StackFeatureIcon } from "../types/stack-accordion.types";

const FEATURE_ICONS: Record<StackFeatureIcon, typeof Cpu> = {
  cpu: Cpu,
  playground: Zap,
  api: Bot,
};

export default function StackScrollClient() {
  const items = STACK_ACCORDION_ITEMS;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(
        Math.max(-el.getBoundingClientRect().top, 0),
        Math.max(total, 1),
      );
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIndex = Math.min(
    items.length - 1,
    Math.floor(progress * items.length + 0.0001),
  );
  const openId = items[activeIndex]?.id;

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ height: `${items.length * 55 + 50}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-16">
        <Container className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2
              id="stack-heading"
              className="text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px]"
            >
              {STACK_SECTION.title}
            </h2>
            <p className="max-w-2xl text-[16px] leading-[132%] tracking-[-0.02em] text-gray-04">
              {STACK_SECTION.subtitle}
            </p>
          </div>

          <div className="relative flex items-center lg:min-h-[500px]">
            {/* Mesh shader (right). Glass block assets get layered on top later. */}
            <div className="absolute right-0 top-0 hidden h-full w-[72%] overflow-hidden rounded-2xl lg:block">
              <Mesh
                speed={1}
                scale={1}
                distortion={1}
                swirl={0.2}
                colors={["#55D2A2", "#EAF4F4"]}
                className="absolute inset-0 h-full w-full"
              />
            </div>

            {/* Accordion (left) — scroll-driven active tier */}
            <ul className="relative z-10 flex w-full list-none flex-col gap-2 lg:max-w-[560px]">
              {items.map((item) => {
                const isOpen = item.id === openId;
                return (
                  <li
                    key={item.id}
                    className="overflow-hidden rounded-2xl bg-black/80 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between gap-4 px-6 py-5">
                      <h3
                        className={cn(
                          "text-[18px] font-normal capitalize leading-[130%] tracking-[-0.01em] transition-colors md:text-[22px]",
                          isOpen ? "text-white" : "text-white/85",
                        )}
                      >
                        {item.heading}
                      </h3>
                      {!isOpen && (
                        <span
                          aria-hidden
                          className="grid size-7 shrink-0 place-items-center rounded-md bg-neev-green/20 text-neev-green"
                        >
                          <svg
                            viewBox="0 0 12 12"
                            width="12"
                            height="12"
                            fill="none"
                          >
                            <path
                              d="M6 1v10M1 6h10"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      )}
                    </div>

                    <div
                      className={cn(
                        "grid transition-all duration-500 ease-out",
                        isOpen && item.features.length > 0
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]",
                      )}
                    >
                      <ul className="flex list-none flex-col gap-6 overflow-hidden px-6 [&:not(:empty)]:pb-6">
                        {isOpen &&
                          item.features.map((feature) => {
                            const Icon = FEATURE_ICONS[feature.icon];
                            return (
                              <li
                                key={feature.text}
                                className="flex items-start gap-3"
                              >
                                <span
                                  aria-hidden
                                  className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-md bg-neev-green/20 text-neev-green"
                                >
                                  <Icon size={16} />
                                </span>
                                <p className="text-[14px] font-normal leading-[150%] tracking-[-0.01em] text-white/70 md:text-[15px]">
                                  {feature.text}
                                </p>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Scroll progress indicator */}
          <div className="mx-auto h-2 w-40 overflow-hidden rounded-full bg-black/10">
            <div
              className="h-full rounded-full bg-black/50"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
