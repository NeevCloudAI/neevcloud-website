import type { WorkloadCategoryId } from "../types/pricing-calculator.types";

export const PRICE_PER_REQUEST = {
  text: 0.0001,
  vision: 0.0003,
  audio: 0.0002,
  specialized: 0,
} as const;

export const WORKLOAD_CATEGORIES: ReadonlyArray<{
  id: WorkloadCategoryId;
  label: string;
}> = [
  { id: "text", label: "Text" },
  { id: "vision", label: "Vision" },
  { id: "audio", label: "Audio" },
  { id: "specialized", label: "Specialized" },
];
