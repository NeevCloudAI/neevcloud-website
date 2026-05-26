import type { CSSProperties } from "react";

type StoragePricingCalculatorSliderProps = {
  value: number;
  onChange: (value: number) => void;
  ariaLabel: string;
  "aria-labelledby"?: string;
};

const StoragePricingCalculatorSlider = ({
  value,
  onChange,
  ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: StoragePricingCalculatorSliderProps) => {
  return (
    <input
      type="range"
      min={0}
      max={100}
      step={1}
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      style={{ "--slider-progress": `${value}%` } as CSSProperties}
      className="pricing-calculator-slider pricing-calculator-slider--primary w-full"
    />
  );
};

export default StoragePricingCalculatorSlider;
