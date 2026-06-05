import type { GridCard } from "@/shared/types/stats-grid-section.types";

export const COMPLETE_AI_CARDS: GridCard[] = [
  {
    id: "train",
    variant: "feature",
    icon: "/icons/train.svg",
    title: "Train Models",
    description:
      "Deploy GPU instances, start training. Scale from single GPUs to 256+ node clusters.",
  },
  {
    id: "inference",
    variant: "feature",
    icon: "/icons/inference.svg",
    title: "Deploy Inference",
    description:
      "Upload models, create endpoints, and serve predictions with automatic scaling.",
  },
  {
    id: "data",
    variant: "feature",
    icon: "/icons/data.svg",
    title: "Manage Data",
    description:
      "Store datasets and models on persistent storage. Access from any compute instance.",
  },
  {
    id: "pipelines",
    variant: "feature",
    icon: "/icons/pipelines.svg",
    title: "Run Pipelines",
    description:
      "Use CPU instances for preprocessing, databases, and orchestration alongside GPU workloads.",
  },
  {
    id: "monitor",
    variant: "feature",
    icon: "/icons/monitor.svg",
    title: "Monitor Everything",
    description:
      "Track resource usage, performance metrics, and costs from unified dashboard.",
  },
  {
    id: "scale",
    variant: "feature",
    icon: "/icons/scale.svg",
    title: "Scale Infrastructure",
    description:
      "Add resources as needs grow. Remove when projects complete. Pay only for actual usage.",
  },
];
