export const GPU_OTHER_GPUS_SECTION_TITLE = "Other GPU's Available";

export const GPU_OTHER_GPUS_KNOW_MORE_LABEL = "Know More";

export const GPU_OTHER_GPUS_ICON = "/icons/nvidia.svg";

export const GPU_FLIP_CHART_MAX_MULTIPLIER = 5;

export const GPU_FLIP_PIXELS_PER_UNIT = 25;

export const GPU_FLIP_BASELINE = {
  cardName: "A100",
} as const;

export const GPU_OTHER_GPUS_FLIP_CHART_CONFIG_BY_PAGE = {
  "nvidia-a100": {
    upToReferenceMultiplierLabel: "2x",
    upToMinRatio: 1.4,
  },
  "nvidia-a30": {
    upToReferenceMultiplierLabel: "2x",
    upToMinRatio: 1,
  },
  "nvidia-b200": {
    upToReferenceMultiplierLabel: "2x",
    upToMinRatio: 1,
  },
  "nvidia-b300": {
    upToReferenceMultiplierLabel: "2x",
    upToMinRatio: 1,
  },
  "nvidia-h100": {
    upToReferenceMultiplierLabel: "2x",
    upToMinRatio: 1,
  },
  "nvidia-h200": {
    upToReferenceMultiplierLabel: "2x",
    upToMinRatio: 1,
  },
  "nvidia-rtx-3090": {
    upToReferenceMultiplierLabel: "2x",
    upToMinRatio: 1,
  },
  "nvidia-rtx-5090": {
    upToReferenceMultiplierLabel: "2x",
    upToMinRatio: 1,
  },
  "nvidia-a6000": {
    upToReferenceMultiplierLabel: "2x",
    upToMinRatio: 1,
  },
  "nvidia-a6000se": {
    upToReferenceMultiplierLabel: "2x",
    upToMinRatio: 1,
  },
  "nvidia-teslat4": {
    upToReferenceMultiplierLabel: "2x",
    upToMinRatio: 1,
  },
  "nvidia-nvl72": {
    upToReferenceMultiplierLabel: "2x",
    upToMinRatio: 1,
  },
} as const;

export const GPU_OTHER_GPUS_DEFAULT_FLIP_CHART_CONFIG =
  GPU_OTHER_GPUS_FLIP_CHART_CONFIG_BY_PAGE["nvidia-a100"];
