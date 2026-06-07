import type { LucideIcon } from "@/shared/icons/lucide-icon-map";

export type MetricCardData = {
  id: string;
  icon: LucideIcon;
  value: string;
  valueColor: "primary" | "black" | "tertiary" | "secondary" | "red-50";
  unit: string;
  label: string;
};
