import { TokenPricingRow } from "../types/token-pricing-section.types";

export const TOKEN_PRICING_ROWS: TokenPricingRow[] = [
  {
    id: "llama-3.1-8b-instruct",
    model: {
      title: "llama-3.1-8b-instruct",
      description: "128k context · fastest",
    },
    params: "8B",
    context: "128k",
    input: "₹4.17",
    output: "₹6.68",
    free: "Yes",
  },
  {
    id: "llama-3.1-70b-instruct",
    model: {
      title: "llama-3.1-70b-instruct",
      description: "128k context · balanced",
    },
    params: "70B",
    context: "128k",
    input: "₹22.55",
    output: "₹70.97",
    free: "Yes",
  },
  {
    id: "llama-3.1-405b-instruct",
    model: {
      title: "llama-3.1-405b-instruct",
      description: "128k context · frontier",
    },
    params: "405B",
    context: "128k",
    input: "₹73.48",
    output: "₹100.20",
    free: "",
  },
  {
    id: "gpt-oss-120b",
    model: {
      title: "gpt-oss-120b",
      description: "128k context · general purpose",
    },
    params: "120B",
    context: "128k",
    input: "₹41.75",
    output: "₹125.25",
    free: "",
  },
];
