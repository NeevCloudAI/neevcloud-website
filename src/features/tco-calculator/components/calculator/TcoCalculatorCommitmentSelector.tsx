"use client";

import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import { TCO_CALCULATOR_COMMITMENTS } from "../../data/calculator-section.data";
import type { TcoCalculatorCommitmentId } from "../../types/calculator-section.types";

type TcoCalculatorCommitmentSelectorProps = {
  activeCommitmentId: TcoCalculatorCommitmentId;
  onCommitmentSelect: (id: TcoCalculatorCommitmentId) => void;
};

const TcoCalculatorCommitmentSelector = ({
  activeCommitmentId,
  onCommitmentSelect,
}: TcoCalculatorCommitmentSelectorProps) => {
  return (
    <div
      className="grid grid-cols-2 gap-2 md:grid-cols-4"
      role="group"
      aria-label="Commitment period"
    >
      {TCO_CALCULATOR_COMMITMENTS.map((commitment) => {
        const isSelected = commitment.id === activeCommitmentId;

        return (
          <button
            key={commitment.id}
            type="button"
            onClick={() => onCommitmentSelect(commitment.id)}
            aria-pressed={isSelected}
            className={cn(
              "rounded-lg border px-3 py-2.5 text-left transition-colors",
              isSelected
                ? "border-primary bg-primary text-white"
                : "border-white-10 bg-white-5 hover:border-primary-50",
            )}
          >
            <Text
              as="small"
              weight="semibold"
              textColor={isSelected ? "white" : "white"}
            >
              {commitment.label}
            </Text>
            <Text
              as="small"
              textColor={isSelected ? "white" : "gray-80"}
              className="mt-0.5 block"
            >
              {commitment.discountLabel}
            </Text>
          </button>
        );
      })}
    </div>
  );
};

export default TcoCalculatorCommitmentSelector;
