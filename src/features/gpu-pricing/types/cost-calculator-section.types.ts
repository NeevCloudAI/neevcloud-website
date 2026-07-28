export type GpuCostCalculatorGpuTypeId =
  | "1x-h100"
  | "2x-h100"
  | "4x-h100"
  | "8x-a100";

export type GpuCostCalculatorCommitmentId =
  | "on-demand"
  | "1-month"
  | "3-months"
  | "12-months";

export type GpuCostCalculatorGpuType = {
  id: GpuCostCalculatorGpuTypeId;
  label: string;
  ratePerHour: number;
  badge?: string;
};

export type GpuCostCalculatorCommitment = {
  id: GpuCostCalculatorCommitmentId;
  label: string;
  discountPercent: number;
};

export type GpuCostCalculatorPreset = {
  id: string;
  title: string;
  subtitle: string;
  gpuTypeId: GpuCostCalculatorGpuTypeId;
  hoursPerMonth: number;
  commitmentId: GpuCostCalculatorCommitmentId;
};

export type GpuCostCalculatorBreakdown = {
  monthlyCost: number;
  annualizedCost: number;
  subtotal: number;
  discountAmount: number;
  summaryLabel: string;
  commitmentLabel: string;
};
