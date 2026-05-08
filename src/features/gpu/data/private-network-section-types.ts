export type FlowDirection = "forward" | "backward";

export type NetworkingFeature = {
  title: string;
  description: string;
};

export type ComputePillVariant = "cpu" | "gpu";

export type ComputeInstance = {
  typeLabel: string;
  variant: ComputePillVariant;
  name: string;
  specs: string[];
  transferHint: string;
};
