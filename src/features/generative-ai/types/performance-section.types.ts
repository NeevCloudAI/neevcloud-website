export type GenerativeAiPerformanceMetric = {
  id: string;
  label: string;
  value: string;
};

export type GenerativeAiPerformanceCard = {
  id: string;
  title: string;
  subtitle: string;
  metrics: GenerativeAiPerformanceMetric[];
};

export type GenerativeAiPerformanceCardProps = {
  card: GenerativeAiPerformanceCard;
};
