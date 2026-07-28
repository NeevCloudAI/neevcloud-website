import type {
  GpuModelCommitmentRow,
  GpuModelFamily,
  GpuModelFamilyId,
  GpuModelFamilyOption,
} from "../types/model-transparent-pricing-section.types";

export const GPU_MODEL_FAMILY_OPTIONS: readonly GpuModelFamilyOption[] = [
  { id: "h100", number: "01", label: "NVIDIA H100 (80GB HBM3)" },
  { id: "a100", number: "02", label: "NVIDIA A100 (80GB HBM2e)" },
] as const;

const GPU_MODEL_H100_COMMITMENT_ROWS: readonly GpuModelCommitmentRow[] = [
  {
    id: "on-demand",
    commitment: "On-demand",
    discount: "0%",
    examplePrice: "₹1,539.84/hour",
  },
  {
    id: "1-month",
    commitment: "1 month",
    discount: "5%",
    examplePrice: "₹1,462.48/hour",
  },
  {
    id: "3-months",
    commitment: "3 months",
    discount: "5%",
    examplePrice: "₹1,470.16/hour",
  },
  {
    id: "6-months",
    commitment: "6 months",
    discount: "9%",
    examplePrice: "₹1,400.56/hour",
  },
  {
    id: "12-months",
    commitment: "12 months",
    discount: "12%",
    examplePrice: "₹1,361.84/hour",
  },
] as const;

const GPU_MODEL_A100_COMMITMENT_ROWS: readonly GpuModelCommitmentRow[] = [
  {
    id: "on-demand",
    commitment: "On-demand",
    discount: "0%",
    examplePrice: "₹1,021.44/hour",
  },
  {
    id: "1-month",
    commitment: "1 month",
    discount: "5%",
    examplePrice: "₹967.20/hour",
  },
  {
    id: "3-months",
    commitment: "3 months",
    discount: "5%",
    examplePrice: "₹967.20/hour",
  },
  {
    id: "6-months",
    commitment: "6 months",
    discount: "9%",
    examplePrice: "₹928.56/hour",
  },
  {
    id: "12-months",
    commitment: "12 months",
    discount: "13%",
    examplePrice: "₹889.84/hour",
  },
] as const;

export const GPU_MODEL_FAMILIES: readonly GpuModelFamily[] = [
  {
    id: "h100",
    number: "01",
    sidebarLabel: "NVIDIA H100 (80GB HBM3)",
    titleName: "compute optimized instances",
    subtitle: "// High vCPU density : 8c/8GB to 64c/64GB",
    useCasesLabel: "Use Cases",
    useCases: "// Frontier model training, large batch inference",
    configurationRows: [
      {
        id: "1x-h100",
        configuration: "1x H100",
        pricePerHour: "₹192.48/hr",
        memory: "80GB HBM3",
        bandwidth: "3.35 TB/s",
        fp16: "989 TFLOPS",
      },
      {
        id: "8x-h100",
        configuration: "8x H100",
        pricePerHour: "₹1,539.84/hr",
        memory: "80GB HBM3",
        bandwidth: "3.35 TB/s",
        fp16: "989 TFLOPS",
      },
    ],
    commitmentSubtitle: "// High vCPU density : 8c/8GB to 64c/64GB",
    commitmentExampleLabel: "Example (8x H100)",
    commitmentRows: GPU_MODEL_H100_COMMITMENT_ROWS,
    annualSavingsLabel: "Annual Savings · 8x H100",
    onDemandPerYear: "₹1,34,88,998",
    reservedPerYear: "₹1,19,29,718",
    youSave: "₹15,59,280",
  },
  {
    id: "a100",
    number: "02",
    sidebarLabel: "NVIDIA A100 (80GB HBM2e)",
    titleName: "compute optimized instances",
    subtitle: "// High vCPU density : 8c/8GB to 64c/64GB",
    useCasesLabel: "Use Cases",
    useCases: "// Production training, inference at scale",
    configurationRows: [
      {
        id: "1x-a100",
        configuration: "1x A100",
        pricePerHour: "₹127.68/hr",
        memory: "80GB HBM3",
        bandwidth: "2.0 TB/s",
        fp16: "624 TFLOPS",
      },
      {
        id: "8x-a100",
        configuration: "8x A100",
        pricePerHour: "₹1,021.44/hr",
        memory: "80GB HBM3",
        bandwidth: "3.35 TB/s",
        fp16: "989 TFLOPS",
      },
    ],
    commitmentSubtitle:
      "// Save on long-running workloads with reserved capacity.",
    commitmentExampleLabel: "Example (8x A100)",
    commitmentRows: GPU_MODEL_A100_COMMITMENT_ROWS,
    annualSavingsLabel: "Annual Savings · 8x A100",
    onDemandPerYear: "₹89,47,814",
    reservedPerYear: "₹77,94,998",
    youSave: "₹11,52,816",
  },
] as const;

export const GPU_MODEL_FAMILY_BY_ID: Record<GpuModelFamilyId, GpuModelFamily> =
  {
    h100: GPU_MODEL_FAMILIES[0],
    a100: GPU_MODEL_FAMILIES[1],
  };
