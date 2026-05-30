export type PerformanceSummaryMetric = {
  id: string;
  label: string;
  value: string;
  footer: string;
};

export type PerformanceBenchmarkRow = {
  id: string;
  gpu: string;
  processingTime: string;
  relativeTimePercent: number;
  isBaseline: boolean;
};

export type PerformanceBenchmarkWorkload = {
  id: string;
  title: string;
  detail: string;
  rows: PerformanceBenchmarkRow[];
};

export type PerformanceSummaryCardProps = {
  metric: PerformanceSummaryMetric;
};
