export type GpuPricingCommitment = {
  price: string;
  savePercent: number;
};

export type GpuPricingStatus = {
  text: "notify" | "·ready";
  textVariant: "primary" | "orange-50";
};

export type GpuPricingRow = {
  sku: string;
  vram: string;
  cpu: string;
  ram: string;
  hourly: string;
  threeMonths: GpuPricingCommitment;
  sixMonths: GpuPricingCommitment;
  oneYear: GpuPricingCommitment;
  status: GpuPricingStatus;
};

export const GPU_PRICING_TABLE_ROWS: GpuPricingRow[] = [
  {
    sku: "rtx-3090",
    vram: "24GB",
    cpu: "24",
    ram: "112GB",
    hourly: "₹48.60",
    threeMonths: { price: "₹48.60", savePercent: 2 },
    sixMonths: { price: "₹48.60", savePercent: 7 },
    oneYear: { price: "₹48.60", savePercent: 12 },
    status: { text: "notify", textVariant: "orange-50" },
  },
  {
    sku: "a30",
    vram: "32GB",
    cpu: "16",
    ram: "192GB",
    hourly: "₹48.60",
    threeMonths: { price: "₹48.60", savePercent: 2 },
    sixMonths: { price: "₹48.60", savePercent: 7 },
    oneYear: { price: "₹48.60", savePercent: 12 },
    status: { text: "·ready", textVariant: "primary" },
  },
  {
    sku: "rtx-5090",
    vram: "32GB",
    cpu: "12",
    ram: "96GB",
    hourly: "₹48.60",
    threeMonths: { price: "₹48.60", savePercent: 2 },
    sixMonths: { price: "₹48.60", savePercent: 7 },
    oneYear: { price: "₹48.60", savePercent: 12 },
    status: { text: "·ready", textVariant: "primary" },
  },
  {
    sku: "a100",
    vram: "32GB",
    cpu: "20",
    ram: "125GB",
    hourly: "₹48.60",
    threeMonths: { price: "₹48.60", savePercent: 2 },
    sixMonths: { price: "₹48.60", savePercent: 7 },
    oneYear: { price: "₹48.60", savePercent: 12 },
    status: { text: "notify", textVariant: "orange-50" },
  },
  {
    sku: "h100",
    vram: "80GB",
    cpu: "20",
    ram: "125GB",
    hourly: "₹48.60",
    threeMonths: { price: "₹48.60", savePercent: 2 },
    sixMonths: { price: "₹48.60", savePercent: 7 },
    oneYear: { price: "₹48.60", savePercent: 12 },
    status: { text: "notify", textVariant: "orange-50" },
  },
  {
    sku: "h200",
    vram: "141GB",
    cpu: "20",
    ram: "125GB",
    hourly: "₹48.60",
    threeMonths: { price: "₹48.60", savePercent: 2 },
    sixMonths: { price: "₹48.60", savePercent: 7 },
    oneYear: { price: "₹48.60", savePercent: 12 },
    status: { text: "notify", textVariant: "orange-50" },
  },
];
