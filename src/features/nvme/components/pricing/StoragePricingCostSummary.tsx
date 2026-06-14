import { Text } from "@/shared/ui-lib";
import { FREE_INCLUDED_GB } from "../../constants/storage-pricing-calculator.constants";

type StoragePricingCostSummaryProps = {
  monthlyCostLabel: string;
};

const StoragePricingCostSummary = ({
  monthlyCostLabel,
}: StoragePricingCostSummaryProps) => {
  return (
    <div className="mt-4.5 flex items-center justify-between gap-4 rounded-lg bg-gray-01 p-4 md:p-5">
      <div className="max-w-50 md:max-w-none">
        <Text as="h6" className="mx-0">
          Monthly cost
        </Text>
        <Text as="h6" textColor="gray-03" className="mt-0.5">
          {FREE_INCLUDED_GB}GB already free · no transfer fees
        </Text>
      </div>
      <Text as="h2" weight="bold">
        {monthlyCostLabel}
      </Text>
    </div>
  );
};

export default StoragePricingCostSummary;
