import { StorageComparisonMetric } from "@/shared/components/StorageComparisonBar";

export type StorageMetricsCardType = {
  id: string;
  title: string;
  badge: string;
  metrics: StorageComparisonMetric[];
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
        seconds: 8,
        valueColor: "primary",
        barColor: "bg-primary",
      },
      {
        id: "network-storage",
        label: "Network Storage",
        displayValue: "8.5 seconds",
        seconds: 60,
        valueColor: "red-50",
        barColor: "bg-red-50",
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
        seconds: 12,
        valueColor: "primary",
        barColor: "bg-primary",
      },
      {
        id: "network-storage",
        label: "Network Storage",
        displayValue: "45 seconds",
        seconds: 70,
        valueColor: "red-50",
        barColor: "bg-red-50",
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
        seconds: 35,
        valueColor: "primary",
        barColor: "bg-primary",
      },
      {
        id: "network-storage",
        label: "Network Storage",
        displayValue: "2-5ms latency",
        seconds: 50,
        valueColor: "red-50",
        barColor: "bg-red-50",
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
        seconds: 60,
        valueColor: "primary",
        barColor: "bg-primary",
      },
      {
        id: "network-storage",
        label: "Network Storage",
        displayValue: "15% GPU waiting",
        seconds: 95,
        valueColor: "red-50",
        barColor: "bg-red-50",
      },
    ],
  },
];
