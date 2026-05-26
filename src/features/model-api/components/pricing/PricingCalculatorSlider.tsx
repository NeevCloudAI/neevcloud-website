"use client";

import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type PricingCalculatorSliderProps = {
  value: number;
  onChange: (value: number) => void;
  variant?: "primary" | "neutral";
  ariaLabel: string;
};

const PricingCalculatorSlider = ({
  value,
  onChange,
  variant = "primary",
  ariaLabel,
}: PricingCalculatorSliderProps) => {
  return (
    <input
      type="range"
      min={0}
      max={100}
      step={1}
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      style={{ "--slider-progress": `${value}%` } as CSSProperties}
      className={cn(
        "pricing-calculator-slider w-full",
        variant === "primary"
          ? "pricing-calculator-slider--primary"
          : "pricing-calculator-slider--neutral",
      )}
    />
  );
};

export default PricingCalculatorSlider;
