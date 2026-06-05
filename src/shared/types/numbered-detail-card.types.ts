export type NumberedDetailCardProps = {
  label: string;
  title: string;
  number: string;
  description: string;
  className?: string;
};

export type NumberedDetailCardItem = NumberedDetailCardProps & {
  id: string;
};
