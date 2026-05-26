export type WorkloadOptionId =
  | "gpu-cluster"
  | "vllm"
  | "training"
  | "scale";

export type WorkloadOption = {
  id: WorkloadOptionId;
  label: string;
};
