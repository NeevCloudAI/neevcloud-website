import { StoragePerformanceCardData } from "../types/storage-performance-section.types";

export const STORAGE_PERFORMANCE_CARDS: readonly StoragePerformanceCardData[] =
  [
    {
      id: "sub-millisecond-access",
      icon: "zap",
      title: "Sub-Millisecond Access",
      subtitle: "Microsecond-level latency",
      description:
        "Hot datasets and checkpoint writes never queue. Local NVMe removes network latency, consistent performance for training and inference.",
      features: [
        { text: "Direct-attached storage per GPU instance" },
        { text: "No network overhead" },
        { text: "Consistent I/O performance" },
        { text: "Zero cross-tenant interference" },
      ],
    },
    {
      id: "high-sequential-throughput",
      icon: "gauge",
      title: "High Sequential Throughput",
      subtitle: "Up to 7,000 MB/s reads",
      description:
        "Purpose-built for large model weights and training data. Stream multi-gigabyte checkpoints and datasets without throttling GPU utilization.",
      features: [
        { text: "Sequential reads: Up to 7,000 MB/s" },
        { text: "Sequential writes: Up to 5,000 MB/s" },
        { text: "Random IOPS: 1M+ operations/second" },
        { text: "Optimized for large file operations" },
      ],
    },
    {
      id: "per-instance-attachment",
      icon: "hard-drive",
      title: "Per-Instance Attachment",
      subtitle: "Dedicated, no noisy neighbors",
      description:
        "Dedicated local disk, no cross-tenant contention. Storage performance remains consistent regardless of cluster activity.",
      features: [
        { text: "Dedicated NVMe per instance" },
        { text: "No noisy neighbor effects" },
        { text: "Predictable performance" },
        { text: "Full bandwidth available" },
      ],
    },
    {
      id: "cost-effective-storage",
      icon: "indian-rupee",
      title: "Cost-Effective Storage",
      subtitle: "25GB free with every GPU",
      description:
        "25GB is included free with every GPU instance. Pay only for the additional capacity you provision.",
      features: [
        { text: "First 25GB:", highlight: "Free with GPU instance" },
        { text: "Additional storage:", highlight: "₹4.17/GB/hour" },
        { text: "No transfer charges between GPU and local storage" },
        { text: "Per-second billing" },
      ],
    },
  ] as const;
