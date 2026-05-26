"use client";

import PricingCalculatorSlider from "@/features/model-api/components/pricing/PricingCalculatorSlider";
import { formatCurrency } from "@/features/model-api/utils/pricing-calculator-utils";
import { Text } from "@/shared/ui-lib";

type PricingCalculatorWorkloadMixRowProps = {
  label: string;
  percentage: number;
  cost: number;
  onChange: (value: number) => void;
};

const PricingCalculatorWorkloadMixRow = ({
  label,
  percentage,
  cost,
  onChange,
}: PricingCalculatorWorkloadMixRowProps) => {
  return (
    <div className="grid grid-cols-[3.5rem_minmax(0,1fr)_2.5rem_3rem] items-center gap-x-3 md:grid-cols-[5rem_minmax(0,1fr)_3rem_3.5rem]">
      <Text textColor="gray-90">{label}</Text>
      <PricingCalculatorSlider
        value={percentage}
        onChange={onChange}
        variant="neutral"
        ariaLabel={`${label} workload percentage`}
      />
      <Text as="small" textColor="gray-85" align="right">
        {percentage}%
      </Text>
      <Text as="h6" align="right">
        {formatCurrency(cost)}
      </Text>
    </div>
  );
};

export default PricingCalculatorWorkloadMixRow;
