"use client";

import { useState } from "react";
import { Bot, Cpu, Zap } from "@/shared/icons/lucide-icon-map";
import Mesh from "@/shared/components/mesh-gradient";
import { cn } from "@/lib/utils";
import { STACK_ACCORDION_ITEMS } from "../data/stack-accordion.data";
import type { StackFeatureIcon } from "../types/stack-accordion.types";

const FEATURE_ICONS: Record<StackFeatureIcon, typeof Cpu> = {
  cpu: Cpu,
  playground: Zap,
  api: Bot,
};

export default function StackInteractiveClient() {
  const items = STACK_ACCORDION_ITEMS;
  const [openId, setOpenId] = useState(items[0]?.id ?? "");
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === openId),
  );

  return (
    <div className="relative flex items-center lg:min-h-[680px]">
      {/* Mesh shader + isometric glass-plate stack (right) */}
      <div className="absolute right-0 top-0 hidden h-full w-[72%] overflow-hidden rounded-2xl lg:block">
        <Mesh
          speed={1}
          scale={1}
          distortion={1}
          swirl={0.2}
          colors={["#55D2A2", "#EAF4F4"]}
          className="absolute inset-0 h-full w-full"
        />
        {/* Isometric stack — one plate per tier; the active tier lifts + is labelled.
            Swap these placeholder plates for the glass block assets when added. */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1400px" }}
        >
          <div
            className="relative h-[260px] w-[260px]"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(56deg) rotateZ(-44deg)",
            }}
          >
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              const depth =
                (items.length - 1 - index) * 14 + (isActive ? 58 : 0);
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setOpenId(item.id)}
                  aria-label={item.label}
                  className={cn(
                    "absolute inset-0 grid cursor-pointer place-items-center rounded-[28px] border shadow-[0_24px_48px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-500 ease-out",
                    isActive
                      ? "border-neev-green/80 bg-white/35"
                      : "border-white/35 bg-white/15",
                  )}
                  style={{ transform: `translateZ(${depth}px)` }}
                >
                  <span
                    className={cn(
                      "text-[15px] font-medium transition-opacity",
                      isActive
                        ? "text-black/70 opacity-100"
                        : "text-black/40 opacity-0",
                    )}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Accordion (left, overlapping the glow) */}
      <ul className="relative z-10 flex w-full list-none flex-col gap-2 lg:max-w-[560px]">
        {items.map((item) => {
          const isOpen = item.id === openId;
          return (
            <li
              key={item.id}
              className="rounded-2xl bg-black/80 backdrop-blur-sm"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={cn(
                      "text-[18px] font-normal capitalize leading-[130%] tracking-[-0.01em] md:text-[20px]",
                      isOpen ? "text-white" : "text-white/85",
                    )}
                  >
                    {item.heading}
                  </span>
                  {!isOpen && (
                    <span
                      aria-hidden
                      className="grid size-7 shrink-0 place-items-center rounded-md bg-neev-green/20 text-neev-green"
                    >
                      <svg viewBox="0 0 12 12" width="12" height="12" fill="none">
                        <path
                          d="M6 1v10M1 6h10"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              </h3>

              {isOpen && item.features.length > 0 && (
                <ul className="flex list-none flex-col gap-6 px-6 pb-6">
                  {item.features.map((feature) => {
                    const Icon = FEATURE_ICONS[feature.icon];
                    return (
                      <li key={feature.text} className="flex items-start gap-3">
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
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
