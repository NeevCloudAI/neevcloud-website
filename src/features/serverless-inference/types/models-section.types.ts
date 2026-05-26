export type ModelTag = {
  name: string;
  color: string;
};

export type ModelCardData = {
  name: string;
  provider: string;
  icon: string;
  tags: ModelTag[];
  context: string;
  price: string;
  params: string;
};
