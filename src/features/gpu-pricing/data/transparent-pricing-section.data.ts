import type {
  GpuInstanceFamily,
  GpuInstanceFamilyId,
  GpuInstanceFamilyOption,
  GpuPricingRow,
} from "../types/transparent-pricing-section.types";

export const GPU_INSTANCE_FAMILY_OPTIONS: readonly GpuInstanceFamilyOption[] =
  [
    { id: "single-gpu", number: "01", label: "Single GPU" },
    { id: "multi-gpu", number: "02", label: "Multi-GPU" },
    { id: "multi-node", number: "03", label: "Multi-Node" },
  ] as const;

export const GPU_SINGLE_GPU_PRICING_ROWS: readonly GpuPricingRow[] = [
  {
    id: "h100",
    gpuType: "H100",
    memory: "80GB",
    pricePerHour: "₹179.1",
    typicalWorkload: "70B model inference, LoRA fine-tuning",
  },
  {
    id: "a100",
    gpuType: "A100",
    memory: "80GB",
    pricePerHour: "₹110.22",
    typicalWorkload: "13B-70B training, production inference",
  },
  {
    id: "l40s",
    gpuType: "L40S",
    memory: "48GB",
    pricePerHour: "₹85.5",
    typicalWorkload: "Visual AI, rendering, graphics",
  },
] as const;

export const GPU_MULTI_GPU_PRICING_ROWS: readonly GpuPricingRow[] = [
  {
    id: "8x-h100",
    gpuType: "8x H100",
    memory: "640GB",
    pricePerHour: "₹1,432.8",
    typicalWorkload: "70B+ full fine-tuning, large-scale inference",
  },
  {
    id: "8x-a100",
    gpuType: "8x A100",
    memory: "640GB",
    pricePerHour: "₹881.76",
    typicalWorkload: "Distributed training, multi-model serving",
  },
  {
    id: "8x-l40s",
    gpuType: "8x L40S",
    memory: "384GB",
    pricePerHour: "₹684.0",
    typicalWorkload: "Batch rendering, visual AI pipelines",
  },
] as const;

export const GPU_MULTI_NODE_PRICING_ROWS: readonly GpuPricingRow[] = [
  {
    id: "16x-h100",
    gpuType: "16x H100",
    memory: "1.28TB",
    pricePerHour: "₹2,865.6",
    typicalWorkload: "Multi-node pretraining, RLHF at scale",
  },
  {
    id: "32x-h100",
    gpuType: "32x H100",
    memory: "2.56TB",
    pricePerHour: "₹5,731.2",
    typicalWorkload: "Foundation model training clusters",
  },
  {
    id: "64x-h100",
    gpuType: "64x H100",
    memory: "5.12TB",
    pricePerHour: "Contact sales",
    typicalWorkload: "Enterprise-scale distributed training",
  },
] as const;

export const GPU_INSTANCE_FAMILIES: readonly GpuInstanceFamily[] = [
  {
    id: "single-gpu",
    number: "01",
    sidebarLabel: "Single GPU",
    titleName: "compute optimized instances",
    subtitle: "// High vCPU density : 8c/8GB to 84c/84GB",
    footer:
      "// Ideal for model development, parameter-efficient fine-tuning (LoRA/QLoRA), small-scale inference, and experimentation.",
    rows: GPU_SINGLE_GPU_PRICING_ROWS,
  },
  {
    id: "multi-gpu",
    number: "02",
    sidebarLabel: "Multi-GPU",
    titleName: "multi-gpu nodes",
    subtitle: "// NVLink and InfiniBand within node : 8x to 8x GPU density",
    footer:
      "// Ideal for large-model fine-tuning, tensor-parallel inference, and single-node distributed training.",
    rows: GPU_MULTI_GPU_PRICING_ROWS,
  },
  {
    id: "multi-node",
    number: "03",
    sidebarLabel: "Multi-Node",
    titleName: "multi-node clusters",
    subtitle: "// InfiniBand across nodes : 16 to 64+ GPUs",
    footer:
      "// Ideal for foundation model pretraining, large-scale RLHF, and enterprise distributed workloads.",
    rows: GPU_MULTI_NODE_PRICING_ROWS,
  },
] as const;

export const GPU_INSTANCE_FAMILY_BY_ID: Record<
  GpuInstanceFamilyId,
  GpuInstanceFamily
> = {
  "single-gpu": GPU_INSTANCE_FAMILIES[0],
  "multi-gpu": GPU_INSTANCE_FAMILIES[1],
  "multi-node": GPU_INSTANCE_FAMILIES[2],
};
