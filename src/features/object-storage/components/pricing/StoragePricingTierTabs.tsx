import { Button, Text } from "@/shared/ui-lib";
import { STORAGE_PRICING_TIERS } from "../../data/transparent-pricing-section.data";
import type { StoragePricingTierId } from "../../types/transparent-pricing-section.types";

type StoragePricingTierTabsProps = {
  selectedTierId: StoragePricingTierId;
  onTierChange: (tierId: StoragePricingTierId) => void;
};

const StoragePricingTierTabs = ({
  selectedTierId,
  onTierChange,
}: StoragePricingTierTabsProps) => {
  return (
    <div
      className="flex flex-wrap items-center gap-2.5"
      role="tablist"
      aria-label="Storage pricing tiers"
    >
      {STORAGE_PRICING_TIERS.map((tier) => {
        const isSelected = tier.id === selectedTierId;

        return (
          <Button
            variant="ghost"
            size="none"
            spacing="none"
            key={tier.id}
            id={`object-storage-pricing-tier-tab-${tier.id}`}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls="object-storage-pricing-calculator-panel"
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onTierChange(tier.id)}
            className="cursor-pointer border-0 bg-transparent p-0"
          >
            <Text
              textColor={isSelected ? "primary" : "gray-05"}
              className={
                isSelected ? "underline underline-offset-4" : undefined
              }
            >
              {tier.label}
            </Text>
          </Button>
        );
      })}
    </div>
  );
};

export default StoragePricingTierTabs;
