export type ModelSectionId = "all-models";

export type ModelCardChip = {
  name: string;
  isActive: boolean;
};

export type ModelImageCard = {
  title: string;
  description: string;
  image: string;
  cards: ModelCardChip[];
  context: string;
  pricePerMillion: string;
  params: string;
};
