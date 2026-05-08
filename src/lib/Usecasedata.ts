export type TabId = "01" | "02" | "03" | "04" | "05" | "06";

export interface UseCaseEntry {
  title: string;
  description: string;
  tags: string[];
  highlightTags: string[];
  bestFor: string;
  bestForSub: string;
  cluster: string;
  clusterSub: string;
  price: string;
  priceSub: string;
}

export const tabs: { id: TabId; label: string }[] = [
  { id: "01", label: "LLM Training" },
  { id: "02", label: "Fine-Tuning" },
  { id: "03", label: "Inference" },
  { id: "04", label: "Image & Video" },
  { id: "05", label: "HPC" },
  { id: "06", label: "Embeddings" },
];

export const useCaseData: Record<TabId, UseCaseEntry> = {
  "01": {
    title: "LLM Training",
    description:
      "Train models from scratch on H100 or H200 clusters. Full InfiniBand bandwidth between nodes. PyTorch 2.8 + CUDA 12.9 pre-installed.",
    tags: ["H100", "H200", "PyTorch 2.8", "CUDA 12.9", "InfiniBand"],
    highlightTags: ["H100", "H200"],
    bestFor: "Foundation Models",
    bestForSub: "7B → 70B+ parameters",
    cluster: "8x H100/H200",
    clusterSub: "Multi-node InfiniBand",
    price: "₹179.10/hr",
    priceSub: "per GPU, on-demand",
  },
  "02": {
    title: "Fine-Tuning",
    description:
      "Run LoRA, QLoRA, or full fine-tune jobs on H100, A100, or A30. Managed checkpointing. Auto-resume from spot preemption.",
    tags: ["H100", "A100", "A30", "LoRA", "QLoRA"],
    highlightTags: ["H100", "A100", "A30"],
    bestFor: "Domain Adaptation",
    bestForSub: "Single-GPU to small clusters",
    cluster: "1–4× A100 / A30",
    clusterSub: "Spot-friendly with auto-resume",
    price: "₹72.00/hr",
    priceSub: "A30, on-demand",
  },
  "03": {
    title: "Inference",
    description:
      "Deploy vLLM, Triton, or custom inference servers. Autoscale GPU pools to match traffic. Pay only for what you serve.",
    tags: ["H100", "A100", "vLLM", "Triton", "Autoscale"],
    highlightTags: ["H100", "A100"],
    bestFor: "Productive end",
    bestForSub: "Real-time low-latency",
    cluster: "Autoscaling pool",
    clusterSub: "A100 / H100 mix",
    price: "₹118.00/hr",
    priceSub: "A100, on-demand",
  },
  "04": {
    title: "Image & Video",
    description:
      "Stable Diffusion XL and FLUX on H100 or RTX 5090. High-throughput batch generation at production scale.",
    tags: ["H100", "RTX-5090", "SDXL", "FLUX", "Batch"],
    highlightTags: ["H100", "RTX-5090"],
    bestFor: "Generative Media",
    bestForSub: "High-throughput batches",
    cluster: "1–8× RTX 5090",
    clusterSub: "Or H100 for max throughput",
    price: "₹88.20/hr",
    priceSub: "RTX 5090, on-demand",
  },
  "05": {
    title: "HPC",
    description:
      "Parallel scientific workloads on GPU clusters with low-latency InfiniBand fabric. Available in Indore, India.",
    tags: ["H100", "A100", "InfiniBand", "MPI", "Batch"],
    highlightTags: ["H100", "A100"],
    bestFor: "Simulation & modeling",
    bestForSub: "Tightly-coupled jobs",
    cluster: "Multi-node fabric",
    clusterSub: "Low-latency InfiniBand",
    price: "On request",
    priceSub: "Custom HPC pricing",
  },
  "06": {
    title: "Embeddings",
    description:
      "Generate text embeddings at scale for RAG, search, and classification on A30 or A100. Built for high-volume batch jobs.",
    tags: ["A30", "A100", "RAG", "Search", "Classification"],
    highlightTags: ["A30", "A100"],
    bestFor: "Retrieval & search",
    bestForSub: "Vector pipelines at scale",
    cluster: "1–4× A30 / A100",
    clusterSub: "Batch-optimized",
    price: "₹63.45/hr",
    priceSub: "A30, 1-year reserved",
  },
};
