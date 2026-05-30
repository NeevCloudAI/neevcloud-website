export type ApplicationCardTheme = "light" | "dark" | "gray";

export type ApplicationCardItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: string;
  theme?: ApplicationCardTheme;
  image?: string;
  className?: string;
  imageSpacing?: boolean;
};

export type ApplicationCardProps = {
  label: string;
  title: string;
  description: string;
  icon: string;
  theme?: ApplicationCardTheme;
  image?: string;
  className?: string;
  imageSpacing?: boolean;
};
