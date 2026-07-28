export type TcoCalculatorGpuTypeId =
  | "h100"
  | "h200"
  | "b100"
  | "a100"
  | "mi300x"
  | "l40s";

export type TcoCalculatorCommitmentId =
  | "on-demand"
  | "1-month"
  | "3-months"
  | "12-months";

export type TcoCalculatorGpuType = {
  id: TcoCalculatorGpuTypeId;
  label: string;
  memory: string;
  ratePerHour: number;
};

export type TcoCalculatorCommitment = {
  id: TcoCalculatorCommitmentId;
  label: string;
  discountLabel: string;
  discountPercent: number;
};

export type TcoCalculatorProviderId =
  | "aws"
  | "google-cloud"
  | "azure"
  | "lambda-labs";

export type TcoCalculatorProvider = {
  id: TcoCalculatorProviderId;
  label: string;
  costMultiplier: number;
  barColorClass: string;
};

export type TcoCalculatorConfig = {
  gpuTypeId: TcoCalculatorGpuTypeId;
  gpuCount: number;
  hoursPerMonth: number;
  commitmentId: TcoCalculatorCommitmentId;
  networkStorageGb: number;
};

export type TcoCalculatorBreakdown = {
  monthlyTotal: number;
  gpuCompute: number;
  storageTotal: number;
  summaryLabel: string;
  providerTotals: Record<TcoCalculatorProviderId, number>;
  providerSavings: Record<
    TcoCalculatorProviderId,
    { amount: number; percent: number }
  >;
};
