import GpuClusterWorkloadContent from "@/features/managed-kubernetes/components/deploy-workload/GpuClusterWorkloadContent";
import ScaleWorkloadContent from "@/features/managed-kubernetes/components/deploy-workload/ScaleWorkloadContent";
import TrainingWorkloadContent from "@/features/managed-kubernetes/components/deploy-workload/TrainingWorkloadContent";
import VllmWorkloadContent from "@/features/managed-kubernetes/components/deploy-workload/VllmWorkloadContent";

export const WORKLOAD_PANELS = [
  GpuClusterWorkloadContent,
  VllmWorkloadContent,
  TrainingWorkloadContent,
  ScaleWorkloadContent,
] as const;
