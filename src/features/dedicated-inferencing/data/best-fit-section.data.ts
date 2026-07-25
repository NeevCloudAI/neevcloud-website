import {
  Gauge,
  Network,
  HardDrive,
  Shield,
  Server,
  CircleCheck,
} from "@/shared/icons/lucide-icon-map";
import type { FeatureCardProps } from "@/shared/components/feature-card";

export const DEDICATED_INFERENCING_BEST_FIT_ITEMS: readonly FeatureCardProps[] =
  [
    {
      title: "Production Apps with Latency Targets",
      description:
        "Meet strict SLAs with consistent response times from a warm, dedicated GPU.",
      lucideIcon: Gauge,
    },
    {
      title: "Continuous High-Throughput Workloads",
      description:
        "Keep pipelines running without queue contention or noisy-neighbor issues.",
      lucideIcon: Network,
    },
    {
      title: "Large Models That Need Full VRAM",
      description:
        "Run large checkpoints without memory pressure from other tenants.",
      lucideIcon: HardDrive,
    },
    {
      title: "Private or Gated Hugging Face Repos",
      description:
        "Deploy proprietary or gated models securely on isolated hardware.",
      lucideIcon: Shield,
    },
    {
      title: "Custom Serving Setups",
      description: "Use Extra Arguments to tune serving frameworks for your exact needs.",
      lucideIcon: Server,
    },
    {
      title: "Always-On Assistants",
      description:
        "Keep conversational agents and APIs responsive around the clock.",
      lucideIcon: CircleCheck,
    },
  ] as const;
