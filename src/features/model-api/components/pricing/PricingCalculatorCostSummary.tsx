import { formatCurrency } from "@/features/model-api/utils/pricing-calculator-utils";
import { Text } from "@/shared/ui-lib";

type PricingCalculatorCostSummaryProps = {
  monthlyCost: number;
};

const PricingCalculatorCostSummary = ({
  monthlyCost,
}: PricingCalculatorCostSummaryProps) => {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <Text as="small" textColor="gray-85" className="uppercase">
          live estimate
        </Text>
        <Text as="h5" weight="semibold" className="mt-1.25">
          Monthly cost
        </Text>
      </div>
      <div className="text-right">
        <Text as="h2" weight="bold" className="mx-0 leading-none">
          {formatCurrency(monthlyCost)}
        </Text>
        <Text as="small" textColor="gray-85" className="mt-1.25">
          / month at current mix
        </Text>
      </div>
    </div>
  );
};

export default PricingCalculatorCostSummary;
