export type ApplicationCardTheme = "light" | "dark";

export type ApplicationCardItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: string;
  theme?: ApplicationCardTheme;
  image?: string;
  className?: string;
};

export type ApplicationCardProps = {
  label: string;
  title: string;
  description: string;
  icon: string;
  theme?: ApplicationCardTheme;
  image?: string;
  className?: string;
};
