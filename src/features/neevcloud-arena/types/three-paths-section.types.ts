export type PathsStepPanelItem =
  | { type: "simple"; text: string }
  | { type: "industry"; industry: string; detail: string };

export type PathsStepPanel = {
  listHeading: string;
  items: readonly PathsStepPanelItem[];
  highlightHeading?: string;
  highlightText?: string;
};

export type PathsStep = {
  number: string;
  label: string;
  title: string;
  heading: string;
  description: string;
  learnText: string;
  primaryCtaLabel: string;
  primaryCtaRoute: string;
  primaryCtaTarget: "_blank" | "_self" | "_parent" | "_top";
};
