import type { ApplicationCardItem } from "@/shared/types/application-card.types";

export const AI_DEVELOPMENT_SECTION = {
  titlePrefix: "Built for",
  titleHighlight: "AI development",
  description:
    "Real-world deployments across government, healthcare, agriculture, education, and research, powered by infrastructure that respects sovereignty.",
} as const;

export const AI_DEVELOPMENT_CARDS: readonly ApplicationCardItem[] = [
  {
    id: "one-interface",
    className: "md:col-span-3 md:row-span-2",
    label: "01 - FLAGSHIP",
    title: "One interface for everything",
    description:
      "Manage GPUs, inference, storage, and CPU compute from a single dashboard. No jumping between separate portals or tools.",
    icon: "/icons/spark.svg",
    image: "/images/webp/buildings.webp",
    imageSpacing: true,
    theme: "light",
  },
  {
    id: "deploy-minutes",
    className: "md:col-span-3",
    label: "02",
    title: "Deploy in minutes, not days",
    description:
      "Click deploy, get infrastructure. No approval workflows, no waiting lists. Resources ready in 2-5 minutes.",
    icon: "/icons/health2.svg",
    theme: "light",
  },
  {
    id: "preconfigured-templates",
    className: "md:col-span-3",
    label: "03",
    title: "Pre-Configured Templates",
    description:
      "Launch instances with PyTorch, TensorFlow, Hugging Face, vLLM, or Stable Diffusion already installed.",
    icon: "/icons/template.svg",
    theme: "light",
  },
  {
    id: "real-time-monitoring",
    className: "md:col-span-2",
    label: "04",
    title: "Real-Time Monitoring",
    description:
      "Track GPU utilization, training progress, inference latency, and costs as they happen. Set alerts for thresholds.",
    icon: "/icons/robot.svg",
    theme: "light",
  },
  {
    id: "transparent-billing",
    className: "md:col-span-2",
    label: "05 - PRICING",
    title: "Transparent Billing",
    description:
      "Real-time cost tracking by service. Per-second billing for compute, per-token for inference. No hidden fees.",
    icon: "/icons/star-shield.svg",
    theme: "dark",
  },
  {
    id: "api-cli-access",
    className: "md:col-span-2",
    label: "06",
    title: "API and CLI Access",
    description:
      "Programmatic control through REST API or command-line interface. Integrate with CI/CD, scripts, and workflows.",
    icon: "/icons/idea2.svg",
    theme: "light",
  },
] as const;
