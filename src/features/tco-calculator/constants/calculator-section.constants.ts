import type {
  TcoCalculatorCommitmentId,
  TcoCalculatorGpuTypeId,
} from "../types/calculator-section.types";

export const DEFAULT_GPU_TYPE_ID: TcoCalculatorGpuTypeId = "h100";
export const DEFAULT_COMMITMENT_ID: TcoCalculatorCommitmentId = "on-demand";
export const DEFAULT_GPU_COUNT = 8;
export const DEFAULT_HOURS_PER_MONTH = 730;
export const DEFAULT_NETWORK_STORAGE_GB = 5000;

export const GPU_COUNT_MIN = 1;
export const GPU_COUNT_MAX = 64;
export const HOURS_MIN = 50;
export const HOURS_MAX = 744;
export const NETWORK_STORAGE_MAX_GB = 51_200;

export const PROVIDER_COMPARISON_SECTION_ID = "provider-comparison-section";
