"use client";

import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import { TCO_CALCULATOR_GPU_TYPES } from "../../data/calculator-section.data";
import type { TcoCalculatorGpuTypeId } from "../../types/calculator-section.types";
import { formatRatePerHour } from "../../utils/tco-calculator-utils";

type TcoCalculatorGpuTypeGridProps = {
  activeGpuTypeId: TcoCalculatorGpuTypeId;
  onGpuTypeSelect: (id: TcoCalculatorGpuTypeId) => void;
};

const TcoCalculatorGpuTypeGrid = ({
  activeGpuTypeId,
  onGpuTypeSelect,
}: TcoCalculatorGpuTypeGridProps) => {
  return (
    <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0 md:grid-cols-3">
      {TCO_CALCULATOR_GPU_TYPES.map((gpuType) => {
        const isSelected = gpuType.id === activeGpuTypeId;

        return (
          <li key={gpuType.id}>
            <button
              type="button"
              onClick={() => onGpuTypeSelect(gpuType.id)}
              aria-pressed={isSelected}
              className={cn(
                "flex h-full w-full flex-col items-start rounded-lg border px-3 py-2.5 text-left transition-colors",
                isSelected
                  ? "border-primary bg-primary-90/6"
                  : "border-white/12 bg-white/6 hover:border-primary",
              )}
            >
              <Text
                as="h6"
                weight="semibold"
                textColor={isSelected ? "white" : "white"}
              >
                {gpuType.label}
              </Text>
              <Text as="small" textColor="gray-80" className="mt-0.5">
                {gpuType.memory}
              </Text>
              <Text as="small" textColor="primary" className="mt-1">
                {formatRatePerHour(gpuType.ratePerHour)}
              </Text>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TcoCalculatorGpuTypeGrid;
