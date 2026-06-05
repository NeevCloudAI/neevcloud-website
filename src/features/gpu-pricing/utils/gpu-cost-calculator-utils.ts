import {
  MAX_HOURS_PER_MONTH,
  MIN_HOURS_PER_MONTH,
} from "../constants/cost-calculator-section.constants";
import {
  GPU_COST_CALCULATOR_COMMITMENT_BY_ID,
  GPU_COST_CALCULATOR_GPU_TYPE_BY_ID,
} from "../data/cost-calculator-section.data";
import type {
  GpuCostCalculatorBreakdown,
  GpuCostCalculatorCommitmentId,
  GpuCostCalculatorGpuTypeId,
} from "../types/cost-calculator-section.types";

export function formatCurrency(value: number): string {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export function formatRatePerHour(value: number): string {
  return `₹${value.toLocaleString("en-IN", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })}/hr`;
}

export function hoursToSlider(hours: number): number {
  const range = MAX_HOURS_PER_MONTH - MIN_HOURS_PER_MONTH;
  if (range === 0) {
    return 0;
  }

  return ((hours - MIN_HOURS_PER_MONTH) / range) * 100;
}

export function sliderToHours(sliderValue: number): number {
  const range = MAX_HOURS_PER_MONTH - MIN_HOURS_PER_MONTH;
  return Math.round(MIN_HOURS_PER_MONTH + (sliderValue / 100) * range);
}

export function formatUsageHours(hours: number): string {
  if (hours >= MAX_HOURS_PER_MONTH) {
    return `${hours} · 24/7`;
  }

  return String(hours);
}

export function getCommitmentStatusLabel(
  commitmentId: GpuCostCalculatorCommitmentId,
): string {
  if (commitmentId === "on-demand") {
    return "no commitment";
  }

  return GPU_COST_CALCULATOR_COMMITMENT_BY_ID[commitmentId].label;
}

export function calculateGpuCostBreakdown({
  gpuTypeId,
  hoursPerMonth,
  commitmentId,
}: {
  gpuTypeId: GpuCostCalculatorGpuTypeId;
  hoursPerMonth: number;
  commitmentId: GpuCostCalculatorCommitmentId;
}): GpuCostCalculatorBreakdown {
  const gpuType = GPU_COST_CALCULATOR_GPU_TYPE_BY_ID[gpuTypeId];
  const commitment = GPU_COST_CALCULATOR_COMMITMENT_BY_ID[commitmentId];
  const subtotal = gpuType.ratePerHour * hoursPerMonth;
  const discountAmount = subtotal * (commitment.discountPercent / 100);
  const monthlyCost = subtotal - discountAmount;
  const annualizedCost = monthlyCost * 12;

  const commitmentLabel =
    commitment.id === "on-demand"
      ? "On-demand"
      : `${commitment.label} (-${commitment.discountPercent}%)`;

  return {
    monthlyCost,
    annualizedCost,
    subtotal,
    discountAmount,
    summaryLabel: `${gpuType.label} · ${hoursPerMonth} hrs/mo · ${commitmentLabel}`,
    commitmentLabel,
  };
}
