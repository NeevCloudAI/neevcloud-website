import type {
  GpuCostCalculatorCommitmentId,
  GpuCostCalculatorGpuTypeId,
} from "../types/cost-calculator-section.types";

export const DEFAULT_GPU_TYPE_ID: GpuCostCalculatorGpuTypeId = "1x-h100";
export const DEFAULT_COMMITMENT_ID: GpuCostCalculatorCommitmentId = "on-demand";
export const DEFAULT_HOURS_PER_MONTH = 730;

export const MIN_HOURS_PER_MONTH = 0;
export const MAX_HOURS_PER_MONTH = 730;

export const HOURS_SCALE_LABELS = ["0", "360", "730"] as const;
