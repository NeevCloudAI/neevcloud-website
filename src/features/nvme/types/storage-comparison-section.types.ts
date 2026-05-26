import type { StorageComparisonMetric } from "@/shared/components/StorageComparisonBar";

export type StorageMetricsCardData = {
  id: string;
  title: string;
  badge: string;
  metrics: StorageComparisonMetric[];
};
