import type { ApplicationCardItem } from "@/shared/types/application-card.types";

export const LLM_TRAINING_APPLICATION_CARDS: readonly ApplicationCardItem[] = [
  {
    id: "multi-modal-training",
    className: "md:col-span-3 md:row-span-2",
    label: "01 - FEATURED",
    title: "Multi-Modal Training",
    description:
      "Fine-tune vision-language models or add multimodal capabilities to LLMs. Train on image-text pairs or document understanding tasks.",
    icon: "/icons/intelligence-surveillance.svg",
    image: "/images/media.png",
    imageSpacing: true,
    theme: "gray",
  },
  {
    id: "domain-adaptation",
    className: "md:col-span-3",
    label: "02",
    title: "Domain Adaptation",
    description:
      "Adapt foundation models to specialized domains like legal, medical, or financial. Train on your proprietary data while maintaining compliance.",
    icon: "/icons/autonomous-systems.svg",
    theme: "gray",
  },
  {
    id: "instruction-tuning",
    className: "md:col-span-3",
    label: "03",
    title: "Instruction Tuning",
    description:
      "Transform base models into instruction-following assistants. Create models that respond to specific commands and formatting requirements.",
    icon: "/icons/secure-communications.svg",
    theme: "gray",
  },
  {
    id: "rlhf-alignment",
    className: "md:col-span-3",
    label: "04",
    title: "RLHF and Alignment",
    description:
      "Align models with human preferences using reinforcement learning. Implement reward models and PPO training for better outputs.",
    icon: "/icons/cyber-defence.svg",
    theme: "gray",
  },
  {
    id: "parameter-efficient",
    className: "md:col-span-3",
    label: "05",
    title: "Parameter-Efficient Fine-Tuning",
    description:
      "Use LoRA, QLoRA, or prefix tuning to adapt large models with minimal compute. Fine-tune 70B+ models on single GPUs.",
    icon: "/icons/research-development.svg",
    theme: "gray",
  },
] as const;
