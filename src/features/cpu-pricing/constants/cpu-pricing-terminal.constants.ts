import type { CpuPricingFamilyId } from "../types/cpu-pricing-terminal.types";

export const CPU_PRICING_CONFIG_TABLE_HEADERS = [
  "configuration",
  "Price / Hour",
  "Memory",
  "Bandwidth",
  "FP16",
] as const;

export const CPU_PRICING_COMMITMENT_TABLE_HEADERS = [
  "Commitment",
  "Discount",
] as const;

export const CPU_PRICING_ANNUAL_SAVINGS_HEADERS = [
  "On-demand / year",
  "12-month reserved",
  "You save",
] as const;

export const CPU_PRICING_TABLE_CELL_CLASS =
  "px-3 py-2.5 text-left align-top whitespace-nowrap";

export const DEFAULT_CPU_PRICING_FAMILY: CpuPricingFamilyId = "general-purpose";
