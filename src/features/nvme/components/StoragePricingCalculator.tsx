"use client";

import { type CSSProperties, useMemo, useState } from "react";
import {
  DEFAULT_ADDITIONAL_STORAGE_GB,
  FREE_INCLUDED_GB,
  INCLUDED_FEATURES,
  MAX_ADDITIONAL_STORAGE_GB,
  MIN_ADDITIONAL_STORAGE_GB,
} from "@/features/nvme/data/storage-pricing-calculator-data";
import {
  calculateMonthlyStorageCost,
  formatCurrency,
  formatStorageGb,
  sliderToStorage,
  storageToSlider,
} from "@/features/nvme/utils/storage-pricing-calculator-utils";
import { Text } from "@/shared/ui-lib";

type CalculatorSliderProps = {
  value: number;
  onChange: (value: number) => void;
  ariaLabel: string;
};

function CalculatorSlider({
  value,
  onChange,
  ariaLabel,
}: CalculatorSliderProps) {
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
      className="pricing-calculator-slider pricing-calculator-slider--primary w-full"
    />
  );
}

const StoragePricingCalculator = () => {
  const [additionalStorageGb, setAdditionalStorageGb] = useState(
    DEFAULT_ADDITIONAL_STORAGE_GB
  );

  const storageSlider = storageToSlider(
    additionalStorageGb,
    MIN_ADDITIONAL_STORAGE_GB,
    MAX_ADDITIONAL_STORAGE_GB
  );
  const monthlyCost = useMemo(
    () => calculateMonthlyStorageCost(additionalStorageGb),
    [additionalStorageGb]
  );

  return (
    <div className="pricing-calculator flex h-full flex-col">
      <Text as="h5" weight="semibold" className=" uppercase">
        Cost calculator
      </Text>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between gap-4">
          <Text as="h6" textColor="gray-75">
            Additional storage (GB)
          </Text>
          <Text as="h6">{formatStorageGb(additionalStorageGb)}</Text>
        </div>
        <CalculatorSlider
          value={storageSlider}
          onChange={(value) =>
            setAdditionalStorageGb(
              sliderToStorage(
                value,
                MIN_ADDITIONAL_STORAGE_GB,
                MAX_ADDITIONAL_STORAGE_GB
              )
            )
          }
          ariaLabel="Additional storage in gigabytes"
        />
      </div>

      <div className="mt-4.5 flex items-center justify-between gap-4 rounded-lg bg-gray-60 p-4 md:p-5">
        <div>
          <Text as="h6" className="mx-0">
            Monthly cost
          </Text>
          <Text as="h6" textColor="gray-85" className="mt-0.5">
            {FREE_INCLUDED_GB}GB already free · no transfer fees
          </Text>
        </div>
        <Text as="h2" weight="bold">
          {formatCurrency(monthlyCost)}
        </Text>
      </div>

      <div className="mt-4 md:mt-7.5">
        <Text as="h5" weight="semibold">
          What&apos;s Included
        </Text>
        <div className="flex flex-wrap gap-2.5 mt-5">
          {INCLUDED_FEATURES.map((feature) => (
            <Text
              key={feature}
              className="rounded-full bg-primary px-2.5 py-0.75 text-white"
            >
              {feature}
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoragePricingCalculator;
