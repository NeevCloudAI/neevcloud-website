export type PerformanceMetric = {
  id: string;
  value: string;
  unit?: string;
  title: string;
  description: string;
};

export type PerformanceMetricCardProps = {
  metric: PerformanceMetric;
  className?: string;
};
