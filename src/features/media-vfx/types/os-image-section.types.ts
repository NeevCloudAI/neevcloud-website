export type OsSectionId = "base-operating-systems";

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
