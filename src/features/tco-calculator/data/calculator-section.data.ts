import type {
  TcoCalculatorCommitment,
  TcoCalculatorGpuType,
  TcoCalculatorProvider,
} from "../types/calculator-section.types";

export const TCO_CALCULATOR_SECTION = {
  titlePrefix: "Calculate Your",
  titleHighlight: "Total Cost",
  description:
    "Configure your workload and see costs update live as you adjust each parameter.",
  calculateCta: "Calculate Total Cost",
  viewBreakdownCta: "View Full Breakdown",
  summaryLabel: "NEEVCLOUD — ESTIMATED MONTHLY",
  providerComparisonLabel: "VS. OTHER PROVIDERS",
  savingsTitle: "YOUR MONTHLY SAVINGS",
} as const;

export const TCO_CALCULATOR_GPU_TYPES: readonly TcoCalculatorGpuType[] = [
  { id: "h100", label: "H100", memory: "80GB HBM3", ratePerHour: 142 },
  { id: "h200", label: "H200", memory: "141GB HBM3e", ratePerHour: 165 },
  { id: "b100", label: "B100", memory: "192GB HBM3e", ratePerHour: 198 },
  { id: "a100", label: "A100", memory: "80GB HBM2e", ratePerHour: 98 },
  { id: "mi300x", label: "MI300X", memory: "192GB HBM3", ratePerHour: 130 },
  { id: "l40s", label: "L40S", memory: "48GB GDDR6", ratePerHour: 45 },
] as const;

export const TCO_CALCULATOR_COMMITMENTS: readonly TcoCalculatorCommitment[] = [
  {
    id: "on-demand",
    label: "ON-DEMAND",
    discountLabel: "0% discount",
    discountPercent: 0,
  },
  {
    id: "1-month",
    label: "1 MONTH",
    discountLabel: "5% off",
    discountPercent: 5,
  },
  {
    id: "3-months",
    label: "3 MONTHS",
    discountLabel: "10% off",
    discountPercent: 10,
  },
  {
    id: "12-months",
    label: "12 MONTHS",
    discountLabel: "20% off",
    discountPercent: 20,
  },
] as const;

export const TCO_CALCULATOR_PROVIDERS: readonly TcoCalculatorProvider[] = [
  {
    id: "aws",
    label: "AWS",
    costMultiplier: 1.4665,
    barColorClass: "bg-gray-75",
  },
  {
    id: "google-cloud",
    label: "Google Cloud",
    costMultiplier: 1.4023,
    barColorClass: "bg-primary",
  },
  {
    id: "azure",
    label: "Azure",
    costMultiplier: 1.5599,
    barColorClass: "bg-red-50",
  },
  {
    id: "lambda-labs",
    label: "Lambda Labs",
    costMultiplier: 1.1451,
    barColorClass: "bg-orange-50",
  },
] as const;

export const TCO_CALCULATOR_STORAGE_RATES = {
  localNvmePerGbMonth: 0.5,
  networkStoragePerGbMonth: 0.12,
  objectStoragePerGbMonth: 0.06,
  neevcloudDataTransferPerGb: 0,
  inferencePerMillionTokens: 22.55,
} as const;

export const TCO_CALCULATOR_GPU_TYPE_BY_ID = Object.fromEntries(
  TCO_CALCULATOR_GPU_TYPES.map((gpuType) => [gpuType.id, gpuType]),
) as Record<TcoCalculatorGpuType["id"], TcoCalculatorGpuType>;

export const TCO_CALCULATOR_COMMITMENT_BY_ID = Object.fromEntries(
  TCO_CALCULATOR_COMMITMENTS.map((commitment) => [commitment.id, commitment]),
) as Record<TcoCalculatorCommitment["id"], TcoCalculatorCommitment>;
