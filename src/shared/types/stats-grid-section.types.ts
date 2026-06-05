export type BaseCard = {
  id: string;
  description: string;
};

export type StatCard = BaseCard & {
  variant: "stat";
  label: string;
  stat: string;
};

export type FeatureCard = BaseCard & {
  variant: "feature";
  icon: string;
  title: string;
};

export type GridCard = StatCard | FeatureCard;

export type StatsGridSectionProps = {
  sectionId: string;
  heading: string;
  headingHighlight?: string;
  highlightPosition?: "before" | "after";
  cards: GridCard[];
};
