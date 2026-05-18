export const PRICE_PER_REQUEST = {
  text: 0.0001,
  vision: 0.0003,
  audio: 0.0002,
  specialized: 0,
} as const;

export type WorkloadCategoryId = keyof typeof PRICE_PER_REQUEST;

export type WorkloadMix = Record<WorkloadCategoryId, number>;

export const WORKLOAD_CATEGORIES: ReadonlyArray<{
  id: WorkloadCategoryId;
  label: string;
}> = [
  { id: "text", label: "Text" },
  { id: "vision", label: "Vision" },
  { id: "audio", label: "Audio" },
  { id: "specialized", label: "Specialized" },
];

export const REQUEST_SCALE_LABELS = ["10K", "100K", "1M", "10M", "50M"] as const;

export const MIN_REQUESTS = 10_000;
export const MAX_REQUESTS = 50_000_000;
export const DEFAULT_REQUESTS = 2_000_000;

export const DEFAULT_MIX: WorkloadMix = {
  text: 70,
  vision: 20,
  audio: 10,
  specialized: 0,
};
