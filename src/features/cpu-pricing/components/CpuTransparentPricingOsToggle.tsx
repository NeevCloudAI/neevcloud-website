import type { ReactNode } from "react";
import { Button, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import { CPU_OS_TOGGLE_OPTIONS } from "../data/transparent-pricing-section.data";
import type {
  CpuOsType,
  CpuTransparentPricingOsToggleProps,
} from "../types/transparent-pricing-section.types";

const OS_ICON: Record<CpuOsType, ReactNode> = {
  linux: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M12 2c-1.4 0-2.4 1.2-2.4 3 0 1.1.3 1.8-.3 2.7-.5.8-1.6 1.5-2.1 2.6-.5 1.1-.4 2.3-.1 3.3.3 1 .1 1.6-.4 2.4-.5.8-.7 1.6-.2 2.3.6.9 2 .7 2.9 1.2.8.4 1.3 1.5 2.6 1.5s1.8-1.1 2.6-1.5c.9-.5 2.3-.3 2.9-1.2.5-.7.3-1.5-.2-2.3-.5-.8-.7-1.4-.4-2.4.3-1 .4-2.2-.1-3.3-.5-1.1-1.6-1.8-2.1-2.6-.6-.9-.3-1.6-.3-2.7 0-1.8-1-3-2.4-3zm-1.3 3.4c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9zm2.6 0c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9z" />
    </svg>
  ),
  windows: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M3 5.5 11 4.4v7.1H3zM12 4.3l9-1.3v7.5h-9zM3 12.5h8v7.1L3 18.6zM12 12.5h9v7.4l-9-1.3z" />
    </svg>
  ),
};

const CpuTransparentPricingOsToggle = ({
  os,
  onOsSelect,
}: CpuTransparentPricingOsToggleProps) => {
  return (
    <div
      role="radiogroup"
      aria-label="Operating system pricing"
      className="mt-6 flex items-center gap-1 rounded-md border border-white/12 bg-white/6 p-1"
    >
      {CPU_OS_TOGGLE_OPTIONS.map((option) => {
        const isActive = option.id === os;
        return (
          <Button
            key={option.id}
            variant="ghost"
            size="none"
            spacing="none"
            role="radio"
            aria-checked={isActive}
            onClick={() => onOsSelect(option.id)}
            className={cn(
              "flex items-center gap-2 rounded-sm px-4 py-2",
              isActive ? "bg-primary text-black" : "text-white",
            )}
          >
            {OS_ICON[option.id]}
            <Text as="h6" fontFamily="spaceMono" textColor={isActive ? "black" : "white"}>
              {option.label}
            </Text>
          </Button>
        );
      })}
    </div>
  );
};

export default CpuTransparentPricingOsToggle;
