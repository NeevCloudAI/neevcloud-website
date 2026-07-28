export type GpuPricingCommitment = {
  price: string;
  savePercent: number;
};

export type GpuPricingStatus = {
  text: "notify" | "·ready";
  textVariant: "primary" | "yellow";
};

export type GpuPricingRow = {
  sku: string;
  config: string;
  vram: string;
  cpu: string;
  ram: string;
  hourly: string;
  oneMonth: GpuPricingCommitment;
  threeMonths: GpuPricingCommitment;
  sixMonths: GpuPricingCommitment;
  oneYear: GpuPricingCommitment;
  status: GpuPricingStatus;
};
