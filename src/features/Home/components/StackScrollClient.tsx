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
  const barRef = useRef<HTMLDivElement>(null);
  // While a click-triggered glide is in flight, scroll events must not drive
  // activeIndex — otherwise every tier between source and target flaps
  // open/closed mid-scroll.
  const glidingRef = useRef(false);
  // Active glide frame id so a new click cancels the previous animation
  // instead of two rAF loops fighting over scrollTop.
  const glideRafRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemCount = items.length;

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
      const progress = total > 0 ? scrolled / total : 0;
      // Progress bar is ref-driven so continuous scroll doesn't re-render the
      // whole tier list every frame — React state only changes per tier.
      if (barRef.current) {
        barRef.current.style.width = `${Math.round(progress * 100)}%`;
      }
      if (glidingRef.current) return;
      const idx = Math.min(
        itemCount - 1,
        Math.floor(progress * itemCount + 0.0001),
      );
      setActiveIndex((prev) => (prev === idx ? prev : idx));
    };
    // rAF-throttle so we read layout at most once per frame (smoother, no jank).
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    // The layout scrolls inside <body> (overflow-y-auto), so window "scroll"
    // never fires — a capturing document listener catches every scroller.
    document.addEventListener("scroll", onScroll, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      document.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
    };
  }, [itemCount]);

  const openId = items[activeIndex]?.id;
  const scrollToItem = (index: number) => {
    const el = wrapperRef.current;
    if (!el) return;

    const total = Math.max(el.offsetHeight - window.innerHeight, 1);
    // The page can scroll on either the root or <body> (globals.css makes body
    // overflow-y-auto) — window.scrollTo silently no-ops when body is the
    // scroller, so pick whichever element actually scrolls.
    const scroller =
      [document.scrollingElement, document.body].find(
        (s): s is Element => !!s && s.scrollHeight - s.clientHeight > 1,
      ) ?? document.documentElement;
    const sectionTop = scroller.scrollTop + el.getBoundingClientRect().top;
    const targetProgress = Math.min((index + 0.5) / items.length, 0.999);
    const from = scroller.scrollTop;
    const to = sectionTop + total * targetProgress;

    // Open the target tier immediately and glide there over a fixed duration.
    // Native smooth scroll takes distance-proportional time and lets every
    // in-between tier flap open/closed — this keeps one clean transition.
    setActiveIndex(index);
    // cancel any in-flight glide from a previous click
    if (glideRafRef.current) cancelAnimationFrame(glideRafRef.current);
    glidingRef.current = true;

    // honour prefers-reduced-motion: jump instantly, no animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scroller.scrollTo({ top: to, behavior: "instant" as ScrollBehavior });
      glidingRef.current = false;
      return;
    }

    const duration = 650;
    const start = performance.now();
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // behavior:"instant" — the page has CSS scroll-behavior:smooth, and a
      // plain scrollTop assignment would start a new smooth animation every
      // frame, compounding into a rubber-band bounce.
      scroller.scrollTo({
        top: from + (to - from) * ease(t),
        behavior: "instant" as ScrollBehavior,
      });
      if (t < 1) {
        glideRafRef.current = requestAnimationFrame(step);
      } else {
        glidingRef.current = false;
        glideRafRef.current = 0;
      }
    };
    glideRafRef.current = requestAnimationFrame(step);
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
          {/* "Silicon to endpoint." carries the brand teal */}
          {STACK_SECTION.title.split("Silicon")[0]}
          <span className="text-[#00A78A]">
            Silicon{STACK_SECTION.title.split("Silicon")[1]}
          </span>
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
                    loading="lazy"
                    decoding="async"
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

            {/* Mobile (below lg): scroll-driven like desktop — plate tower on
                top, full-text caption card below it (Legora behaviour). */}
            <div className="flex w-full flex-col gap-4 lg:hidden">
              <div className="relative h-[38vh] min-h-[260px] w-full">
                {items.map((item, index) => {
                  const platePos = items.length - 1 - index;
                  const shown = index <= activeIndex;
                  return (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      key={item.id}
                      src={`/images/home/stack/Layer_0${platePos + 1}.png`}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "pointer-events-none absolute left-1/2 w-[64%] max-w-[340px] object-contain saturate-[1.3] drop-shadow-[0_16px_34px_#0000003d] transition-all duration-700 ease-out",
                        shown ? "opacity-100" : "opacity-0",
                      )}
                      style={{
                        top: `${4 + platePos * 16}%`,
                        zIndex: 20 - platePos,
                        transform: `translateX(-50%) translateY(${shown ? 0 : 36}px)`,
                      }}
                    />
                  );
                })}
              </div>
              <div
                aria-live="polite"
                className="rounded-2xl bg-black/80 p-4 backdrop-blur-[8px]"
              >
                <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-neev-green">
                  {items[activeIndex].label}
                </p>
                <h3 className="mt-1 text-[15px] font-medium leading-snug text-white">
                  {items[activeIndex].heading}
                </h3>
                <ul className="mt-3 flex list-none flex-col gap-2.5">
                  {items[activeIndex].features.map((feature) => {
                    const Icon = FEATURE_ICONS[feature.icon];
                    return (
                      <li key={feature.text} className="flex items-start gap-2.5">
                        <IconTile>
                          <Icon size={12} />
                        </IconTile>
                        <p className="text-[13px] font-normal leading-[142%] text-white/90">
                          {feature.text}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Accordion (left, lg+) — scroll-driven active tier */}
            <ul className="relative z-10 hidden w-full list-none flex-col items-start gap-2 lg:flex lg:max-w-[42%] 1.5xl:max-w-[660px]">
              {items.map((item, index) => {
                const isOpen = item.id === openId;
                return (
                  <li
                    key={item.id}
                    className={cn(
                      // interpolate-size lets the w-auto <-> w-full change tween
                      // natively (Chrome/Edge) instead of snapping — Legora-smooth.
                      "overflow-hidden rounded-2xl bg-black/80 backdrop-blur-[8px] transition-all duration-500 ease-out [interpolate-size:allow-keywords]",
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
                      <ul className="code-swap flex list-none flex-col gap-4 overflow-hidden px-5 [&:not(:empty)]:pb-5 [&:not(:empty)]:pt-7">
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

          {/* Scroll progress indicator (Legora-style) — width driven via ref */}
          <div className="mx-auto h-1.5 w-40 overflow-hidden rounded-full bg-black/10">
            <div
              ref={barRef}
              className="h-full rounded-full bg-black/50 transition-[width] duration-150 ease-out"
              style={{ width: "0%" }}
            />
          </div>
        </Container>
      </div>
      </div>

    </section>
  );
}
