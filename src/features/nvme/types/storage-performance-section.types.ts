import type { LucideIcon } from "@/shared/icons/lucide-icon-map";

export type StoragePerformanceFeature = {
  text: string;
  highlight?: string;
};

export type StoragePerformanceCardData = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: readonly StoragePerformanceFeature[];
};
