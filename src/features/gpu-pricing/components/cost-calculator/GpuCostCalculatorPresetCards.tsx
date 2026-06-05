import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import { GPU_COST_CALCULATOR_PRESETS } from "../../data/cost-calculator-section.data";
import type {
  GpuCostCalculatorCommitmentId,
  GpuCostCalculatorGpuTypeId,
} from "../../types/cost-calculator-section.types";
import {
  calculateGpuCostBreakdown,
  formatCurrency,
} from "../../utils/gpu-cost-calculator-utils";

type GpuCostCalculatorPresetCardsProps = {
  activePresetId: string | null;
  onPresetSelect: (config: {
    presetId: string;
    gpuTypeId: GpuCostCalculatorGpuTypeId;
    hoursPerMonth: number;
    commitmentId: GpuCostCalculatorCommitmentId;
  }) => void;
};

const GpuCostCalculatorPresetCards = ({
  activePresetId,
  onPresetSelect,
}: GpuCostCalculatorPresetCardsProps) => {
  return (
    <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 xl:grid-cols-4">
      {GPU_COST_CALCULATOR_PRESETS.map((preset) => {
        const breakdown = calculateGpuCostBreakdown({
          gpuTypeId: preset.gpuTypeId,
          hoursPerMonth: preset.hoursPerMonth,
          commitmentId: preset.commitmentId,
        });
        const isActive = activePresetId === preset.id;

        return (
          <li key={preset.id}>
            <button
              type="button"
              onClick={() =>
                onPresetSelect({
                  presetId: preset.id,
                  gpuTypeId: preset.gpuTypeId,
                  hoursPerMonth: preset.hoursPerMonth,
                  commitmentId: preset.commitmentId,
                })
              }
              aria-pressed={isActive}
              className={cn(
                "flex h-full w-full flex-col rounded-lg border bg-white p-4 text-left transition-colors",
                isActive
                  ? "border-primary bg-primary-5"
                  : "border-gray-60 hover:border-primary-50",
              )}
            >
              <Text as="small" textColor="gray-85" weight="semibold">
                {preset.title}
              </Text>
              <Text as="small" textColor="gray-85" className="mt-0.5">
                {preset.subtitle}
              </Text>
              <Text as="h5" weight="semibold" className="mt-3">
                {formatCurrency(breakdown.monthlyCost)}
                <Text as="span" variant="small" textColor="gray-85">
                  /mo
                </Text>
              </Text>
              <Text as="small" textColor="gray-85" className="mt-1">
                {breakdown.summaryLabel}
              </Text>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default GpuCostCalculatorPresetCards;
