export type StatsByNumbersAccentLine = {
  color: "primary" | "primary-muted" | "gray" | "red" | "white";
  dashed?: boolean;
};

export type StatsByNumbersItem = {
  id: string;
  label: string;
  value: string;
  description: string;
  accentLine?: StatsByNumbersAccentLine;
};

export type StatsByNumbersSectionProps = {
  sectionId: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  items: readonly StatsByNumbersItem[];
  className?: string;
};

export type StatsByNumbersCardProps = {
  item: StatsByNumbersItem;
  className?: string;
};
