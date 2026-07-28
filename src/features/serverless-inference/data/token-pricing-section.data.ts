import { TokenPricingRow } from "../types/token-pricing-section.types";

export const TOKEN_PRICING_ROWS: TokenPricingRow[] = [
  {
    id: "llama-3.1-8b-instant",
    model: {
      title: "llama-3.1-8b-instant",
      description: "131k context · fastest",
    },
    params: "8B",
    context: "131k",
    input: "₹4.83",
    output: "₹7.73",
  },
  {
    id: "llama-3.3-70b-versatile",
    model: {
      title: "llama-3.3-70b-versatile",
      description: "131k context · balanced",
    },
    params: "70B",
    context: "131k",
    input: "₹57.01",
    output: "₹76.33",
  },
  {
    id: "deepseek-v3-2",
    model: {
      title: "deepseek-v3.2",
      description: "128k context · long-context reasoning",
    },
    params: "671B total",
    context: "128k",
    input: "₹27.05",
    output: "₹40.58",
  },
  {
    id: "gpt-oss-120b",
    model: {
      title: "gpt-oss-120b",
      description: "128k context · general purpose",
    },
    params: "120B",
    context: "128k",
    input: "₹9.66",
    output: "₹48.31",
  },
];
