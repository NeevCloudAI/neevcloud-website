import * as React from "react";
import { cn } from "@/lib/utils";

type TooltipSide = "top" | "bottom";

export type TooltipProps = {
  content: string;
  children: React.ReactNode;
  side?: TooltipSide;
  className?: string;
};

const TOOLTIP_SIDE_CLASSES: Record<TooltipSide, string> = {
  top: "bottom-full left-1/2 mb-3 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
};

export function Tooltip({
  content,
  children,
  side = "top",
  className,
}: TooltipProps) {
  return (
    <span
      className={cn(
        "group/tooltip relative inline-block outline-none",
        className
      )}
      tabIndex={0}
    >
      {children}
      <span
        role="tooltip"
        className={cn(
          "absolute z-50 w-max max-w-sm rounded-md bg-white p-4 text-sm text-black drop-shadow-lg",
          "after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-x-8 after:border-t-8 after:border-x-transparent after:border-t-white after:content-['']",
          "invisible opacity-0 transition-opacity duration-200",
          "group-hover/tooltip:visible group-hover/tooltip:opacity-100",
          "group-focus-within/tooltip:visible group-focus-within/tooltip:opacity-100",
          TOOLTIP_SIDE_CLASSES[side]
        )}
      >
        {content}
      </span>
    </span>
  );
}
