import type { ReactNode } from "react";

export type ExploreApiStep = {
  badgeLabel: string;
  title: string;
  description: string;
};

export type ExploreApiStepPreviewProps = {
  stepIndex: number;
};

export type ExploreApiStepsTabsClientProps = {
  heading: ReactNode;
  description?: ReactNode;
  steps: readonly ExploreApiStep[];
  previews: readonly ReactNode[];
  ariaLabel?: string;
  tabIdPrefix?: string;
  children?: ReactNode;
};
