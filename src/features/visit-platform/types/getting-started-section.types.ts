export type GettingStartedStep = {
  id: string;
  number: number;
  title: string;
  description: string;
  descriptionSuffix?: string;
  link?: {
    text: string;
    href: string;
  };
  code?: string;
};
