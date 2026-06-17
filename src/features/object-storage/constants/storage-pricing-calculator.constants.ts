import type { StoragePricingTierId } from "../types/transparent-pricing-section.types";

export const MIN_ADDITIONAL_STORAGE_GB = 0;
export const MAX_ADDITIONAL_STORAGE_GB = 500;
export const DEFAULT_ADDITIONAL_STORAGE_GB = 100;
export const DEFAULT_STORAGE_TIER_ID: StoragePricingTierId =
  "infrequent-access";

export const INCLUDED_FEATURES = [
  "99.999999999% durability",
  "Multi-AZ replication",
  "Versioning support",
  "No cross-tenant contention",
  "Instant provisioning",
] as const;

export const EGRESS_PRICE_LABEL = "₹8.35/GB for internet egress";
