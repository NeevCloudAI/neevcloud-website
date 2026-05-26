import { TokenPricingTableHeader } from "../types/token-pricing-section.types";

export const TOKEN_PRICING_TABLE_HEADERS: readonly TokenPricingTableHeader[] = [
  { id: "model", name: "model" },
  { id: "params", name: "params" },
  { id: "context", name: "context" },
  { id: "input", name: "input ₹/1M" },
  { id: "output", name: "output ₹/1M" },
  { id: "free", name: "free tier" },
] as const;

export const TOKEN_PRICING_TABLE_CELL_CLASS =
  "px-3 py-2.5 text-left align-middle whitespace-nowrap first:pl-0 last:pr-0";
