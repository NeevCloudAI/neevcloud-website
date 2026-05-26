export type CpuInstanceFamilyId =
  | "general-purpose"
  | "compute-optimized"
  | "memory-optimized";

export type CpuConfigurationRow = {
  configuration: string;
  vcpu: string;
  ram: string;
  storage: string;
  bestFor: string;
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
