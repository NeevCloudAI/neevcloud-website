import type {
  AiSuperclustersDurationOption,
  AiSuperclustersGpuId,
  AiSuperclustersGpuType,
  AiSuperclustersInterconnectOption,
  AiSuperclustersStorageOption,
} from "../types/ai-superclusters.types";

export const AI_SUPERCLUSTERS_GPU_TYPES: readonly AiSuperclustersGpuType[] = [
  { id: "gb300", label: "GB300 NVL72", gpuPerNode: 72 },
  { id: "gb200", label: "GB200 NVL72", gpuPerNode: 72 },
  { id: "b300", label: "B300", gpuPerNode: 8 },
  { id: "b200", label: "B200", gpuPerNode: 8 },
  { id: "h200", label: "H200", gpuPerNode: 8 },
  { id: "h100", label: "H100", gpuPerNode: 8 },
] as const;

export const AI_SUPERCLUSTERS_INTERCONNECTS: readonly AiSuperclustersInterconnectOption[] =
  [
    { id: "infiniband", label: "InfiniBand", hubspotValue: "InfiniBand" },
    { id: "roce", label: "RoCE v2 Ethernet", hubspotValue: "RoCE v2" },
  ] as const;

export const AI_SUPERCLUSTERS_STORAGE_OPTIONS: readonly AiSuperclustersStorageOption[] =
  [
    { id: "s3", label: "S3 Object Storage", hubspotValue: "S3 Object Storage" },
    { id: "vast", label: "VAST Data", hubspotValue: "VAST Data" },
    { id: "weka", label: "WekaFS Parallel", hubspotValue: "WEKA" },
    { id: "nfs", label: "NFS All-Flash", hubspotValue: "NFS" },
    { id: "ddns", label: "DDNS", hubspotValue: "ddns" },
    { id: "byos", label: "BYOS", hubspotValue: "byos" },
    { id: "other", label: "Any Other", hubspotValue: "other" },
  ] as const;

export const AI_SUPERCLUSTERS_DURATIONS: readonly AiSuperclustersDurationOption[] =
  [
    { id: "12", label: "12 mo", hubspotValue: "12 Months" },
    { id: "18", label: "18 mo", hubspotValue: "18 Months" },
    { id: "24", label: "24 mo", hubspotValue: "24 Months" },
    { id: "36", label: "36 mo", hubspotValue: "36 Months" },
    { id: "48", label: "48 mo", hubspotValue: "48 Months" },
  ] as const;

export const AI_SUPERCLUSTERS_NODES_MIN = 8;
export const AI_SUPERCLUSTERS_NODES_MAX = 224;
export const AI_SUPERCLUSTERS_NODES_STEP = 8;

export const AI_SUPERCLUSTERS_DEFAULT_GPU_ID: AiSuperclustersGpuId = "gb200";
export const AI_SUPERCLUSTERS_DEFAULT_NODES = 8;
export const AI_SUPERCLUSTERS_DEFAULT_INTERCONNECT_ID = "infiniband" as const;
export const AI_SUPERCLUSTERS_DEFAULT_STORAGE_ID = "s3" as const;
export const AI_SUPERCLUSTERS_DEFAULT_DURATION_ID = "12" as const;
