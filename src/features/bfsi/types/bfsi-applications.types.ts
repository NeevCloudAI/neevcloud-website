export type BFSICardVariant = "default" | "flagship" | "enterprise";

export type BFSICard = {
  id: number;
  badge?: string;
  icon: string;
  title: string;
  description: string;
  variant?: BFSICardVariant;
  imageSrc?: string;
};
