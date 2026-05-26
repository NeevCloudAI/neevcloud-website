export const INFINIBAND_FEATURES = [
  "PyTorch FSDP",
  "DeepSpeed",
  "Horovod",
  "NCCL (optimized for InfiniBand)",
] as const;

export const AUTOSCALING_FEATURES = [
  "Pending pods trigger scale-up (60s)",
  "Idle nodes scale down (10 min)",
  "Min/max nodes configurable per pool",
  "Respects pod disruption budgets",
] as const;

export const GPU_METRICS_TAGS = [
  "GPU util/pod",
  "Memory alloc",
  "Inference latency",
  "Node health",
] as const;

export const REGISTRY_TAGS = [
  "Unlimited repos",
  "Image scanning",
  "Auto GC",
  "Fast Pulls",
] as const;
