import { type LucideIcon } from "@/shared/icons/lucide-icon-map";

export type EnterpriseSecurityFeature = {
  id: number;
  title: string;
  badge?: string;
};

export type EnterpriseSecurityCategory = {
  icon?: string;
  lucideIcon?: LucideIcon;
  title: string;
  description: string;
  features: readonly EnterpriseSecurityFeature[];
};

export type EnterpriseSecurityCardProps = {
  category: EnterpriseSecurityCategory;
  className?: string;
  iconSize?: number;
};
