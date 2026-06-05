export type DeploymentAdvantage = "container" | "vm";

export type DeploymentComparisonCell = {
  value: string;
  advantage?: DeploymentAdvantage;
  badge?: string;
};

export type DeploymentComparisonRow = {
  id: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
  container: DeploymentComparisonCell;
  vm: DeploymentComparisonCell;
};

export type DeploymentComparisonCategory = {
  id: string;
  label: string;
  rows: readonly DeploymentComparisonRow[];
};

export type DeploymentServiceSummary = {
  id: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  deploymentType: string;
  tagline: string;
  bullets: readonly string[];
  ctaLabel: string;
  variant: "container" | "vm";
};

export type GpuServiceSummaryCardProps = {
  service: DeploymentServiceSummary;
};

export type GpuDeploymentComparisonRowProps = {
  row: DeploymentComparisonRow;
};

export type GpuDeploymentComparisonCategoryProps = {
  category: DeploymentComparisonCategory;
};
