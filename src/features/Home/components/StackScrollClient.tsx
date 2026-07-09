"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import {
  RiSettings4Line,
  RiSparkling2Line,
  RiTerminalBoxLine,
  RiCpuLine,
  RiHardDrive2Line,
  RiStackLine,
  RiServerLine,
  RiDatabase2Line,
  RiGlobalLine,
  RiFlashlightLine,
  RiRobot2Line,
  RiAddLine,
} from "@remixicon/react";
import Mesh from "@/shared/components/mesh-gradient";
import Container from "@/shared/components/container";
import { cn } from "@/lib/utils";
import {
  STACK_ACCORDION_ITEMS,
  STACK_SECTION,
} from "../data/stack-accordion.data";
import type { StackFeatureIcon } from "../types/stack-accordion.types";

type IconProps = { size?: number | string; className?: string };

const FEATURE_ICONS: Record<StackFeatureIcon, ComponentType<IconProps>> = {
  inference: RiSettings4Line,
  playground: RiSparkling2Line,
  api: RiTerminalBoxLine,
  gpu: RiCpuLine,
  cpu: RiHardDrive2Line,
  kubernetes: RiStackLine,
  compute: RiServerLine,
  storage: RiDatabase2Line,
  networking: RiGlobalLine,
  factory: RiCpuLine,
  sovereign: RiFlashlightLine,
  vault: RiRobot2Line,
};

// Tinted square that houses a teal Remix icon (Paper: 20px, radius 3.33px,
// bg #FFFFFF29). Used for both feature icons and the collapse "+" affordance.
function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden
      className="grid size-5 shrink-0 place-items-center rounded-[3.33px] bg-white/[0.16] text-neev-green"
    >
      {children}
    </span>
  );
}

