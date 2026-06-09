export type ProviderComparisonTableHeader = {
  id: string;
  name: string;
};

export type ProviderComparisonRow = {
  id: string;
  provider: string;
  isPrimary?: boolean;
  gpuCompute: string;
  storage: string;
  dataTransfer: string;
  inferenceApi: string;
  total: string;
  savingsLabel?: string;
};
