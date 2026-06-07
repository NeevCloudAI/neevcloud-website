import type { LucideIcon } from "@/shared/icons/lucide-icon-map";

export type CpuInstanceTypeId =
  | "general-purpose"
  | "cpu-optimized"
  | "io-optimized"
  | "memory-optimized"
  | "smart-servers";

export type CpuInstanceTypeOption = {
  id: CpuInstanceTypeId;
  label: string;
  icon: LucideIcon;
};

export type CpuPricingRow = {
  id: string;
  name: string;
  vcpus: string;
  ram: string;
  pricePerHour: string;
  bestFor: string;
};

export type CpuTransparentPricingTerminalHeaderProps = {
  activeLabel: string;
};

export type CpuTransparentPricingInstanceTypeSidebarProps = {
  activeType: CpuInstanceTypeId;
  onTypeSelect: (id: CpuInstanceTypeId) => void;
};

export type CpuTransparentPricingTableProps = {
  activeType: CpuInstanceTypeId;
  activeLabel: string;
  activeDescription: string;
  rows: readonly CpuPricingRow[];
};

export type CpuTransparentPricingTableRowProps = {
  row: CpuPricingRow;
};
