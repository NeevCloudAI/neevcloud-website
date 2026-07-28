export type CpuInstanceFamilyId =
  | "general-purpose"
  | "compute-optimized"
  | "memory-optimized";

export type CpuConfigurationRow = {
  configuration: string;
  vcpu: string;
  ram: string;
  config: string;
  priceOnDemand: string;
  price1Month?: string;
  price3Month: string;
  price6Month: string;
  price1Year: string;
};

export type CpuInstanceFamily = {
  id: CpuInstanceFamilyId;
  number: string;
  sidebarLabel: string;
  titleName: string;
  subtitle: string;
  footer: string;
  rows: CpuConfigurationRow[];
};
