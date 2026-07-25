import { Play, ShieldCheck, Users } from "@/shared/icons/lucide-icon-map";
import type { FeatureCardProps } from "@/shared/components/feature-card";

export const AI_TEMPLATES_KEY_BENEFITS_ITEMS: readonly FeatureCardProps[] = [
  {
    title: "One-Click Launch",
    description:
      "Deploy any template in seconds — no CLI juggling, no config files.",
    lucideIcon: Play,
  },
  {
    title: "Version-Locked",
    description:
      "Reproducible builds with pinned framework and driver versions.",
    lucideIcon: ShieldCheck,
  },
  {
    title: "Custom Templates",
    description:
      "Save and share team-specific images for consistent development.",
    lucideIcon: Users,
  },
] as const;
