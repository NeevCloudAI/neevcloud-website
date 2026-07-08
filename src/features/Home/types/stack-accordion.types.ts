export type StackFeatureIcon = "cpu" | "playground" | "api";

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
