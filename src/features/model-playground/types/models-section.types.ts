export type ModelsSectionCheckItem = {
  text: string;
  description: string;
};

export type ModelsSectionStep = {
  number: string;
  label: string;
  title: string;
  description: string;
  heading: string;
  checkItems: ModelsSectionCheckItem[];
};

export type ModelsSectionStepTwoCard = {
  id: string;
  label: string;
  value: string;
};
