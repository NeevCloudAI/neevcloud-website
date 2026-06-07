import {
  GPU_FLIP_BASELINE,
  GPU_FLIP_PIXELS_PER_UNIT,
  GPU_OTHER_GPUS_DEFAULT_FLIP_CHART_CONFIG,
} from "@/shared/constants/gpu-other-gpus-section.constants";
import type {
  GpuFlipChartConfig,
  GpuFlipChartDetails,
  GpuFlipDetailsInput,
} from "@/shared/types/gpu-other-gpus-section.types";

export function parseMultiplierLabel(label: string): number {
  return Number.parseFloat(label.replace(/x$/i, ""));
}

export function multiplierToHeight(multiplierLabel: string): number {
  return parseMultiplierLabel(multiplierLabel) * GPU_FLIP_PIXELS_PER_UNIT;
}

function formatUpToMultiplierLabel(ratio: number): string {
  const rounded = Math.round(ratio * 10) / 10;
  const value = Number.isInteger(rounded)
    ? rounded.toString()
    : rounded.toFixed(1);

  return `Up to ${value}x`;
}

function buildUpToLabel(
  input: GpuFlipDetailsInput,
  config: GpuFlipChartConfig = GPU_OTHER_GPUS_DEFAULT_FLIP_CHART_CONFIG
): string | undefined {
  const ratio =
    parseMultiplierLabel(input.comparisonMultiplierLabel) /
    parseMultiplierLabel(config.upToReferenceMultiplierLabel);

  if (ratio < config.upToMinRatio) {
    return undefined;
  }

  return formatUpToMultiplierLabel(ratio);
}

export function buildGpuFlipChartDetails(
  input: GpuFlipDetailsInput,
  config: GpuFlipChartConfig = GPU_OTHER_GPUS_DEFAULT_FLIP_CHART_CONFIG
): GpuFlipChartDetails {
  const card1Height = multiplierToHeight(input.baselineMultiplierLabel);
  const card2Height = multiplierToHeight(input.comparisonMultiplierLabel);

  return {
    linePosition: card2Height,
    card1: {
      cardName: input.baselineCardName ?? GPU_FLIP_BASELINE.cardName,
      label: input.baselineMultiplierLabel,
      height: card1Height,
      upToLabel: buildUpToLabel(input, config),
    },
    card2: {
      cardName: input.comparisonCardName,
      label: input.comparisonMultiplierLabel,
      height: card2Height,
    },
  };
}
