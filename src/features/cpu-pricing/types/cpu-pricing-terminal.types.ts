import type { CpuInstanceTypeId } from "./transparent-pricing-section.types";

export type CpuPricingFamilyId = CpuInstanceTypeId;

export type CpuPricingCommitmentRow = {
  commitment: string;
  discount: string;
  examplePrice: string;
};

export type CpuPricingFamily = {
  id: CpuPricingFamilyId;
  titleName: string;
  commitmentSubtitle: string;
  commitmentExampleLabel: string;
  commitmentRows: readonly CpuPricingCommitmentRow[];
};
