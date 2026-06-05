import type { AiInferenceModelFamilyId } from "../types/transparent-pricing-section.types";

export const AI_INFERENCE_TRANSPARENT_PRICING_TABLE_CELL_CLASS =
  "px-3 py-2.5 text-left align-middle whitespace-nowrap font-space-mono";

export const DEFAULT_AI_INFERENCE_MODEL_FAMILY: AiInferenceModelFamilyId =
  "popular-llms";

export const AI_INFERENCE_FAMILY_CONFIGURATION = {
  titleName: "compute optimized instances",
  subtitle: "// High vCPU density : 8c/8GB to 64c/64GB",
} as const;
