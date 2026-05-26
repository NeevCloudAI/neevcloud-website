import type { ComputePillVariant } from "@/features/cpu-cluster/types/private-network-section.types";

export const FLOW_ARROW_COUNT = 5;
export const INSTANCE_STAT_SEPARATOR = "•";
export const FLOW_SUMMARY_BADGE_TEXT = "₹0 egress · < 0.5 ms";
export const FLOW_SUMMARY_REGION_TEXT = "Private Network . Same Region";
export const ZERO_EGRESS_TITLE = "Zero Egress Charges";
export const ZERO_EGRESS_PRICE = "₹0";
export const ZERO_EGRESS_DESCRIPTION =
  "Free data transfer between CPU and GPU instances within the same region. Build complex AI infrastructure without worrying about bandwidth costs.";
export const ZERO_EGRESS_DESCRIPTION_LINES = [
  "Free data transfer between CPU and GPU instances within the same region.",
  "Build complex AI infrastructure without worrying about bandwidth costs.",
] as const;

export const PILL_VARIANT_STYLES: Record<ComputePillVariant, string> = {
  cpu: "bg-primary text-white",
  gpu: "bg-red-50 text-white",
};
