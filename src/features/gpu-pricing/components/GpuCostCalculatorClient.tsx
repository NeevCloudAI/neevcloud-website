"use client";

import { useCallback, useMemo, useState } from "react";
import PricingCalculatorSlider from "@/features/model-api/components/pricing/PricingCalculatorSlider";
import { Divider, Text } from "@/shared/ui-lib";
import GpuCostCalculatorGpuTypeGrid from "./cost-calculator/GpuCostCalculatorGpuTypeGrid";
import GpuCostCalculatorPresetCards from "./cost-calculator/GpuCostCalculatorPresetCards";
import GpuCostCalculatorSummaryPanel from "./cost-calculator/GpuCostCalculatorSummaryPanel";
import {
  DEFAULT_COMMITMENT_ID,
  DEFAULT_GPU_TYPE_ID,
  DEFAULT_HOURS_PER_MONTH,
  HOURS_SCALE_LABELS,
} from "../constants/cost-calculator-section.constants";
import {
  GPU_COST_CALCULATOR_COMMITMENTS,
  GPU_COST_CALCULATOR_GPU_TYPE_BY_ID,
  GPU_COST_CALCULATOR_SECTION,
} from "../data/cost-calculator-section.data";
import type {
  GpuCostCalculatorCommitmentId,
  GpuCostCalculatorGpuTypeId,
} from "../types/cost-calculator-section.types";
import {
  calculateGpuCostBreakdown,
  formatUsageHours,
  getCommitmentStatusLabel,
  hoursToSlider,
  sliderToHours,
} from "../utils/gpu-cost-calculator-utils";
import { cn } from "@/lib/utils";

const GpuCostCalculatorClient = () => {
  const [gpuTypeId, setGpuTypeId] =
    useState<GpuCostCalculatorGpuTypeId>(DEFAULT_GPU_TYPE_ID);
  const [hoursPerMonth, setHoursPerMonth] = useState(DEFAULT_HOURS_PER_MONTH);
  const [commitmentId, setCommitmentId] =
    useState<GpuCostCalculatorCommitmentId>(DEFAULT_COMMITMENT_ID);
  const [activePresetId, setActivePresetId] = useState<string | null>(null);

  const hoursSlider = hoursToSlider(hoursPerMonth);
  const gpuType = GPU_COST_CALCULATOR_GPU_TYPE_BY_ID[gpuTypeId];

  const breakdown = useMemo(
    () =>
      calculateGpuCostBreakdown({
        gpuTypeId,
        hoursPerMonth,
        commitmentId,
      }),
    [gpuTypeId, hoursPerMonth, commitmentId]
  );

  const handleGpuTypeSelect = useCallback((id: GpuCostCalculatorGpuTypeId) => {
    setGpuTypeId(id);
    setActivePresetId(null);
  }, []);

  const handleHoursChange = useCallback((sliderValue: number) => {
    setHoursPerMonth(sliderToHours(sliderValue));
    setActivePresetId(null);
  }, []);

  const handleCommitmentSelect = useCallback(
    (id: GpuCostCalculatorCommitmentId) => {
      setCommitmentId(id);
      setActivePresetId(null);
    },
    []
  );

  const handlePresetSelect = useCallback(
    (config: {
      presetId: string;
      gpuTypeId: GpuCostCalculatorGpuTypeId;
      hoursPerMonth: number;
      commitmentId: GpuCostCalculatorCommitmentId;
    }) => {
      setGpuTypeId(config.gpuTypeId);
      setHoursPerMonth(config.hoursPerMonth);
      setCommitmentId(config.commitmentId);
      setActivePresetId(config.presetId);
    },
    []
  );

  return (
    <div className="pricing-calculator w-full">
      <div className="rounded-xl border border-gray-01 bg-white shadow-sm">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1 flex-col p-4 md:p-6 lg:p-8">
            <Text as="small" textColor="gray-03" weight="semibold">
              {GPU_COST_CALCULATOR_SECTION.configureLabel}
            </Text>
            <Text as="h5" weight="semibold" className="mt-3">
              {GPU_COST_CALCULATOR_SECTION.configureTitle}
            </Text>
            <Text as="h6" textColor="gray-03" className="mt-1">
              {GPU_COST_CALCULATOR_SECTION.configureSubtitle}
            </Text>

            <Divider orientation="horizontal" className="my-5" />

            <Text
              as="small"
              textColor="gray-03"
              weight="semibold"
              className="uppercase tracking-wide"
            >
              {GPU_COST_CALCULATOR_SECTION.gpuTypeLabel}
            </Text>
            <div className="mt-3">
              <GpuCostCalculatorGpuTypeGrid
                activeGpuTypeId={gpuTypeId}
                onGpuTypeSelect={handleGpuTypeSelect}
              />
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between gap-4">
                <Text
                  as="small"
                  textColor="gray-03"
                  weight="semibold"
                  className="uppercase tracking-wide"
                  id="gpu-cost-calculator-hours-label"
                >
                  {GPU_COST_CALCULATOR_SECTION.usageLabel}
                </Text>
                <Text as="h6" textColor="primary" aria-live="polite">
                  {hoursPerMonth}
                </Text>
              </div>
              <div className="mt-3">
                <PricingCalculatorSlider
                  value={hoursSlider}
                  onChange={handleHoursChange}
                  ariaLabel="Hours per month"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-2">
                {HOURS_SCALE_LABELS.map((label) => (
                  <Text key={label} as="small" textColor="gray-03">
                    {label}
                  </Text>
                ))}
                <Text as="small" textColor="gray-03">
                  {formatUsageHours(hoursPerMonth)}
                </Text>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between gap-4">
                <Text
                  as="small"
                  textColor="gray-03"
                  weight="semibold"
                  className="uppercase tracking-wide"
                >
                  {GPU_COST_CALCULATOR_SECTION.commitmentLabel}
                </Text>
                <Text as="small" textColor="gray-03">
                  {getCommitmentStatusLabel(commitmentId)}
                </Text>
              </div>
              <div
                className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4"
                role="group"
                aria-label="Commitment level"
              >
                {GPU_COST_CALCULATOR_COMMITMENTS.map((commitment) => {
                  const isSelected = commitment.id === commitmentId;

                  return (
                    <button
                      key={commitment.id}
                      type="button"
                      onClick={() => handleCommitmentSelect(commitment.id)}
                      aria-pressed={isSelected}
                      className={cn(
                        "rounded-lg border px-3 py-2.5 text-left transition-colors",
                        isSelected
                          ? "border-primary bg-primary text-white"
                          : "border-gray-01 bg-white hover:border-primary"
                      )}
                    >
                      <Text
                        as="small"
                        weight="semibold"
                        textColor={isSelected ? "white" : "black"}
                      >
                        {commitment.label}
                      </Text>
                      <Text
                        as="small"
                        textColor={isSelected ? "white" : "gray-03"}
                        className="mt-0.5 block"
                      >
                        (-{commitment.discountPercent}%)
                      </Text>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full border-t border-gray-01 p-4 md:p-6 lg:w-[38%] lg:border-t-0 lg:border-l">
            <GpuCostCalculatorSummaryPanel
              breakdown={breakdown}
              ratePerHour={gpuType.ratePerHour}
              hoursPerMonth={hoursPerMonth}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-6">
        <GpuCostCalculatorPresetCards
          activePresetId={activePresetId}
          onPresetSelect={handlePresetSelect}
        />
      </div>
    </div>
  );
};

export default GpuCostCalculatorClient;
