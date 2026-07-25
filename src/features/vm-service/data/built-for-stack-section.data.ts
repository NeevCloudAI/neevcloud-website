import { CircleCheck } from "@/shared/icons/lucide-icon-map";
import type { FeatureCardProps } from "@/shared/components/feature-card";

export const VM_SERVICE_BUILT_FOR_STACK_ITEMS: readonly FeatureCardProps[] = [
  {
    title: "Data Preprocessing",
    description:
      "Feature engineering, ETL, and dataset preparation next to your training GPUs.",
    lucideIcon: CircleCheck,
  },
  {
    title: "APIs & Backends",
    description:
      "Serve model outputs through low-latency APIs colocated with inference.",
    lucideIcon: CircleCheck,
  },
  {
    title: "Databases",
    description:
      "Run Postgres, Redis, or vector databases in the same network as compute.",
    lucideIcon: CircleCheck,
  },
  {
    title: "Dev Environments",
    description:
      "Lightweight sandboxes and CI runners without paying GPU prices.",
    lucideIcon: CircleCheck,
  },
] as const;
