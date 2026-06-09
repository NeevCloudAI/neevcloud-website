"use client";

import PricingCalculatorSlider from "@/features/model-api/components/pricing/PricingCalculatorSlider";
import { Text } from "@/shared/ui-lib";
import {
  sliderToValue,
  valueToSlider,
} from "../../utils/tco-calculator-utils";

type TcoCalculatorSliderFieldProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  valueLabel: string;
  minLabel: string;
  maxLabel: string;
  ariaLabel: string;
  onChange: (value: number) => void;
};

const TcoCalculatorSliderField = ({
  label,
  value,
  min,
  max,
  valueLabel,
  minLabel,
  maxLabel,
  ariaLabel,
  onChange,
}: TcoCalculatorSliderFieldProps) => {
  const sliderValue = valueToSlider(value, min, max);

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <Text as="h6" textColor="white">
          {label}
        </Text>
        <Text as="h6" textColor="primary" aria-live="polite">
          {valueLabel}
        </Text>
      </div>
      <div className="pricing-calculator mt-3">
        <PricingCalculatorSlider
          value={sliderValue}
          onChange={(nextSlider) =>
            onChange(sliderToValue(nextSlider, min, max))
          }
          ariaLabel={ariaLabel}
        />
      </div>
      <div className="mt-2 flex items-center justify-between gap-2">
        <Text as="small" textColor="gray-80">
          {minLabel}
        </Text>
        <Text as="small" textColor="gray-80">
          {maxLabel}
        </Text>
      </div>
    </div>
  );
};

export default TcoCalculatorSliderField;
