"use client";

import { useState } from "react";
import { Bot, Cpu, Zap } from "@/shared/icons/lucide-icon-map";
import { cn } from "@/lib/utils";
import { STACK_ACCORDION_ITEMS } from "../data/stack-accordion.data";
import type { StackFeatureIcon } from "../types/stack-accordion.types";

const FEATURE_ICONS: Record<
  StackFeatureIcon,
  typeof Cpu
> = {
  cpu: Cpu,
  playground: Zap,
  api: Bot,
};

export default function StackAccordionClient() {
  const [openId, setOpenId] = useState(STACK_ACCORDION_ITEMS[0]?.id ?? "");

  return (
    <ul className="flex list-none flex-col gap-2">
      {STACK_ACCORDION_ITEMS.map((item) => {
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
                onClick={() => setOpenId(isOpen ? "" : item.id)}
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
  );
}
