import type { LucideIcon } from "lucide-react";

export type AiInferenceScenarioItem = {
  id: string;
  icon: LucideIcon;
  iconLabel: string;
  title: string;
  description: string;
  tags: readonly string[];
};
