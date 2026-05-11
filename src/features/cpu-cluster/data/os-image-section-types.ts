export type OsSectionId = "base-operating-systems" | "pre-configured-images";

export type OsCardChip = {
  name: string;
  isActive: boolean;
};

export type OsImageCard = {
  title: string;
  description: string;
  image: string;
  cards: OsCardChip[];
};
