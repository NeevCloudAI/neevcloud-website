import type { FaqItem } from "@/shared/data/faq-section-types";

export const VM_SERVICE_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "General",
    question: "What are NeevCloud VMs?",
    answer:
      "On-demand CPU and GPU virtual machines purpose-built for AI/ML. You choose the hardware, attach a pre-built AI template or bare OS, and connect via SSH, provisioned in minutes with no long-term commitment.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Should I choose a CPU VM or a GPU VM?",
    answer:
      "If your workload uses GPU-accelerated libraries like PyTorch or TensorFlow at runtime, choose a GPU VM. For data preprocessing, evaluation, orchestration, or lightweight inference that doesn't call a CUDA kernel, a CPU VM is the more cost-effective choice.",
  },
  {
    id: 3,
    category: "General",
    question: "Which GPUs are available?",
    answer:
      "NVIDIA T4, A30, RTX 5090, H100, and H200, spanning entry-level prototyping to flagship large-scale training. Multi-GPU configurations are available for large runs.",
  },
  {
    id: 4,
    category: "Getting Started",
    question: "How fast can I get started?",
    answer:
      "VMs provision in minutes. Attach an AI template for a ready-to-use environment, or start from a bare OS if you want full control, then connect via SSH.",
  },
  {
    id: 5,
    category: "General",
    question: "Can I run production inference on a VM?",
    answer:
      "Yes. GPU VMs support high-throughput serving with vLLM, TGI, Triton Inference Server, and TorchServe behind OpenAI-compatible endpoints.",
  },
  {
    id: 6,
    category: "Compliance",
    question: "Where are the VMs hosted?",
    answer:
      "All GPU and CPU VMs run from the as-south-1 region in Indore, India, offering low-latency access across the country and support for data residency requirements.",
  },
];
