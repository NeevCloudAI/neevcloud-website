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

  return (
    <div className="relative flex items-center lg:min-h-[680px]">
      {/* Paper MeshGradient shader (right). Block assets get added on top later. */}
      <div
        aria-hidden
        className="absolute right-0 top-0 hidden h-full w-[72%] overflow-hidden rounded-2xl lg:block"
      >
        <Mesh
          speed={1}
          scale={1}
          distortion={1}
          swirl={0.2}
          colors={["#55D2A2", "#EAF4F4"]}
          className="h-full w-full"
        />
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
