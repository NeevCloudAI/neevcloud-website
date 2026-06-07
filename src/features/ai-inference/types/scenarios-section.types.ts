import type { LucideIcon } from "@/shared/icons/lucide-icon-map";

export type AiInferenceScenarioItem = {
  id: string;
  icon: LucideIcon;
  iconLabel: string;
  title: string;
  description: string;
  tags: readonly string[];
};
