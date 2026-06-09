export type ModelMetric = {
  label: string;
  value: string;
};

export type ModelInfoCardData = {
  id: string;
  name: string;
  provider: string;
  latency: string;
  bestFor: string;
  metrics: ModelMetric[];
  capabilities: readonly string[];
  useCases: readonly string[];
  primaryActionLabel?: string;
  primaryActionHref?: string;
  primaryActionTarget?: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  secondaryActionTarget?: string;
  tertiaryActionLabel?: string;
  tertiaryActionHref?: string;
  tertiaryActionTarget?: string;
};

export type ModelInfoCardProps = {
  model: ModelInfoCardData;
  className?: string;
};
