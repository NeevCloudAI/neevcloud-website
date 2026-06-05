export type GpuInstanceFamilyId = "single-gpu" | "multi-gpu" | "multi-node";

export type GpuInstanceFamilyOption = {
  id: GpuInstanceFamilyId;
  number: string;
  label: string;
};

export type GpuPricingRow = {
  id: string;
  gpuType: string;
  memory: string;
  pricePerHour: string;
  typicalWorkload: string;
};

export type GpuInstanceFamily = {
  id: GpuInstanceFamilyId;
  number: string;
  sidebarLabel: string;
  titleName: string;
  subtitle: string;
  footer: string;
  rows: readonly GpuPricingRow[];
};

export type GpuTransparentPricingModelFamilySidebarProps = {
  activeFamily: GpuInstanceFamilyId;
  onFamilySelect: (id: GpuInstanceFamilyId) => void;
};

export type GpuTransparentPricingTableProps = {
  family: GpuInstanceFamily;
};

export type GpuTransparentPricingTableRowProps = {
  row: GpuPricingRow;
};
