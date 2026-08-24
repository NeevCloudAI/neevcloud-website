export type AiSuperclustersGpuId = "gb300" | "gb200" | "b300" | "b200" | "h200" | "h100";

export type AiSuperclustersInterconnectId = "infiniband" | "roce";

export type AiSuperclustersStorageId =
  | "s3"
  | "vast"
  | "weka"
  | "nfs"
  | "ddns"
  | "byos"
  | "other";

export type AiSuperclustersDurationId = "12" | "18" | "24" | "36" | "48";

export type AiSuperclustersGpuType = {
  id: AiSuperclustersGpuId;
  label: string;
  gpuPerNode: number;
};

export type AiSuperclustersInterconnectOption = {
  id: AiSuperclustersInterconnectId;
  label: string;
  hubspotValue: string;
};

export type AiSuperclustersStorageOption = {
  id: AiSuperclustersStorageId;
  label: string;
  hubspotValue: string;
};

export type AiSuperclustersDurationOption = {
  id: AiSuperclustersDurationId;
  label: string;
  hubspotValue: string;
};

export type AiSuperclustersConfig = {
  gpuId: AiSuperclustersGpuId;
  nodes: number;
  interconnectId: AiSuperclustersInterconnectId;
  storageId: AiSuperclustersStorageId;
  durationId: AiSuperclustersDurationId;
};

export type AiSuperclustersLineupItem = {
  id: AiSuperclustersGpuId;
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
