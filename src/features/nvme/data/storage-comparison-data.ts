export type StorageMetricsCardType = {
  id: string;
  title: string;
  badge: string;
  metrics: StorageComparisonMetric[];
};

export type StorageComparisonMetric = {
  id: string;
  label: string;
  displayValue: string;
  seconds: number;
  valueColor: "primary" | "red-50";
};

export const STORAGE_METRICS_CARD: StorageMetricsCardType[] = [
  {
    id: "model-checkpoint",
    title: "MODEL CHECKPOINT (10GB)",
    badge: "6x Faster",
    metrics: [
      {
        id: "nvme-local",
        label: "NVMe Local",
        displayValue: "1.4 seconds",
        seconds: 0.8,
        valueColor: "primary",
      },
      {
        id: "network-storage",
        label: "Network Storage",
        displayValue: "8.5 seconds",
        seconds: 6,
        valueColor: "red-50",
      },
    ],
  },
  {
    id: "dataset-loading",
    title: "DATASET LOADING (50GB)",
    badge: "6.4x Faster",
    metrics: [
      {
        id: "nvme-local",
        label: "NVMe Local",
        displayValue: "7 seconds",
        seconds: 1.2,
        valueColor: "primary",
      },
      {
        id: "network-storage",
        label: "Network Storage",
        displayValue: "45 seconds",
        seconds: 7,
        valueColor: "red-50",
      },
    ],
  },
  {
    id: "random-small-reads",
    title: "RANDOM SMALL READS",
    badge: "20-50x Faster",
    metrics: [
      {
        id: "nvme-local",
        label: "NVMe Local",
        displayValue: "<100μs latency",
        seconds: 0.35,
        valueColor: "primary",
      },
      {
        id: "network-storage",
        label: "Network Storage",
        displayValue: "2-5ms latency",
        seconds: 5,
        valueColor: "red-50",
      },
    ],
  },
  {
    id: "training-iteration-time",
    title: "TRAINING ITERATION TIME",
    badge: "6.4x Faster",
    metrics: [
      {
        id: "nvme-local",
        label: "NVMe Local",
        displayValue: "<1% GPU waiting",
        seconds: 0.6,
        valueColor: "primary",
      },
      {
        id: "network-storage",
        label: "Network Storage",
        displayValue: "15% GPU waiting",
        seconds: 9.5,
        valueColor: "red-50",
      },
    ],
  },
];
