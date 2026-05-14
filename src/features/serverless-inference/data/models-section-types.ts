export type ModelTagColor = "gray-60" | "blue-40" | "gray-85" | "gray-75";

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
