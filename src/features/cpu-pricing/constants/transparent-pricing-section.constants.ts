import type {
  CpuInstanceTypeId,
  CpuOsType,
} from "../types/transparent-pricing-section.types";

export const CPU_TRANSPARENT_PRICING_TABLE_HEADERS = [
  "Instance",
  "vCPUs",
  "RAM",
  "Storage",
] as const;

export const CPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS =
  "px-3 py-2.5 text-left align-middle whitespace-nowrap font-space-mono";

export const DEFAULT_CPU_INSTANCE_TYPE: CpuInstanceTypeId = "general-purpose";

export const DEFAULT_CPU_OS_TYPE: CpuOsType = "linux";
