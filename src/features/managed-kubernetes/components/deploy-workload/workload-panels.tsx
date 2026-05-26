import GpuClusterWorkloadContent from "./GpuClusterWorkloadContent";
import ScaleWorkloadContent from "./ScaleWorkloadContent";
import TrainingWorkloadContent from "./TrainingWorkloadContent";
import VllmWorkloadContent from "./VllmWorkloadContent";

export const WORKLOAD_PANELS = [
  GpuClusterWorkloadContent,
  VllmWorkloadContent,
  TrainingWorkloadContent,
  ScaleWorkloadContent,
] as const;
