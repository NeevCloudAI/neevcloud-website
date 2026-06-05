import type { GpuInstanceFamilyId } from "../types/transparent-pricing-section.types";

export const GPU_TRANSPARENT_PRICING_TABLE_HEADERS = [
  "GPU Type",
  "Memory",
  "Pricing/hour",
  "Typical Workload",
] as const;

export const GPU_TRANSPARENT_PRICING_TABLE_CELL_CLASS =
  "px-3 py-2.5 text-left align-middle whitespace-nowrap font-space-mono";

export const DEFAULT_GPU_INSTANCE_FAMILY: GpuInstanceFamilyId = "single-gpu";
