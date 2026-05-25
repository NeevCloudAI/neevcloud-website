export type EnterpriseSecurityFeature = {
  id: number;
  title: string;
  badge?: string;
};

export type EnterpriseSecurityCategory = {
  icon: string;
  title: string;
  description: string;
  features: readonly EnterpriseSecurityFeature[];
};

export type EnterpriseSecurityCardProps = {
  category: EnterpriseSecurityCategory;
  className?: string;
  iconSize?: number;
};
