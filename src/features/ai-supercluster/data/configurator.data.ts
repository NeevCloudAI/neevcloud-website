import type {
  AiSuperclusterDurationOption,
  AiSuperclusterGpuId,
  AiSuperclusterGpuType,
  AiSuperclusterInterconnectOption,
  AiSuperclusterStorageOption,
} from "../types/ai-supercluster.types";

export const AI_SUPERCLUSTER_GPU_TYPES: readonly AiSuperclusterGpuType[] = [
  { id: "gb300", label: "GB300 NVL72", gpuPerNode: 72 },
  { id: "gb200", label: "GB200 NVL72", gpuPerNode: 72 },
  { id: "b300", label: "B300", gpuPerNode: 8 },
  { id: "b200", label: "B200", gpuPerNode: 8 },
  { id: "h200", label: "H200", gpuPerNode: 8 },
  { id: "h100", label: "H100", gpuPerNode: 8 },
] as const;

export const AI_SUPERCLUSTER_INTERCONNECTS: readonly AiSuperclusterInterconnectOption[] =
  [
    { id: "infiniband", label: "InfiniBand", hubspotValue: "InfiniBand" },
    { id: "roce", label: "RoCE v2 Ethernet", hubspotValue: "RoCE v2" },
  ] as const;

export const AI_SUPERCLUSTER_STORAGE_OPTIONS: readonly AiSuperclusterStorageOption[] =
  [
    { id: "s3", label: "S3 Object Storage", hubspotValue: "S3 Object Storage" },
    { id: "vast", label: "VAST Data", hubspotValue: "VAST Data" },
    { id: "weka", label: "WekaFS Parallel", hubspotValue: "WEKA" },
    { id: "nfs", label: "NFS All-Flash", hubspotValue: "NFS" },
    { id: "ddns", label: "DDNS", hubspotValue: "ddns" },
    { id: "byos", label: "BYOS", hubspotValue: "byos" },
    { id: "other", label: "Any Other", hubspotValue: "other" },
  ] as const;

export const AI_SUPERCLUSTER_DURATIONS: readonly AiSuperclusterDurationOption[] =
  [
    { id: "12", label: "12 mo", hubspotValue: "12 Months" },
    { id: "18", label: "18 mo", hubspotValue: "18 Months" },
    { id: "24", label: "24 mo", hubspotValue: "24 Months" },
    { id: "36", label: "36 mo", hubspotValue: "36 Months" },
    { id: "48", label: "48 mo", hubspotValue: "48 Months" },
  ] as const;

export const AI_SUPERCLUSTER_NODES_MIN = 8;
export const AI_SUPERCLUSTER_NODES_MAX = 224;
export const AI_SUPERCLUSTER_NODES_STEP = 8;

export const AI_SUPERCLUSTER_DEFAULT_GPU_ID: AiSuperclusterGpuId = "gb200";
export const AI_SUPERCLUSTER_DEFAULT_NODES = 8;
export const AI_SUPERCLUSTER_DEFAULT_INTERCONNECT_ID = "infiniband" as const;
export const AI_SUPERCLUSTER_DEFAULT_STORAGE_ID = "s3" as const;
export const AI_SUPERCLUSTER_DEFAULT_DURATION_ID = "12" as const;
