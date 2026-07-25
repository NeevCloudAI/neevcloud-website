import { Zap, ShieldCheck, Users } from "@/shared/icons/lucide-icon-map";
import type { FeatureCardProps } from "@/shared/components/feature-card";

export const AI_TEMPLATES_WHY_ITEMS: readonly FeatureCardProps[] = [
  {
    title: "Deploy in Seconds",
    description:
      "Launch a fully configured environment in under 20 seconds. Zero setup, zero manual dependency management.",
    lucideIcon: Zap,
  },
  {
    title: "Pre-Tested Compatibility",
    description:
      "Every template is validated for GPU driver, CUDA, and framework compatibility — so nothing breaks on first run.",
    lucideIcon: ShieldCheck,
  },
  {
    title: "Team Standardization",
    description:
      "Build custom templates for your team to standardize reproducible environments across projects.",
    lucideIcon: Users,
  },
] as const;
