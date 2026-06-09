export type GpuTechnicalSpecsBarVariant =
  | "black"
  | "default"
  | "highlight"
  | "highlight-light";

export type GpuTechnicalSpecsBar = {
  id: string;
  name: string;
  description?: string;
  value: number;
  displayValue: string;
  variant: GpuTechnicalSpecsBarVariant;
  arrowLabel?: string;
};

export type GpuTechnicalSpecsChartAnnotation = {
  label: string;
  fromBarIndex: number;
  toBarIndex: number;
};

export type GpuTechnicalSpecsChartLegendItem = {
  label: string;
  variant: GpuTechnicalSpecsBarVariant;
};

export type GpuTechnicalSpecsChart = {
  id: string;
  title?: string;
  barChartHeight?: number;
  caption: string;
  yAxisLabel?: string;
  yAxisMax: number;
  yAxisStep?: number;
  yAxisFormat?: "multiplier" | "number";
  referenceLine?: number;
  bars: readonly GpuTechnicalSpecsBar[];
  annotation?: GpuTechnicalSpecsChartAnnotation;
  legend?: readonly GpuTechnicalSpecsChartLegendItem[];
};

export type GpuTechnicalSpecsRow = {
  id: string;
  feature: string;
  specification: string;
};

export type GpuTechnicalSpecsSectionContent = {
  rows: readonly GpuTechnicalSpecsRow[];
  charts?: readonly GpuTechnicalSpecsChart[];
  buttonCta: string;
  buttonLink: string;
  buttonTarget?: string;
};

export type GpuTechnicalSpecsSectionProps = GpuTechnicalSpecsSectionContent & {
  className?: string;
};
