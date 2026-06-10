export type GpuHeroSectionContent = {
  badgeText: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  titleSecondary?: string;
  description: string;
  bulletPoints?: readonly string[];
  features: readonly string[];
  pricingPrefix: string;
  pricingAmount: string;
  pricingFooter: string;
};

export type GpuHeroSectionProps = GpuHeroSectionContent & {
  className?: string;
};
