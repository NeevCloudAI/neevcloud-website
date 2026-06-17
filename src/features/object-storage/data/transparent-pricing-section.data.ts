import type {
  StoragePricingTier,
  TransparentPricingTerminalRow,
} from "../types/transparent-pricing-section.types";

export const STORAGE_PRICING_TIERS: readonly StoragePricingTier[] = [
  {
    id: "standard",
    label: "Standard",
    pricePerGbMonth: 8.35,
  },
  {
    id: "infrequent-access",
    label: "Infrequent Access",
    pricePerGbMonth: 4.17,
  },
  {
    id: "glacier",
    label: "Glacier",
    pricePerGbMonth: 2.09,
  },
] as const;

export const TRANSPARENT_PRICING_TERMINAL_ROWS: readonly TransparentPricingTerminalRow[] =
  [
    { tier: "Standard", price: "₹8.35" },
    { tier: "Infrequent Access", price: "₹4.17" },
    { tier: "Glacier", price: "₹2.09" },
  ] as const;
