import {
  AI_SUPERCLUSTER_DURATIONS,
  AI_SUPERCLUSTER_GPU_TYPES,
  AI_SUPERCLUSTER_INTERCONNECTS,
  AI_SUPERCLUSTER_NODES_MAX,
  AI_SUPERCLUSTER_NODES_MIN,
  AI_SUPERCLUSTER_NODES_STEP,
  AI_SUPERCLUSTER_STORAGE_OPTIONS,
} from "../data/configurator.data";
import type { AiSuperclusterConfig } from "../types/ai-supercluster.types";

export function nodesToSlider(nodes: number): number {
  return (
    ((nodes - AI_SUPERCLUSTER_NODES_MIN) /
      (AI_SUPERCLUSTER_NODES_MAX - AI_SUPERCLUSTER_NODES_MIN)) *
    100
  );
}

export function sliderToNodes(slider: number): number {
  const raw =
    AI_SUPERCLUSTER_NODES_MIN +
    (slider / 100) * (AI_SUPERCLUSTER_NODES_MAX - AI_SUPERCLUSTER_NODES_MIN);
  const stepped =
    Math.round(raw / AI_SUPERCLUSTER_NODES_STEP) * AI_SUPERCLUSTER_NODES_STEP;

  return Math.min(
    AI_SUPERCLUSTER_NODES_MAX,
    Math.max(AI_SUPERCLUSTER_NODES_MIN, stepped),
  );
}

export function getGpuTotal(config: AiSuperclusterConfig): number {
  const gpuType = AI_SUPERCLUSTER_GPU_TYPES.find((gpu) => gpu.id === config.gpuId);

  return config.nodes * (gpuType?.gpuPerNode ?? 8);
}

export function buildConfigSummary(config: AiSuperclusterConfig): string {
  const gpuType = AI_SUPERCLUSTER_GPU_TYPES.find((gpu) => gpu.id === config.gpuId);
  const interconnect = AI_SUPERCLUSTER_INTERCONNECTS.find(
    (option) => option.id === config.interconnectId,
  );
  const storage = AI_SUPERCLUSTER_STORAGE_OPTIONS.find(
    (option) => option.id === config.storageId,
  );
  const duration = AI_SUPERCLUSTER_DURATIONS.find(
    (option) => option.id === config.durationId,
  );

  return [
    gpuType?.label,
    `${config.nodes} nodes`,
    `${getGpuTotal(config)} GPUs`,
    interconnect?.label,
    storage?.label,
    duration?.label,
  ]
    .filter(Boolean)
    .join(" · ");
}
