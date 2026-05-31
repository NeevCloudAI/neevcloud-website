import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const LLM_TRAINING_INFRASTRUCTURE_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "multi-gpu",
    label: "01",
    iconSrc: "/icons/shield.svg",
    iconAlt: "Multi-GPU configurations",
    title: "Multi-GPU Configurations",
    description:
      "Single-node to distributed setups for large model fine-tuning. Scale from 1 GPU to 64+ GPU clusters with InfiniBand networking.",
    bullets: [
      { id: 1, title: "Single GPU (H100, A100, A30)" },
      { id: 2, title: "Multi-GPU nodes (8x H100, 8x A100)" },
      { id: 3, title: "Multi-node clusters (16, 32, 64+ GPUs)" },
      { id: 4, title: "Custom configurations on request" },
    ],
  },
  {
    id: "framework-agnostic",
    label: "02 · FLEXIBILITY",
    iconSrc: "/icons/bank.svg",
    iconAlt: "Framework agnostic training",
    title: "Framework Agnostic",
    description:
      "HuggingFace Transformers, DeepSpeed, Megatron-LM, Axolotl, all supported. No vendor lock-in, use the tools you already know.",
    bullets: [
      { id: 1, title: "Megatron-LM for large-scale training" },
      { id: 2, title: "Axolotl for unified fine-tuning" },
      { id: 3, title: "DeepSpeed + ZeRO optimization" },
      { id: 4, title: "Custom training scripts" },
    ],
  },
  {
    id: "ai-templates",
    label: "03",
    iconSrc: "/icons/file.svg",
    iconAlt: "AI templates for fine-tuning",
    title: "AI Templates",
    description:
      "Pre-configured fine-tuning environments to start in minutes. No infrastructure setup, just launch and train.",
    bullets: [
      { id: 1, title: "Domain adaptation with LoRA/QLoRA" },
      { id: 2, title: "Multi-modal fine-tuning" },
      { id: 3, title: "RLHF with PPO" },
      { id: 4, title: "Custom dataset preprocessing" },
    ],
  },
] as const;
