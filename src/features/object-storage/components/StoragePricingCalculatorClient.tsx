"use client";

import { useMemo, useState } from "react";
import { Text } from "@/shared/ui-lib";
import {
  DEFAULT_ADDITIONAL_STORAGE_GB,
  DEFAULT_STORAGE_TIER_ID,
  MAX_ADDITIONAL_STORAGE_GB,
  MIN_ADDITIONAL_STORAGE_GB,
} from "../constants/storage-pricing-calculator.constants";
import { STORAGE_PRICING_TIERS } from "../data/transparent-pricing-section.data";
import type { StoragePricingTierId } from "../types/transparent-pricing-section.types";
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
import StoragePricingTierTabs from "./pricing/StoragePricingTierTabs";

const StoragePricingCalculatorClient = () => {
  const [selectedTierId, setSelectedTierId] = useState<StoragePricingTierId>(
    DEFAULT_STORAGE_TIER_ID,
  );
  const [additionalStorageGb, setAdditionalStorageGb] = useState(
    DEFAULT_ADDITIONAL_STORAGE_GB,
  );

  const selectedTier = STORAGE_PRICING_TIERS.find(
    (tier) => tier.id === selectedTierId,
  );
  const storageSlider = storageToSlider(
    additionalStorageGb,
    MIN_ADDITIONAL_STORAGE_GB,
    MAX_ADDITIONAL_STORAGE_GB,
  );
  const monthlyCost = useMemo(
    () =>
      calculateMonthlyStorageCost(
        additionalStorageGb,
        selectedTier?.pricePerGbMonth ?? 0,
      ),
    [additionalStorageGb, selectedTier?.pricePerGbMonth],
  );

  return (
    <div
      id="object-storage-pricing-calculator-panel"
      role="tabpanel"
      aria-labelledby={`object-storage-pricing-tier-tab-${selectedTierId}`}
      className="pricing-calculator flex h-full flex-col"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <Text as="h5" weight="semibold">
          COST CALCULATOR
        </Text>
        <StoragePricingTierTabs
          selectedTierId={selectedTierId}
          onTierChange={setSelectedTierId}
        />
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between gap-4">
          <Text as="h6" textColor="gray-04" id="additional-storage-label">
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
