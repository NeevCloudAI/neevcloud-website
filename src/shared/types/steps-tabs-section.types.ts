import type { ReactNode } from "react";

export type StepsTabsSectionStep = {
  badgeLabel: string;
  title: string;
  description: string;
  features: readonly string[];
};

export type StepsTabsSectionProps = {
  heading: ReactNode;
  description?: ReactNode;
  steps: readonly StepsTabsSectionStep[];
  previews: readonly ReactNode[];
  ariaLabel?: string;
  tabIdPrefix?: string;
  className?: string;
  children?: ReactNode;
};
