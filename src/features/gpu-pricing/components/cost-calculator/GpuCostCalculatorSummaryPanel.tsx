import { Divider, Text, LinkComponent } from "@/shared/ui-lib";
import { GPU_COST_CALCULATOR_SECTION } from "../../data/cost-calculator-section.data";
import type { GpuCostCalculatorBreakdown } from "../../types/cost-calculator-section.types";
import {
  formatCurrency,
  formatRatePerHour,
} from "../../utils/gpu-cost-calculator-utils";

type GpuCostCalculatorSummaryPanelProps = {
  breakdown: GpuCostCalculatorBreakdown;
  ratePerHour: number;
  hoursPerMonth: number;
};

const GpuCostCalculatorSummaryPanel = ({
  breakdown,
  ratePerHour,
  hoursPerMonth,
}: GpuCostCalculatorSummaryPanelProps) => {
  const discountLabel =
    breakdown.discountAmount > 0
      ? `-${formatCurrency(breakdown.discountAmount)}`
      : "-";

  return (
    <div className="flex h-full flex-col rounded-lg bg-cloud-gray p-4 md:p-6">
      <Text as="small" textColor="gray-03" className="uppercase">
        {GPU_COST_CALCULATOR_SECTION.summaryLiveLabel}
      </Text>
      <Text
        as="small"
        textColor="gray-03"
        weight="semibold"
        className="mt-4 uppercase tracking-wide"
      >
        {GPU_COST_CALCULATOR_SECTION.summaryTitle}
      </Text>

      <Text
        as="h2"
        textColor="primary"
        weight="bold"
        className="mt-2 leading-none"
        aria-live="polite"
      >
        {formatCurrency(breakdown.monthlyCost)}
      </Text>

      <Text as="h6" textColor="gray-03" className="mt-2">
        {breakdown.summaryLabel}
      </Text>

      <Divider orientation="horizontal" className="my-4" />

      <ul className="m-0 flex list-none flex-col gap-2 p-0">
        <li className="flex items-center justify-between gap-4">
          <Text as="small" textColor="gray-03">
            Base rate
          </Text>
          <Text as="small" textColor="primary">
            +{formatRatePerHour(ratePerHour)}
          </Text>
        </li>
        <li className="flex items-center justify-between gap-4">
          <Text as="small" textColor="gray-03">
            Hours / month
          </Text>
          <Text as="small">{hoursPerMonth}</Text>
        </li>
        <li className="flex items-center justify-between gap-4">
          <Text as="small" textColor="gray-03">
            Subtotal
          </Text>
          <Text as="small" textColor="primary">
            +{formatCurrency(breakdown.subtotal)}
          </Text>
        </li>
        <li className="flex items-center justify-between gap-4">
          <Text as="small" textColor="gray-03">
            {breakdown.commitmentLabel} discount
          </Text>
          <Text as="small" textColor="gray-03">
            {discountLabel}
          </Text>
        </li>
        <li className="flex items-center justify-between gap-4">
          <Text as="small" textColor="gray-03">
            Annualized
          </Text>
          <Text as="small" textColor="primary">
            +{formatCurrency(breakdown.annualizedCost)}
          </Text>
        </li>
      </ul>

      <div className="mt-auto flex flex-col gap-3 pt-6">
        <LinkComponent
          href={GPU_COST_CALCULATOR_SECTION.deployCtaRoute}
          target="_blank"
          className="w-full"
        >
          {GPU_COST_CALCULATOR_SECTION.deployCta}
        </LinkComponent>
        <LinkComponent
          href="/contact-neevcloud"
          variant="outline"
          className="w-full"
        >
          {GPU_COST_CALCULATOR_SECTION.contactCta}
        </LinkComponent>
      </div>
    </div>
  );
};

export default GpuCostCalculatorSummaryPanel;
