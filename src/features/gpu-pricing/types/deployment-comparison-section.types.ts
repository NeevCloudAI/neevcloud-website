import type { LucideIcon } from "lucide-react";

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

export type DeploymentComparisonIconName =
  | "zap"
  | "server"
  | "layers"
  | "lock"
  | "trendingUp"
  | "disc2"
  | "dollarSign"
  | "timer";

export type DeploymentComparisonVariant = "container" | "vm";

export type DeploymentComparisonColumnHeader = {
  id: string;
  icon: DeploymentComparisonIconName;
  badge: string;
  title: string;
  subtitle: string;
  variant: DeploymentComparisonVariant;
};

export type DeploymentComparisonServiceCard = {
  id: string;
  icon: DeploymentComparisonIconName;
  title: string;
  deploymentType: string;
  tagline: string;
  bullets: readonly string[];
  ctaHref: string;
  variant: DeploymentComparisonVariant;
};

export type DeploymentComparisonTableCellVariant =
  | "default"
  | "container-highlight"
  | "vm-highlight";

export type DeploymentComparisonTableCell = {
  text: string;
  subtext?: string;
  showCheck?: boolean;
  variant?: DeploymentComparisonTableCellVariant;
};

export type DeploymentComparisonTableRow = {
  id: string;
  icon: DeploymentComparisonIconName;
  label: string;
  container: DeploymentComparisonTableCell;
  vm: DeploymentComparisonTableCell;
};

export type DeploymentComparisonTableCategory = {
  id: string;
  label: string;
  rows: readonly DeploymentComparisonTableRow[];
};

export type DeploymentComparisonLegendItem = {
  id: string;
  label: string;
  variant: DeploymentComparisonVariant;
};

export type DeploymentComparisonIconProps = {
  name: DeploymentComparisonIconName;
  className?: string;
};

export type DeploymentComparisonColumnHeaderProps = {
  header: DeploymentComparisonColumnHeader;
};

export type DeploymentComparisonServiceCardProps = {
  card: DeploymentComparisonServiceCard;
};

export type DeploymentComparisonTableCellProps = {
  cell: DeploymentComparisonTableCell;
  column: DeploymentComparisonVariant;
  mobileLabel?: string;
};

export type DeploymentComparisonTableRowProps = {
  row: DeploymentComparisonTableRow;
};

export type DeploymentComparisonTableCategoryProps = {
  category: DeploymentComparisonTableCategory;
};

export type DeploymentComparisonIconMap = Record<
  DeploymentComparisonIconName,
  LucideIcon
>;
