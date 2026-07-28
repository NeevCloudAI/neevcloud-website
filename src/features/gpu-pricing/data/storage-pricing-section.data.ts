import type { GpuStoragePricingItem } from "../types/storage-pricing-section.types";

export const GPU_STORAGE_PRICING_ITEMS: readonly GpuStoragePricingItem[] = [
  // {
  //   id: "local-nvme",
  //   title: "Local NVMe",
  //   price: "₹4.17",
  //   priceUnit: "/GB/hour",
  //   footnote: "First 25GB free per GPU",
  // },
  {
    id: "network-storage",
    title: "Network Storage",
    price: "₹2.21",
    priceUnit: "/GB/month",
    footnote: "S3-compatible",
  },
  {
    id: "egress-india",
    title: "Egress (India)",
    price: "₹0",
    footnote: "Zero cost within India region",
  },
] as const;
