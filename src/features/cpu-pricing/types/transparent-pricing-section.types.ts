import type { LucideIcon } from "@/shared/icons/lucide-icon-map";

export type CpuInstanceTypeId =
  | "general-purpose"
  | "cpu-optimized"
  | "memory-optimized";

export type CpuOsType = "linux" | "windows";

export type CpuInstanceTypeOption = {
  id: CpuInstanceTypeId;
  label: string;
  icon: LucideIcon;
};

export type CpuInstanceTypeConfig = {
  title: string;
  subtitle: string;
};

export type CpuPricingRow = {
  id: string;
  name: string;
  vcpus: string;
  ram: string;
  storage: string;
  linuxPriceMonthly: number;
  windowsPriceMonthly: number;
};

export type CpuStorageVolumeOption = {
  id: string;
  label: string;
  description: string;
  pricePerGb: number;
};

export type CpuOsToggleOption = {
  id: CpuOsType;
  label: string;
};

export type CpuTransparentPricingInstanceTypeSidebarProps = {
  activeType: CpuInstanceTypeId;
  onTypeSelect: (id: CpuInstanceTypeId) => void;
};

export type CpuTransparentPricingTableProps = {
  activeType: CpuInstanceTypeId;
  activeLabel: string;
  activeConfig: CpuInstanceTypeConfig;
  os: CpuOsType;
  rows: readonly CpuPricingRow[];
};

export type CpuTransparentPricingTableRowProps = {
  row: CpuPricingRow;
  os: CpuOsType;
};

export type CpuTransparentPricingOsToggleProps = {
  os: CpuOsType;
  onOsSelect: (os: CpuOsType) => void;
};

export type CpuTransparentPricingPanelClientProps = {
  os: CpuOsType;
};

export type CpuTransparentPricingPanelProps = {
  os: CpuOsType;
};
