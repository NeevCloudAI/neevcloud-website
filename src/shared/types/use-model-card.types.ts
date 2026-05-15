export type UseModelFeature = {
  label: string;
  value: string;
  highlighted?: boolean;
};

export type UseModelCardVariant = "primary" | "black" | "outline";

export type UseModelCardData = {
  id: string;
  title: string;
  description: string;
  features: UseModelFeature[];
  ctaLabel: string;
  ctaVariant: UseModelCardVariant;
  footnote: string;
};

export type UseModelCardProps = {
  card: UseModelCardData;
  className?: string;
};
