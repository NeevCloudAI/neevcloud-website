import { FeatureCardProps } from "@/shared/components/feature-card";

export const COMPLETE_AI_CARDS: FeatureCardProps[] = [
  {
    title: "Train Models",
    image: "/icons/train.svg",
    description:
      "Deploy GPU instances, start training. Scale from single GPUs to 256+ node clusters.",
  },
  {
    title: "Deploy Inference",
    image: "/icons/inference.svg",
    description:
      "Upload models, create endpoints, and serve predictions with automatic scaling.",
  },
  {
    title: "Manage Data",
    image: "/icons/data.svg",
    description:
      "Store datasets and models on persistent storage. Access from any compute instance.",
  },
  {
    title: "Run Pipelines",
    image: "/icons/pipelines.svg",
    description:
      "Use CPU instances for preprocessing, databases, and orchestration alongside GPU workloads.",
  },
  {
    title: "Monitor Everything",
    image: "/icons/monitor.svg",
    description:
      "Track resource usage, performance metrics, and costs from unified dashboard.",
  },
  {
    title: "Scale Infrastructure",
    image: "/icons/scale.svg",
    description:
      "Add resources as needs grow. Remove when projects complete. Pay only for actual usage.",
  },
];
