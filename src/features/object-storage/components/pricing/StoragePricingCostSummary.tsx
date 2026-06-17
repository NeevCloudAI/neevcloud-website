import { Text } from "@/shared/ui-lib";

type StoragePricingCostSummaryProps = {
  monthlyCostLabel: string;
};

const StoragePricingCostSummary = ({
  monthlyCostLabel,
}: StoragePricingCostSummaryProps) => {
  return (
    <div className="mt-4.5 flex items-center justify-between gap-4 rounded-md bg-gray-01 p-4 md:p-5">
      <div>
        <Text as="h6">Monthly cost</Text>
        <Text as="h6" textColor="gray-03" className="mt-0.5">
          No per-request charges
        </Text>
      </div>
      <Text as="h3" weight="semibold" className="text-30">
        {monthlyCostLabel}
      </Text>
    </div>
  );
};

export default StoragePricingCostSummary;
