export type MlWorkflowCardVariant =
  | "versioning"
  | "replication"
  | "access-control"
  | "performance";

export type MlWorkflowHoverDetail = {
  label?: string;
  tasks: readonly { id: number; title: string }[];
  ctaLabel?: string;
  ctaHref: string;
  ctaTarget?: string;
};

export type MlWorkflowCardData = {
  id: number;
  variant: MlWorkflowCardVariant;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  linkTarget?: string;
  hover: MlWorkflowHoverDetail;
};
