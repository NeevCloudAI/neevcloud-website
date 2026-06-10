"use client";

import { useMemo, useState } from "react";
import PricingCalculatorCostSummary from "./PricingCalculatorCostSummary";
import PricingCalculatorSlider from "./PricingCalculatorSlider";
import PricingCalculatorWorkloadMixRow from "./PricingCalculatorWorkloadMixRow";
import {
  DEFAULT_MIX,
  DEFAULT_REQUESTS,
  REQUEST_SCALE_LABELS,
} from "../../constants/pricing-calculator.constants";
import { WORKLOAD_CATEGORIES } from "../../data/pricing-calculator.data";
import type { WorkloadCategoryId } from "../../types/pricing-calculator.types";
import {
  calculateCategoryCost,
  calculateMonthlyCost,
  formatRequests,
  requestsToSlider,
  sliderToRequests,
  updateWorkloadMix,
} from "../../utils/pricing-calculator-utils";
import { Button, Divider, Text } from "@/shared/ui-lib";
import LinkComponent from "@/shared/ui-lib/link";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

const PricingCalculatorClient = () => {
  const [totalRequests, setTotalRequests] = useState(DEFAULT_REQUESTS);
  const [mix, setMix] = useState(DEFAULT_MIX);

  const requestSlider = requestsToSlider(totalRequests);
  const formattedRequests = formatRequests(totalRequests);
  const monthlyCost = useMemo(
    () => calculateMonthlyCost(totalRequests, mix),
    [totalRequests, mix],
  );

  const categoryCosts = useMemo(
    () =>
      WORKLOAD_CATEGORIES.reduce(
        (acc, { id }) => {
          acc[id] = calculateCategoryCost(totalRequests, mix[id], id);
          return acc;
        },
        {} as Record<WorkloadCategoryId, number>,
      ),
    [totalRequests, mix],
  );

  const handleMixChange = (category: WorkloadCategoryId, value: number) => {
    setMix((current) => updateWorkloadMix(current, category, value));
  };

  return (
    <div className="pricing-calculator flex h-full flex-col">
      <PricingCalculatorCostSummary monthlyCost={monthlyCost} />

      <Divider orientation="horizontal" className="my-5" />

      <div>
        <div className="flex items-center justify-between gap-4">
          <Text as="h6" textColor="gray-75" className="mx-0">
            Total monthly requests
          </Text>
          <Text as="h6">{formattedRequests}</Text>
        </div>
        <PricingCalculatorSlider
          value={requestSlider}
          onChange={(value) => setTotalRequests(sliderToRequests(value))}
          ariaLabel="Total monthly requests"
        />
        <div className="mt-3 flex justify-between gap-2">
          {REQUEST_SCALE_LABELS.map((label) => (
            <Text key={label} as="small" textColor="gray-85">
              {label}
            </Text>
          ))}
        </div>
      </div>

      <Divider orientation="horizontal" className="my-5" />

      <div className="flex flex-1 flex-col mt-5">
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
            <PricingCalculatorWorkloadMixRow
              key={id}
              label={label}
              percentage={mix[id]}
              cost={categoryCosts[id]}
              onChange={(value) => handleMixChange(id, value)}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-end md:mt-8">
          <LinkComponent
            href={EXTERNAL_LINKS.aiInferencePlayground}
            target="_blank"
          >
            Start with 10,000 free requests
          </LinkComponent>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculatorClient;