export default function StackScrollClient() {
  // Build the stack silicon-to-endpoint: the bottom tier (Infinite
  // Infrastructure) is shown first and the tower grows upward to AI Service.
  // The data is authored top-to-bottom, so reverse it for display.
  const items = [...STACK_ACCORDION_ITEMS].reverse();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      raf = 0;
      const el = wrapperRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(
        Math.max(-el.getBoundingClientRect().top, 0),
        Math.max(total, 1),
      );
      setProgress(total > 0 ? scrolled / total : 0);
    };
    // rAF-throttle so we read layout at most once per frame (smoother, no jank).
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    // The layout scrolls inside <body> (overflow-y-auto), so a window-only
    // scroll listener can miss events — listen on document (capture) too.
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIndex = Math.min(
    items.length - 1,
    Math.floor(progress * items.length + 0.0001),
  );
  const openId = items[activeIndex]?.id;
  const scrollToItem = (index: number) => {
    const el = wrapperRef.current;
    if (!el) return;

    const total = Math.max(el.offsetHeight - window.innerHeight, 1);
    const sectionTop = window.scrollY + el.getBoundingClientRect().top;
    const targetProgress = Math.min(index / items.length + 0.02, 1);

    setProgress(targetProgress);
    window.scrollTo({
      top: sectionTop + total * targetProgress,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-cloud-gray">
      {/* Heading scrolls normally (not pinned) — only the stack below sticks,
          matching legora.com. */}
      <Container className="flex flex-col items-center gap-3 pt-20 text-center md:pt-[120px]">
        <h2
          id="stack-heading"
          className="text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px]"
        >
          {STACK_SECTION.title}
        </h2>
        <p className="max-w-2xl text-[16px] font-normal leading-[132%] tracking-[-0.02em] text-black">
          {STACK_SECTION.subtitle}
        </p>
      </Container>

      <div
        ref={wrapperRef}
        className="relative"
        style={{ height: `${items.length * 60 + 40}vh` }}
      >
        <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden pb-16">
          <Container className="flex flex-col gap-8 md:gap-12">
            <div className="relative flex min-h-[420px] items-center lg:min-h-[560px]">
            {/* Mesh shader (right) + horizontal fade overlay on its left edge */}
            <div className="absolute right-0 top-0 hidden h-full w-[min(800px,58%)] overflow-hidden rounded-2xl lg:block">
              <Mesh
                speed={1}
                scale={1}
                distortion={1}
                swirl={0.2}
                colors={["#55D2A2", "#EAF4F4"]}
                className="absolute inset-0 h-full w-full"
              />
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 w-[97%] bg-gradient-to-r from-cloud-gray via-cloud-gray/70 to-transparent"
              />

              {/* Glass tier plates — they stack into a tower one plate at a time
                  as you scroll through the tiers (Legora-style). */}
              {items.map((item, index) => {
                // Plates keep their physical tower positions (Layer_01 = top …
                // Layer_04 = bottom) but reveal from the bottom up as the tiers
                // advance, so the tower builds silicon → endpoint.
                const platePos = items.length - 1 - index; // 0 = top … n-1 = bottom
                const shown = index <= activeIndex;
                return (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={item.id}
                    src={`/images/home/stack/Layer_0${platePos + 1}.png`}
                    alt=""
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute left-1/2 w-[45.36%] max-w-none object-contain saturate-[1.3] drop-shadow-[0_16px_34px_#0000003d] transition-all duration-700 ease-out",
                      shown ? "opacity-100" : "opacity-0",
                    )}
                    style={{
                      top: `${3 + platePos * 15.3}%`,
                      zIndex: 20 - platePos,
                      transform: `translateX(-50%) translateY(${shown ? 0 : 36}px)`,
                    }}
                  />
                );
              })}
            </div>

            {/* Accordion (left) — scroll-driven active tier */}
            <ul className="relative z-10 flex w-full list-none flex-col items-start gap-2 lg:max-w-[660px]">
              {items.map((item, index) => {
                const isOpen = item.id === openId;
                return (
                  <li
                    key={item.id}
                    className={cn(
                      "overflow-hidden rounded-2xl bg-black/80 backdrop-blur-[8px] transition-all duration-500 ease-out",
                      isOpen ? "w-full" : "w-auto",
                    )}
                  >
                    <button
                      type="button"
                      aria-controls={`stack-panel-${item.id}`}
                      aria-expanded={isOpen}
                      onClick={() => scrollToItem(index)}
                      className={cn(
                        "flex w-full items-center justify-between gap-4 px-5 text-left",
                        isOpen ? "pt-5" : "py-4",
                      )}
                    >
                      <span
                        className={cn(
                          "font-medium capitalize leading-[120%] tracking-[-0.01em] text-white",
                          isOpen ? "text-[20px]" : "text-[16px]",
                        )}
                      >
                        {isOpen ? item.heading : item.label}
                      </span>
                      {!isOpen && (
                        <IconTile>
                          <RiAddLine size={14} />
                        </IconTile>
                      )}
                    </button>

                    <div
                      id={`stack-panel-${item.id}`}
                      className={cn(
                        "grid transition-all duration-500 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <ul className="flex list-none flex-col gap-4 overflow-hidden px-5 [&:not(:empty)]:pb-5 [&:not(:empty)]:pt-7">
                        {isOpen &&
                          item.features.map((feature) => {
                            const Icon = FEATURE_ICONS[feature.icon];
                            return (
                              <li
                                key={feature.text}
                                className="flex items-start gap-3"
                              >
                                <IconTile>
                                  <Icon size={13} />
                                </IconTile>
                                <p className="text-[14px] font-normal leading-[142%] tracking-[-0.02em] text-white">
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

          {/* Scroll progress indicator (Legora-style) */}
          <div className="mx-auto h-1.5 w-40 overflow-hidden rounded-full bg-black/10">
            <div
              className="h-full rounded-full bg-black/50 transition-[width] duration-150 ease-out"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </Container>
      </div>
      </div>
    </section>
  );
}
