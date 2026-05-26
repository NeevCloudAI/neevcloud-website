"use client";

import { useMemo, useState } from "react";
import { Text } from "@/shared/ui-lib";
import {
  DEFAULT_ADDITIONAL_STORAGE_GB,
  MAX_ADDITIONAL_STORAGE_GB,
  MIN_ADDITIONAL_STORAGE_GB,
} from "../constants/storage-pricing-calculator.constants";
import {
  calculateMonthlyStorageCost,
  formatCurrency,
  formatStorageGb,
  sliderToStorage,
  storageToSlider,
} from "../utils/storage-pricing-calculator-utils";
import StoragePricingCalculatorSlider from "./pricing/StoragePricingCalculatorSlider";
import StoragePricingCostSummary from "./pricing/StoragePricingCostSummary";
import StoragePricingIncludedFeatures from "./pricing/StoragePricingIncludedFeatures";

const StoragePricingCalculatorClient = () => {
  const [additionalStorageGb, setAdditionalStorageGb] = useState(
    DEFAULT_ADDITIONAL_STORAGE_GB,
  );

  const storageSlider = storageToSlider(
    additionalStorageGb,
    MIN_ADDITIONAL_STORAGE_GB,
    MAX_ADDITIONAL_STORAGE_GB,
  );
  const monthlyCost = useMemo(
    () => calculateMonthlyStorageCost(additionalStorageGb),
    [additionalStorageGb],
  );

  return (
    <div className="pricing-calculator flex h-full flex-col">
      <Text as="h5" weight="semibold" className=" uppercase">
        Cost calculator
      </Text>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between gap-4">
          <Text as="h6" textColor="gray-75" id="additional-storage-label">
            Additional storage (GB)
          </Text>
          <Text as="h6" aria-live="polite">
            {formatStorageGb(additionalStorageGb)}
          </Text>
        </div>
        <StoragePricingCalculatorSlider
          value={storageSlider}
          onChange={(value) =>
            setAdditionalStorageGb(
              sliderToStorage(
                value,
                MIN_ADDITIONAL_STORAGE_GB,
                MAX_ADDITIONAL_STORAGE_GB,
              ),
            )
          }
          ariaLabel="Additional storage in gigabytes"
          aria-labelledby="additional-storage-label"
        />
      </div>

      <StoragePricingCostSummary
        monthlyCostLabel={formatCurrency(monthlyCost)}
      />
      <StoragePricingIncludedFeatures />
    </div>
  );
};

export default StoragePricingCalculatorClient;
