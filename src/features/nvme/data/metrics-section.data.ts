import {
  Gift,
  MoveLeft,
  MoveRight,
  Shuffle,
} from "@/shared/icons/lucide-icon-map";
import { MetricCardData } from "../types/metrics-section.types";

export const METRIC_CARDS: readonly MetricCardData[] = [
  {
    id: "sequential-read",
    icon: MoveRight,
    value: "7,000",
    valueColor: "primary",
    unit: "MB/s",
    label: "Sequential read speed",
  },
  {
    id: "sequential-write",
    icon: MoveLeft,
    value: "5,000",
    valueColor: "tertiary",
    unit: "MB/s",
    label: "Sequential write speed",
  },
  {
    id: "random-iops",
    icon: Shuffle,
    value: "1M+",
    valueColor: "secondary",
    unit: "IOPS",
    label: "Random 4K operations/sec",
  },
  {
    id: "free-storage",
    icon: Gift,
    value: "25",
    valueColor: "red-50",
    unit: "GB",
    label: "Free with every GPU instance",
  },
] as const;
