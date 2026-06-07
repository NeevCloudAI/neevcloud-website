import type { GpuModelFamilyId } from "../types/model-transparent-pricing-section.types";

export const GPU_MODEL_CONFIGURATION_TABLE_HEADERS = [
  "configuration",
  "Price / Hour",
  "Memory",
  "Bandwidth",
  "FP16",
] as const;

export const GPU_MODEL_COMMITMENT_TABLE_HEADERS = [
  "Commitment",
  "Discount",
  "Example (8x H100)",
] as const;

export const GPU_MODEL_ANNUAL_SAVINGS_HEADERS = [
  "On-demand / year",
  "12-month reserved",
  "You save",
] as const;

export const GPU_MODEL_PRICING_TABLE_CELL_CLASS =
  "px-3 py-2.5 text-left align-middle whitespace-nowrap font-space-mono";

export const DEFAULT_GPU_MODEL_FAMILY: GpuModelFamilyId = "h100";
