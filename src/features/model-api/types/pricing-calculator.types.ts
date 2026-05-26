export type WorkloadCategoryId = "text" | "vision" | "audio" | "specialized";

export type WorkloadMix = Record<WorkloadCategoryId, number>;
