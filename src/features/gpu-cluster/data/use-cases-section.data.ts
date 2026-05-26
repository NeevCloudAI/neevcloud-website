import type { UseCaseDefinition } from "../types/use-cases-section.types";

export const USE_CASES: UseCaseDefinition[] = [
  {
    id: "01",
    tabName: "LLM Training",
    logoAlt: "LLM training on Neevcloud GPU clusters",
    heading: "LLM Training",
    description:
      "Train models from scratch on H100 or H200 clusters. Full InfiniBand bandwidth between nodes. PyTorch 2.8 + CUDA 12.9 pre-installed.",
    tags: [
      { text: "H100", variant: "primary" },
      { text: "H200", variant: "primary" },
      { text: "PyTorch 2.8", variant: "muted" },
      { text: "CUDA 12.9", variant: "muted" },
      { text: "InfiniBand", variant: "muted" },
    ],
    summary: [
      {
        label: "BEST FOR",
        title: "Foundation Models",
        subtitle: "7B → 70B+ parameters",
      },
      {
        label: "RECOMMENDED CLUSTER",
        title: "8x H100/H200",
        subtitle: "Multi-node InfiniBand",
      },
      {
        label: "STARTING AT",
        title: "₹179.10/hr",
        subtitle: "per GPU, on-demand",
      },
    ],
  },
  {
    id: "02",
    tabName: "Fine-Tuning",
    logoAlt: "Fine-tuning workloads on Neevcloud",
    heading: "Fine-tuning",
    description:
      "Run LoRA, QLoRA, or full fine-tune jobs on H100, A100, or A30. Managed checkpointing. Auto-resume from spot preemption.",
    tags: [
      { text: "H100", variant: "primary" },
      { text: "A100", variant: "primary" },
      { text: "A30", variant: "primary" },
      { text: "LoRA", variant: "muted" },
      { text: "QLoRA", variant: "muted" },
    ],
    summary: [
      {
        label: "BEST FOR",
        title: "Domain adaptation",
        subtitle: "Single-GPU to small clusters",
      },
      {
        label: "RECOMMENDED CLUSTER",
        title: "1–4× A100 / A30",
        subtitle: "Spot-friendly with auto-resume",
      },
      {
        label: "STARTING AT",
        title: "₹72.00/hr",
        subtitle: "A30, on-demand",
      },
    ],
  },
  {
    id: "03",
    tabName: "Inference",
    logoAlt: "Inference serving on Neevcloud",
    heading: "Inference Serving",
    description:
      "Deploy vLLM, Triton, or custom inference servers. Autoscale GPU pools to match traffic. Pay only for what you serve.",
    tags: [
      { text: "H100", variant: "primary" },
      { text: "A100", variant: "primary" },
      { text: "vLLM", variant: "muted" },
      { text: "Triton", variant: "muted" },
      { text: "Autoscale", variant: "muted" },
    ],
    summary: [
      {
        label: "BEST FOR",
        title: "Production endpoints",
        subtitle: "Real-time low-latency",
      },
      {
        label: "RECOMMENDED CLUSTER",
        title: "Autoscaling pool",
        subtitle: "A100 / H100 mix",
      },
      {
        label: "STARTING AT",
        title: "₹118.00/hr",
        subtitle: "A100, on-demand",
      },
    ],
  },
  {
    id: "04",
    tabName: "Image & Video",
    logoAlt: "Image and video generation on Neevcloud",
    heading: "Image & Video Generation",
    description:
      "Stable Diffusion XL and FLUX on H100 or RTX 5090. High-throughput batch generation at production scale.",
    tags: [
      { text: "H100", variant: "primary" },
      { text: "RTX 5090", variant: "primary" },
      { text: "SDXL", variant: "muted" },
      { text: "FLUX", variant: "muted" },
      { text: "Batch", variant: "muted" },
    ],
    summary: [
      {
        label: "BEST FOR",
        title: "Generated media",
        subtitle: "High-throughput batches",
      },
      {
        label: "RECOMMENDED CLUSTER",
        title: "1-8x RTX 5090",
        subtitle: "Or H100 for max throughput",
      },
      {
        label: "STARTING AT",
        title: "₹88.20/hr",
        subtitle: "RTX 5090, on-demand",
      },
    ],
  },
  {
    id: "05",
    tabName: "HPC",
    logoAlt: "HPC and scientific computing on Neevcloud",
    heading: "HPC / Scientific Computing",
    description:
      "Parallel scientific workloads on GPU clusters with low-latency InfiniBand fabric. Available in Indore, India.",
    tags: [
      { text: "H100", variant: "primary" },
      { text: "A100", variant: "primary" },
      { text: "InfiniBand", variant: "muted" },
      { text: "MPI", variant: "muted" },
      { text: "Batch", variant: "muted" },
    ],
    summary: [
      {
        label: "BEST FOR",
        title: "Simulation & modeling",
        subtitle: "Tightly-coupled jobs",
      },
      {
        label: "RECOMMENDED CLUSTER",
        title: "Multi-node fabric",
        subtitle: "Low-latency InfiniBand",
      },
      {
        label: "STARTING AT",
        title: "On request.",
        subtitle: "Custom HPC pricing.",
      },
    ],
  },
  {
    id: "06",
    tabName: "Embeddings",
    logoAlt: "Embedding pipelines on Neevcloud",
    heading: "Embedding Pipelines",
    description:
      "Generate text embeddings at scale for RAG, search, and classification on A30 or A100. Built for high-volume batch jobs.",
    tags: [
      { text: "A30", variant: "primary" },
      { text: "A100", variant: "primary" },
      { text: "RAG", variant: "muted" },
      { text: "Search", variant: "muted" },
      { text: "Classification", variant: "muted" },
    ],
    summary: [
      {
        label: "BEST FOR",
        title: "Retrieval & search",
        subtitle: "Vector pipelines at scale",
      },
      {
        label: "RECOMMENDED CLUSTER",
        title: "1–4× A30 / A100",
        subtitle: "Batch-optimized",
      },
      {
        label: "STARTING AT",
        title: "₹63.45/hr",
        subtitle: "A30, 1-year reserved",
      },
    ],
  },
];
