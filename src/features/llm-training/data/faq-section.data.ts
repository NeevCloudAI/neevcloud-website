import type { FaqItem } from "@/shared/data/faq-section-types";

export const LLM_TRAINING_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "What frameworks are supported?",
    answer:
      "All major frameworks work: Hugging Face Transformers, DeepSpeed, Megatron-LM, Axolotl, PyTorch FSDP. Bring your own training scripts or use pre-configured templates.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Can I fine-tune 70B+ models on single GPUs?",
    answer:
      "Yes. Use QLoRA or LoRA with 4-bit quantization to fine-tune 70B models on a single H100 (80GB). For full fine-tuning, use multi-GPU setups.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "How do checkpoints work?",
    answer:
      "Checkpoints auto-save to S3-compatible object storage. They persist across instance restarts and survive spot preemptions. Resume training from any checkpoint.",
  },
  {
    id: 4,
    category: "Billing",
    question: "What's the fastest storage option?",
    answer:
      "Local NVMe delivers 7 GB/s reads. Copy datasets from object storage to local NVMe storage at startup to maximum training throughput.",
  },
];
