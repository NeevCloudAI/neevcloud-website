export type GpuChooseSectionPricingRow = {
  id: string;
  sku: string;
  skuSubtitle: string;
  hourly: string;
  threeMonthPrice: string;
  threeMonthSavings?: string;
  sixMonthCommitment: string;
  sixMonthSavings?: string;
  oneYearCommitment: string;
  oneYearSavings?: string;
};

export type GpuChooseSectionContent = {
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  terminalTitle: string;
  pricingCommand: string;
  pricingComment: string;
  tableHeaders: readonly string[];
  rows: readonly GpuChooseSectionPricingRow[];
  footerComment: string;
  terminalAriaLabel: string;
};

export type GpuChooseSectionProps = GpuChooseSectionContent & {
  className?: string;
};
