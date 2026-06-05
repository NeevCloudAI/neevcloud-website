import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const AI_INFERENCE_CAPABILITIES_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "bring-your-own-model",
    label: "01 · CONTAINER-NATIVE",
    iconSrc: "/icons/cpu.svg",
    iconAlt: "Bring your own model",
    size: "small",
    title: "Bring Your Own Model",
    description:
      "Deploy HuggingFace, fine-tuned, or custom model weights. We support standard formats and fine-tuning outputs.",
    bullets: [
      { id: 1, title: "HuggingFace Hub models" },
      { id: 2, title: "Custom fine-tuned weights" },
      { id: 3, title: "LoRA/QLoRA adapters" },
      { id: 4, title: "GGUF quantized models" },
    ],
  },
  {
    id: "managed-infrastructure",
    label: "02 · FULL OS CONTROL",
    iconSrc: "/icons/shield.svg",
    iconAlt: "Managed infrastructure",
    size: "small",
    title: "Managed Infrastructure",
    description:
      "No GPU provisioning or model server configuration required. We handle deployment, scaling, and monitoring.",
    bullets: [
      { id: 1, title: "GPU allocation and optimization" },
      { id: 2, title: "Auto-scaling based on load" },
      { id: 3, title: "Model server deployment (vLLM, TGI)" },
      { id: 4, title: "Health monitoring" },
    ],
  },
  {
    id: "pay-per-token",
    label: "03 · USAGE-BASED",
    iconSrc: "/icons/server.svg",
    iconAlt: "Pay per token",
    size: "small",
    title: "Pay-Per-Token",
    description:
      "Cost-efficient pricing that scales with actual usage. No idle compute charges or minimum commitments.",
    bullets: [
      { id: 1, title: "Input tokens billed separately" },
      { id: 2, title: "Output tokens billed separately" },
      { id: 3, title: "No minimum commitment" },
      { id: 4, title: "Free tier: 2,00,000 tokens/day" },
    ],
  },
] as const;
