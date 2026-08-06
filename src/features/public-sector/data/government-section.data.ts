import { GovernmentServiceItem } from "../types/government-section.types";

export const GOVERNMENT_SERVICES: readonly GovernmentServiceItem[] = [
  {
    id: "gpu-ai",
    index: "01",
    title: "GPU AI Service",
    specs: "H100 • H200 • B200 • A100",
    description: "Single instances for training and inference.",
    highlight: "8x H100",
    highlightSubtext: "from ₹240/hr",
    href: "/gpu-ai-service",
  },
  {
    id: "ai-inference",
    index: "02",
    title: "AI Inference",
    specs: "Serverless • 20+ models",
    description:
      "OpenAI-compatible endpoints. Sub-50ms latency, billed in INR. Native Indic model support.",
    highlight: "8x H100",
    highlightSubtext: "from ₹240/hr",
    href: "/ai-inference",
  },
  {
    id: "storage",
    index: "03",
    title: "Storage",
    specs: "NVMe • object • network",
    description:
      "Persistent network storage and ultra-fast NVMe. Multi-petabyte capacity with data residency guarantees.",
    highlight: "multi - PB",
    highlightSubtext: "India only",
    href: "/nvme",
  },
  {
    id: "cpu-compute",
    index: "04",
    title: "CPU Compute",
    specs: "Compute • memory • general",
    description:
      "General purpose, compute optimized, and memory optimized instances for your business needs.",
    highlight: "6 families",
    highlightSubtext: "spot available",
    href: "/cpu-pricing",
  },
  {
    id: "managed-kubernetes",
    index: "05",
    title: "Managed Kubernetes",
    specs: "GPU-aware",
    description:
      "Pre-configured device plugins, autoscaling. Production-ready in 4 minutes.",
    highlight: "GPU-aware",
    highlightSubtext: "managed CP",
    href: "/managed-kubernetes",
  },
] as const;
