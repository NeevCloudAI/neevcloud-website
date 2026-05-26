import type { WorkloadOption } from "@/features/managed-kubernetes/types/deploy-workload-section.types";

export const WORKLOAD_OPTIONS: WorkloadOption[] = [
  { id: "gpu-cluster", label: "Create GPU Cluster" },
  { id: "vllm", label: "Deploy vLLM Inference" },
  { id: "training", label: "Distributed Training Job" },
  { id: "scale", label: "Scale Node Pool" },
];
