"use client";

import { type CSSProperties, useMemo, useState } from "react";
import {
  DEFAULT_MIX,
  DEFAULT_REQUESTS,
  REQUEST_SCALE_LABELS,
  WORKLOAD_CATEGORIES,
  type WorkloadCategoryId,
} from "@/features/model-api/data/pricing-calculator-data";
import {
  calculateCategoryCost,
  calculateMonthlyCost,
  formatCurrency,
  formatRequests,
  requestsToSlider,
  sliderToRequests,
  updateWorkloadMix,
} from "@/features/model-api/utils/pricing-calculator-utils";
import { cn } from "@/lib/utils";
import { Button, Divider, Text } from "@/shared/ui-lib";

type CalculatorSliderProps = {
  value: number;
  onChange: (value: number) => void;
  variant?: "primary" | "neutral";
  ariaLabel: string;
};

function CalculatorSlider({
  value,
  onChange,
  variant = "primary",
  ariaLabel,
}: CalculatorSliderProps) {
  return (
    <input
      type="range"
      min={0}
      max={100}
      step={1}
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      style={{ "--slider-progress": `${value}%` } as CSSProperties}
      className={cn(
        "pricing-calculator-slider w-full",
        variant === "primary"
          ? "pricing-calculator-slider--primary"
          : "pricing-calculator-slider--neutral"
      )}
    />
  );
}

type WorkloadMixRowProps = {
  label: string;
  percentage: number;
  cost: number;
  onChange: (value: number) => void;
};

function WorkloadMixRow({
  label,
  percentage,
  cost,
  onChange,
}: WorkloadMixRowProps) {
  return (
    <div className="grid grid-cols-[3.5rem_minmax(0,1fr)_2.5rem_3rem] items-center gap-x-3 md:grid-cols-[5rem_minmax(0,1fr)_3rem_3.5rem]">
      <Text textColor="gray-90">{label}</Text>
      <CalculatorSlider
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
}

const PricingCalculator = () => {
  const [totalRequests, setTotalRequests] = useState(DEFAULT_REQUESTS);
  const [mix, setMix] = useState(DEFAULT_MIX);

  const requestSlider = requestsToSlider(totalRequests);
  const formattedRequests = formatRequests(totalRequests);
  const monthlyCost = useMemo(
    () => calculateMonthlyCost(totalRequests, mix),
    [totalRequests, mix]
  );

  const categoryCosts = useMemo(
    () =>
      WORKLOAD_CATEGORIES.reduce(
        (acc, { id }) => {
          acc[id] = calculateCategoryCost(totalRequests, mix[id], id);
          return acc;
        },
        {} as Record<WorkloadCategoryId, number>
      ),
    [totalRequests, mix]
  );

  const handleMixChange = (category: WorkloadCategoryId, value: number) => {
    setMix((current) => updateWorkloadMix(current, category, value));
  };

  return (
    <div className="pricing-calculator flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Text as="small" textColor="gray-85" className="mx-0 uppercase">
            live estimate
          </Text>
          <Text as="h5" weight="semibold" className="mx-0 mt-0.5">
            Monthly cost
          </Text>
        </div>
        <div className="text-right">
          <Text as="h2" weight="bold" className="mx-0 leading-none">
            {formatCurrency(monthlyCost)}
          </Text>
          <Text as="small" textColor="gray-85" className="mt-1">
            / month at current mix
          </Text>
        </div>
      </div>

      <Divider orientation="horizontal" className="my-4" />

      <div>
        <div className="mb-3 flex items-center justify-between gap-4">
          <Text as="h6" textColor="gray-75" className="mx-0">
            Total monthly requests
          </Text>
          <Text as="h6">{formattedRequests}</Text>
        </div>
        <CalculatorSlider
          value={requestSlider}
          onChange={(value) => setTotalRequests(sliderToRequests(value))}
          ariaLabel="Total monthly requests"
        />
        <div className="mt-2 flex justify-between gap-2">
          {REQUEST_SCALE_LABELS.map((label) => (
            <Text key={label} as="small" textColor="gray-85">
              {label}
            </Text>
          ))}
        </div>
      </div>

      <Divider orientation="horizontal" className="my-4" />

      <div className="flex flex-1 flex-col">
        <div className="mb-4 flex items-center justify-between gap-4">
          <Text as="small" textColor="gray-85">
            Workload mix
          </Text>
          <Text as="small" textColor="gray-85">
            % of {formattedRequests} requests
          </Text>
        </div>

        <div className="flex flex-col gap-4 md:gap-5">
          {WORKLOAD_CATEGORIES.map(({ id, label }) => (
            <WorkloadMixRow
              key={id}
              label={label}
              percentage={mix[id]}
              cost={categoryCosts[id]}
              onChange={(value) => handleMixChange(id, value)}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-end md:mt-8">
          <Button className="w-full sm:w-auto">
            Start with 10,000 free requests
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
