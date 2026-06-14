import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import { GPU_COST_CALCULATOR_GPU_TYPES } from "../../data/cost-calculator-section.data";
import type { GpuCostCalculatorGpuTypeId } from "../../types/cost-calculator-section.types";
import { formatRatePerHour } from "../../utils/gpu-cost-calculator-utils";

type GpuCostCalculatorGpuTypeGridProps = {
  activeGpuTypeId: GpuCostCalculatorGpuTypeId;
  onGpuTypeSelect: (id: GpuCostCalculatorGpuTypeId) => void;
};

const GpuCostCalculatorGpuTypeGrid = ({
  activeGpuTypeId,
  onGpuTypeSelect,
}: GpuCostCalculatorGpuTypeGridProps) => {
  return (
    <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0 md:grid-cols-3">
      {GPU_COST_CALCULATOR_GPU_TYPES.map((gpuType) => {
        const isSelected = gpuType.id === activeGpuTypeId;

        return (
          <li key={gpuType.id}>
            <button
              type="button"
              onClick={() => onGpuTypeSelect(gpuType.id)}
              aria-pressed={isSelected}
              className={cn(
                "relative flex h-full w-full flex-col items-start rounded-lg border px-3 py-2.5 text-left transition-colors",
                isSelected
                  ? "border-primary bg-primary-90/6"
                  : "border-gray-01 bg-white hover:border-primary"
              )}
            >
              {gpuType.badge ? (
                <Text
                  as="small"
                  textColor="primary"
                  className="absolute top-2 right-2 rounded bg-primary-90/12 px-1.5 py-0.5"
                >
                  {gpuType.badge}
                </Text>
              ) : null}
              <Text as="h6" weight="semibold" className="mx-0">
                {gpuType.label}
              </Text>
              <Text as="small" textColor="gray-03" className="mt-0.5">
                {formatRatePerHour(gpuType.ratePerHour)}
              </Text>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default GpuCostCalculatorGpuTypeGrid;
