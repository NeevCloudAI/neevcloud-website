export type StoragePricingTierId = "standard" | "infrequent-access" | "glacier";

export type StoragePricingTier = {
  id: StoragePricingTierId;
  label: string;
  pricePerGbMonth: number;
};

export type TransparentPricingTerminalRow = {
  tier: string;
  price: string;
};
