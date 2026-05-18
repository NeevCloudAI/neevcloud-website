export const TERMINAL_LINES = [
  { type: "command", text: "> model api list --pricing --currency=INR" },
  {
    type: "comment",
    text: "// fetched 4 models · per-requests billing · all amounts in ₹",
  },
];

export type PricingCategory = {
  category: string;
  pricePerRequest: string;
  avgLatency: string;
  categoryColor: "primary" | "red-50" | "yellow";
  priceColor: "primary" | "red-50" | "yellow";
  isCustom?: boolean;
};

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    category: "Text Models",
    pricePerRequest: "₹0.0001",
    avgLatency: "50-200ms",
    categoryColor: "primary",
    priceColor: "red-50",
  },
  {
    category: "Vision Models",
    pricePerRequest: "₹0.0003",
    avgLatency: "80-500ms",
    categoryColor: "primary",
    priceColor: "red-50",
  },
  {
    category: "Audio Models",
    pricePerRequest: "₹0.0002",
    avgLatency: "200-500ms",
    categoryColor: "primary",
    priceColor: "red-50",
  },
  {
    category: "Specialized",
    pricePerRequest: "Custom",
    avgLatency: "varies",
    categoryColor: "primary",
    priceColor: "red-50",
    isCustom: true,
  },
];

export const TERMINAL_FOOTER_LINES = [
  {
    text: "// All prices in INR. ",
    highlight: "Volume discounts kick in at 10M req/mo.",
    end: "",
  },
  {
    text: "// Enterprise: committed-use, dedicated capacity.",
    highlight: null,
    end: null,
  },
];

export type WorkloadMix = {
  label: string;
  defaultPercent: number;
  color: string;
};

export const WORKLOAD_MIX: WorkloadMix[] = [
  { label: "Text", defaultPercent: 70, color: "#00a78b" },
  { label: "Vision", defaultPercent: 20, color: "#00a78b" },
  { label: "Audio", defaultPercent: 10, color: "#00a78b" },
  { label: "Specialized", defaultPercent: 0, color: "#00a78b" },
];
