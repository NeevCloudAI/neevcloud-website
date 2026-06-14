"use client";

import { cn } from "@/lib/utils";
import { Text, LinkComponent } from "@/shared/ui-lib";
import { PROVIDER_COMPARISON_SECTION_ID } from "../../constants/calculator-section.constants";
import {
  TCO_CALCULATOR_PROVIDERS,
  TCO_CALCULATOR_SECTION,
} from "../../data/calculator-section.data";
import type { TcoCalculatorBreakdown } from "../../types/calculator-section.types";
import { formatCurrency } from "../../utils/tco-calculator-utils";

type TcoCalculatorSummaryPanelProps = {
  breakdown: TcoCalculatorBreakdown;
};

const TcoCalculatorSummaryPanel = ({
  breakdown,
}: TcoCalculatorSummaryPanelProps) => {
  const maxProviderTotal = Math.max(
    ...TCO_CALCULATOR_PROVIDERS.map(
      (provider) => breakdown.providerTotals[provider.id]
    )
  );

  return (
    <div className="flex h-full flex-col rounded-xl bg-white p-4 md:p-6">
      <Text as="small" textColor="gray-03" className="uppercase tracking-wide">
        {TCO_CALCULATOR_SECTION.summaryLabel}
      </Text>

      <Text
        as="h2"
        weight="bold"
        className="mt-3 leading-none"
        aria-live="polite"
      >
        {formatCurrency(breakdown.monthlyTotal)}
      </Text>

      <Text as="h6" textColor="gray-03" className="mt-2">
        {breakdown.summaryLabel}
      </Text>

      <Text
        as="small"
        textColor="gray-03"
        weight="semibold"
        className="mt-6 uppercase tracking-wide"
      >
        {TCO_CALCULATOR_SECTION.providerComparisonLabel}
      </Text>

      <ul className="m-0 mt-3 flex list-none flex-col gap-3 p-0">
        {TCO_CALCULATOR_PROVIDERS.map((provider) => {
          const total = breakdown.providerTotals[provider.id];
          const barWidth =
            maxProviderTotal > 0 ? (total / maxProviderTotal) * 100 : 0;

          return (
            <li key={provider.id}>
              <div className="flex items-center justify-between gap-3">
                <Text as="small" textColor="gray-03" className="shrink-0">
                  {provider.label}
                </Text>
                <Text as="small" weight="semibold">
                  {formatCurrency(total)}
                </Text>
              </div>
              <div
                className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-cloud-gray"
                aria-hidden="true"
              >
                <div
                  className={cn("h-full rounded-full", provider.barColorClass)}
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 rounded-lg bg-black p-4">
        <Text
          as="small"
          textColor="gray-80"
          weight="semibold"
          className="uppercase tracking-wide"
        >
          {TCO_CALCULATOR_SECTION.savingsTitle}
        </Text>
        <ul className="m-0 mt-3 flex list-none flex-col gap-2 p-0">
          {TCO_CALCULATOR_PROVIDERS.map((provider) => {
            const savings = breakdown.providerSavings[provider.id];

            return (
              <li key={provider.id}>
                <Text as="small" textColor="primary">
                  vs {provider.label} {formatCurrency(savings.amount)} (
                  {savings.percent}%)
                </Text>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-auto pt-6">
        <LinkComponent
          href={`#${PROVIDER_COMPARISON_SECTION_ID}`}
          className="w-full"
        >
          {TCO_CALCULATOR_SECTION.viewBreakdownCta}
        </LinkComponent>
      </div>
    </div>
  );
};

export default TcoCalculatorSummaryPanel;
