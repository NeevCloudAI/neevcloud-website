import type { WorkloadMix } from "@/features/model-api/types/pricing-calculator.types";

export const MIN_REQUESTS = 10_000;
export const MAX_REQUESTS = 50_000_000;
export const DEFAULT_REQUESTS = 2_000_000;

export const REQUEST_SCALE_LABELS = [
  "10K",
  "100K",
  "1M",
  "10M",
  "50M",
] as const;

export const DEFAULT_MIX: WorkloadMix = {
  text: 70,
  vision: 20,
  audio: 10,
  specialized: 0,
};
