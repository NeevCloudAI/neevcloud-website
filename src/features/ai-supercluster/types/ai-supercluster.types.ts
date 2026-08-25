export type AiSuperclusterGpuId = "gb300" | "gb200" | "b300" | "b200" | "h200" | "h100";

export type AiSuperclusterInterconnectId = "infiniband" | "roce";

export type AiSuperclusterStorageId =
  | "s3"
  | "vast"
  | "weka"
  | "nfs"
  | "ddns"
  | "byos"
  | "other";

export type AiSuperclusterDurationId = "12" | "18" | "24" | "36" | "48";

export type AiSuperclusterGpuType = {
  id: AiSuperclusterGpuId;
  label: string;
  gpuPerNode: number;
};

export type AiSuperclusterInterconnectOption = {
  id: AiSuperclusterInterconnectId;
  label: string;
  hubspotValue: string;
};

export type AiSuperclusterStorageOption = {
  id: AiSuperclusterStorageId;
  label: string;
  hubspotValue: string;
};

export type AiSuperclusterDurationOption = {
  id: AiSuperclusterDurationId;
  label: string;
  hubspotValue: string;
};

export type AiSuperclusterConfig = {
  gpuId: AiSuperclusterGpuId;
  nodes: number;
  interconnectId: AiSuperclusterInterconnectId;
  storageId: AiSuperclusterStorageId;
  durationId: AiSuperclusterDurationId;
};

export type AiSuperclusterLineupItem = {
  id: AiSuperclusterGpuId;
  name: string;
  tier: string;
  image: string;
  badge?: "NEW" | "HOT";
  availability: string;
  architecture: string;
  vram: string;
  tdp: string;
  peakCompute: string;
  fabric: string;
  memoryBandwidth: string;
  bestFor: string;
};
