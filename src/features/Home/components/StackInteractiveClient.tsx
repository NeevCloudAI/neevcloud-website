"use client";

import { useState } from "react";
import Image from "next/image";
import { Bot, Cpu, Zap } from "@/shared/icons/lucide-icon-map";
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
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Vertical stack — 4 layered blocks that react to the active tier */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-black">
        <Image
          src="/images/home/stack/stack-glow.png"
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover opacity-80"
        />
        <div style={{ perspective: "1100px" }}>
          <div
            className="relative h-[240px] w-[240px] sm:h-[280px] sm:w-[280px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              const depth = index - activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setOpenId(item.id)}
                  aria-label={item.label}
                  className={cn(
                    "absolute inset-0 grid cursor-pointer place-items-center rounded-2xl border text-center transition-all duration-500 ease-out",
                    isActive
                      ? "border-neev-green/70 bg-white/10 shadow-[0_0_44px_rgba(89,216,167,0.35)] backdrop-blur-sm"
                      : "border-white/15 bg-white/5 backdrop-blur-[2px]",
                  )}
                  style={{
                    transform: `translateY(${depth * 26}px) translateZ(${
                      isActive ? 60 : -Math.abs(depth) * 44
                    }px) scale(${isActive ? 1 : 1 - Math.abs(depth) * 0.06}) rotateX(14deg)`,
                    opacity: isActive
                      ? 1
                      : Math.max(0.22, 0.72 - Math.abs(depth) * 0.18),
                    zIndex: 20 - Math.abs(depth),
                  }}
                >
                  <span
                    className={cn(
                      "px-4 text-[15px] font-medium capitalize md:text-[16px]",
                      isActive ? "text-white" : "text-white/70",
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

      {/* Services accordion */}
      <ul className="flex list-none flex-col gap-2">
        {items.map((item) => {
          const isOpen = item.id === openId;
          return (
            <li
              key={item.id}
              className={cn(
                "rounded-xl border transition-colors",
                isOpen ? "border-cloud-gray bg-white" : "border-transparent",
              )}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(item.id)}
                  className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-4 text-left"
                >
                  <span
                    className={cn(
                      "text-[18px] font-medium capitalize leading-[130%] tracking-[-0.01em] md:text-[20px]",
                      isOpen ? "text-black" : "text-gray-04",
                    )}
                  >
                    {item.heading}
                  </span>
                  {!isOpen && (
                    <span
                      aria-hidden
                      className="grid size-6 shrink-0 place-items-center rounded-md bg-primary-90/10 text-primary-90"
                    >
                      <svg viewBox="0 0 12 12" width="12" height="12" fill="none">
                        <path
                          d="M6 1v10M1 6h10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              </h3>

              {isOpen && item.features.length > 0 && (
                <ul className="flex list-none flex-col gap-4 px-4 pb-5">
                  {item.features.map((feature) => {
                    const Icon = FEATURE_ICONS[feature.icon];
                    return (
                      <li key={feature.text} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-md bg-primary-90/10 text-primary-90"
                        >
                          <Icon size={16} />
                        </span>
                        <p className="text-[14px] leading-[150%] tracking-[-0.01em] text-gray-04 md:text-[15px]">
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
