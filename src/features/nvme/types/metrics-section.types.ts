import type { LucideIcon } from "@/shared/icons/lucide-icon-map";

export type MetricCardData = {
  id: string;
  icon: LucideIcon;
  value: string;
  valueColor: "primary" | "black" | "deep-blue" | "pulse-red" | "deep-forest";
  unit: string;
  label: string;
};
