import type { ProviderComparisonTableHeader } from "../types/provider-comparison-section.types";

export const PROVIDER_COMPARISON_TABLE_HEADERS: readonly ProviderComparisonTableHeader[] =
  [
    { id: "provider", name: "Provider" },
    { id: "gpu-compute", name: "GPU Compute" },
    { id: "storage", name: "Storage" },
    { id: "data-transfer", name: "Data Transfer" },
    { id: "inference-api", name: "Inference API" },
    { id: "total", name: "Total / Month" },
  ] as const;

export const PROVIDER_COMPARISON_TABLE_CELL_CLASS =
  "px-8.75 py-3.75 text-left align-middle whitespace-nowrap";
