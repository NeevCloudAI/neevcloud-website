export type GpuFlipDetailsInput = {
  baselineCardName?: string;
  baselineMultiplierLabel: string;
  comparisonCardName: string;
  comparisonMultiplierLabel: string;
};

export type GpuFlipBarChart = {
  cardName: string;
  label: string;
  height: number;
  upToLabel?: string;
};

export type GpuFlipChartConfig = {
  upToReferenceMultiplierLabel: string;
  upToMinRatio: number;
};

export type GpuFlipChartDetails = {
  linePosition: number;
  card1: GpuFlipBarChart;
  card2: GpuFlipBarChart;
};

export type GpuOtherGpuCard = {
  id: string;
  title: string;
  description: string;
  flipDetails: GpuFlipDetailsInput;
};

export type GpuOtherGpusSectionProps = {
  excludeId: string;
  title?: string;
  className?: string;
};

export type GpuOtherGpusCardProps = {
  title: string;
  description: string;
  iconSrc?: string;
  className?: string;
  flipDetails: GpuFlipDetailsInput;
  flipChartConfig?: GpuFlipChartConfig;
};

export type GpuFlipChartProps = {
  flipDetails: GpuFlipChartDetails;
};
