import type { FaqItem } from "@/shared/data/faq-section-types";

export const GPU_PRICING_FAQ: readonly FaqItem[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "Which GPU types are available on NeevCloud?",
    answer:
      "H100 (80GB), A100 (80GB), and L40S (48GB) for single-GPU workloads. Multi-GPU and multi-node configurations are available for distributed training and large-scale inference.",
  },
  {
    id: 2,
    category: "Pricing",
    question: "How is GPU compute billed?",
    answer:
      "Instances are billed per second with hourly rates shown for reference. On-demand pricing has no minimum commitment. Reserved commitments offer discounted rates for predictable workloads.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "What is the difference between GPU AI Service and GPU VM Service?",
    answer:
      "GPU AI Service runs Kubernetes-managed GPU pods for containerized workloads. GPU VM Service provides full Linux VMs with direct GPU access for custom drivers, legacy apps, or full OS control.",
  },
  {
    id: 4,
    category: "Billing",
    question: "What is included in the hourly GPU price?",
    answer:
      "GPU memory, vCPU, RAM, InfiniBand networking, NVMe-attached storage, and DDoS protection. Persistent volumes and floating IPs are billed separately.",
  },
  {
    id: 5,
    category: "Networking",
    question: "Can GPU instances communicate with CPU instances without egress charges?",
    answer:
      "Yes. GPU and CPU instances in the same India region share a private network. Inter-instance traffic within the region is free with no bandwidth limits.",
  },
] as const;
