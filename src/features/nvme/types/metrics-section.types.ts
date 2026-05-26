import type { LucideIcon } from "lucide-react";

export type MetricCardData = {
  id: string;
  icon: LucideIcon;
  value: string;
  valueColor: "primary" | "black" | "tertiary" | "secondary" | "red-50";
  unit: string;
  label: string;
};
