import {
  AI_SUPERCLUSTERS_DURATIONS,
  AI_SUPERCLUSTERS_GPU_TYPES,
  AI_SUPERCLUSTERS_INTERCONNECTS,
  AI_SUPERCLUSTERS_NODES_MAX,
  AI_SUPERCLUSTERS_NODES_MIN,
  AI_SUPERCLUSTERS_NODES_STEP,
  AI_SUPERCLUSTERS_STORAGE_OPTIONS,
} from "../data/configurator.data";
import type { AiSuperclustersConfig } from "../types/ai-superclusters.types";

export function nodesToSlider(nodes: number): number {
  return (
    ((nodes - AI_SUPERCLUSTERS_NODES_MIN) /
      (AI_SUPERCLUSTERS_NODES_MAX - AI_SUPERCLUSTERS_NODES_MIN)) *
    100
  );
}

export function sliderToNodes(slider: number): number {
  const raw =
    AI_SUPERCLUSTERS_NODES_MIN +
    (slider / 100) * (AI_SUPERCLUSTERS_NODES_MAX - AI_SUPERCLUSTERS_NODES_MIN);
  const stepped =
    Math.round(raw / AI_SUPERCLUSTERS_NODES_STEP) * AI_SUPERCLUSTERS_NODES_STEP;

  return Math.min(
    AI_SUPERCLUSTERS_NODES_MAX,
    Math.max(AI_SUPERCLUSTERS_NODES_MIN, stepped),
  );
}

export function getGpuTotal(config: AiSuperclustersConfig): number {
  const gpuType = AI_SUPERCLUSTERS_GPU_TYPES.find((gpu) => gpu.id === config.gpuId);

  return config.nodes * (gpuType?.gpuPerNode ?? 8);
}

export function buildConfigSummary(config: AiSuperclustersConfig): string {
  const gpuType = AI_SUPERCLUSTERS_GPU_TYPES.find((gpu) => gpu.id === config.gpuId);
  const interconnect = AI_SUPERCLUSTERS_INTERCONNECTS.find(
    (option) => option.id === config.interconnectId,
  );
  const storage = AI_SUPERCLUSTERS_STORAGE_OPTIONS.find(
    (option) => option.id === config.storageId,
  );
  const duration = AI_SUPERCLUSTERS_DURATIONS.find(
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
