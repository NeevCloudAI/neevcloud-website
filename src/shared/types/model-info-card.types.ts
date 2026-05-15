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
  capabilitiesLabel?: string;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  tertiaryActionLabel?: string;
};

export type ModelInfoCardProps = {
  model: ModelInfoCardData;
  className?: string;
};
