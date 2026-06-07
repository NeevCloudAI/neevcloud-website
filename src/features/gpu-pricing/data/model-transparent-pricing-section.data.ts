import type {
  GpuModelCommitmentRow,
  GpuModelFamily,
  GpuModelFamilyId,
  GpuModelFamilyOption,
} from "../types/model-transparent-pricing-section.types";

export const GPU_MODEL_FAMILY_OPTIONS: readonly GpuModelFamilyOption[] = [
  { id: "h100", number: "01", label: "NVIDIA H100 (80GB HBM3)" },
  { id: "a100", number: "02", label: "NVIDIA A100 (80GB HBM2e)" },
  { id: "l40s", number: "03", label: "NVIDIA L40S (48GB GDDR6)" },
] as const;

const GPU_MODEL_COMMITMENT_ROWS: readonly GpuModelCommitmentRow[] = [
  {
    id: "on-demand",
    commitment: "On-demand",
    discount: "0%",
    examplePrice: "₹1,432.8/hour",
  },
  {
    id: "1-month",
    commitment: "1 month",
    discount: "5%",
    examplePrice: "₹1,361.2/hour",
  },
  {
    id: "3-months",
    commitment: "3 months",
    discount: "10%",
    examplePrice: "₹1,289.5/hour",
  },
  {
    id: "12-months",
    commitment: "12 months",
    discount: "23%",
    examplePrice: "₹1,103.3/hour",
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
        pricePerHour: "₹179.1/hr",
        memory: "80GB HBM3",
        bandwidth: "3.35 TB/s",
        fp16: "989 TFLOPS",
      },
      {
        id: "8x-h100",
        configuration: "8x H100",
        pricePerHour: "₹1,432.8/hr",
        memory: "80GB HBM3",
        bandwidth: "3.35 TB/s",
        fp16: "989 TFLOPS",
      },
    ],
    commitmentSubtitle: "// High vCPU density : 8c/8GB to 64c/64GB",
    commitmentExampleLabel: "Example (8x H100)",
    commitmentRows: GPU_MODEL_COMMITMENT_ROWS,
    annualSavingsLabel: "Annual Savings · 8x H100",
    onDemandPerYear: "₹1,25,47,328",
    reservedPerYear: "₹96,61,428",
    youSave: "₹28,85,900",
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
        pricePerHour: "₹110.22/hr",
        memory: "80GB HBM3",
        bandwidth: "2.0 TB/s",
        fp16: "624 TFLOPS",
      },
      {
        id: "8x-a100",
        configuration: "8x A100",
        pricePerHour: "₹881.76/hr",
        memory: "80GB HBM3",
        bandwidth: "3.35 TB/s",
        fp16: "989 TFLOPS",
      },
    ],
    commitmentSubtitle:
      "// Save on long-running workloads with reserved capacity.",
    commitmentExampleLabel: "Example (8x H100)",
    commitmentRows: GPU_MODEL_COMMITMENT_ROWS,
    annualSavingsLabel: "Annual Savings · 8x H100",
    onDemandPerYear: "₹1,25,47,328",
    reservedPerYear: "₹96,61,428",
    youSave: "₹28,85,900",
  },
  {
    id: "l40s",
    number: "03",
    sidebarLabel: "NVIDIA L40S (48GB GDDR6)",
    titleName: "compute optimized instances",
    subtitle: "// High vCPU density : 8c/8GB to 64c/64GB",
    useCasesLabel: "Use Cases",
    useCases: "// Production training, inference at scale",
    configurationRows: [
      {
        id: "1x-l40s",
        configuration: "1x L40S",
        pricePerHour: "₹85.5/hr",
        memory: "48GB GDDR6",
        bandwidth: "864 GB/s",
        fp16: "362 TFLOPS",
      },
      {
        id: "4x-l40s",
        configuration: "4x L40S",
        pricePerHour: "₹342/hr",
        memory: "80GB HBM3",
        bandwidth: "3.35 TB/s",
        fp16: "989 TFLOPS",
      },
    ],
    commitmentSubtitle:
      "// Save on long-running workloads with reserved capacity.",
    commitmentExampleLabel: "Example (8x H100)",
    commitmentRows: GPU_MODEL_COMMITMENT_ROWS,
    annualSavingsLabel: "Annual Savings · 8x H100",
    onDemandPerYear: "₹1,25,47,328",
    reservedPerYear: "₹96,61,428",
    youSave: "₹28,85,900",
  },
] as const;

export const GPU_MODEL_FAMILY_BY_ID: Record<GpuModelFamilyId, GpuModelFamily> =
  {
    h100: GPU_MODEL_FAMILIES[0],
    a100: GPU_MODEL_FAMILIES[1],
    l40s: GPU_MODEL_FAMILIES[2],
  };
