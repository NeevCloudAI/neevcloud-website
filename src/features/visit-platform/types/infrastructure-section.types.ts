export type PurposeNodeVariant = "workload" | "managed" | "pool";

export type PurposeFlowNode = {
  id: string;
  variant: PurposeNodeVariant;
  title: string;
  subtitle?: string;
  badge?: string;
  details?: string[];
  footer?: string;
};

export type PurposeLegendItem = {
  id: string;
  label: string;
  swatchClass: string;
};

export type PurposeFeatureItem = {
  number: string;
  title: string;
  description: string;
};
