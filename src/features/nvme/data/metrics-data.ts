import type { LucideIconName } from "@/shared/icons/lucide-icon-map";

export type MetricCardData = {
  id: string;
  icon: LucideIconName;
  value: string;
  valueColor: "primary" | "black" | "tertiary" | "secondary" | "red-50";
  unit: string;
  label: string;
};

export const METRIC_CARDS: readonly MetricCardData[] = [
  {
    id: "sequential-read",
    icon: "move-right",
    value: "7,000",
    valueColor: "primary",
    unit: "MB/s",
    label: "Sequential read speed",
  },
  {
    id: "sequential-write",
    icon: "move-left",
    value: "5,000",
    valueColor: "tertiary",
    unit: "MB/s",
    label: "Sequential write speed",
  },
  {
    id: "random-iops",
    icon: "shuffle",
    value: "1M+",
    valueColor: "secondary",
    unit: "IOPS",
    label: "Random 4K operations/sec",
  },
  {
    id: "free-storage",
    icon: "gift",
    value: "25",
    valueColor: "red-50",
    unit: "GB",
    label: "Free with every GPU instance",
  },
] as const;
