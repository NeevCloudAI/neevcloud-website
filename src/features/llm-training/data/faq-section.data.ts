import type { FaqItem } from "@/shared/data/faq-section-types";

export const LLM_TRAINING_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "Which frameworks are supported for fine-tuning?",
    answer:
      "HuggingFace Transformers, DeepSpeed, Megatron-LM, Axolotl, and custom PyTorch scripts. Pre-configured templates available for LoRA, QLoRA, and full fine-tuning workflows.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "What GPU configurations are available?",
    answer:
      "Single GPU (H100, A100, A30), multi-GPU nodes (8x H100, 8x A100), and multi-node clusters (16, 32, 64+ GPUs) with InfiniBand networking for distributed training.",
  },
  {
    id: 3,
    category: "Scaling",
    question: "Can I fine-tune 70B+ parameter models?",
    answer:
      "Yes. Parameter-efficient methods like LoRA and QLoRA enable fine-tuning large models on single GPUs. Full fine-tuning of 70B+ models requires multi-GPU or multi-node clusters.",
  },
  {
    id: 4,
    category: "Billing",
    question: "How is fine-tuning billed?",
    answer:
      "Per-second GPU billing with on-demand and reserved capacity options. Spot instances available with auto-resume from checkpointing for cost-effective training runs.",
  },
  {
    id: 5,
    category: "Networking",
    question: "Where is training compute located?",
    answer:
      "All compute runs in India-resident data centers with fast NVMe storage and InfiniBand networking between nodes. Data sovereignty and DPDP Act compliance supported.",
  },
];
