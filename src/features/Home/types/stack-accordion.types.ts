export type StackFeatureIcon =
  | "inference"
  | "playground"
  | "api"
  | "gpu"
  | "cpu"
  | "kubernetes"
  | "compute"
  | "storage"
  | "networking"
  | "factory"
  | "sovereign"
  | "vault";

export type StackFeature = {
  icon: StackFeatureIcon;
  text: string;
};

export type StackAccordionItem = {
  id: string;
  label: string;
  heading: string;
  features: StackFeature[];
};
