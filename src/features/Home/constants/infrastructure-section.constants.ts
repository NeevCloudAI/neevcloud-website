export const INFRASTRUCTURE_GPU_SPEC_BADGES = [
  "180GB vRAM",
  "283GB RAM",
  "28 vCPUs",
] as const;

export const INFRASTRUCTURE_GPU_AVAILABILITY_ROWS = [
  { id: "gpu-availability-b200", modelName: "Nvidia B200" },
  { id: "gpu-availability-h200", modelName: "Nvidia H200" },
  { id: "gpu-availability-h100", modelName: "Nvidia H100" },
  { id: "gpu-availability-rtx-pro-6000", modelName: "Nvidia RTX Pro 6000" },
] as const;
