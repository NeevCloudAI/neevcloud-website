export type TokenPricingTableHeader = {
  id: string;
  name: string;
};

export type TokenPricingRow = {
  id: string;
  model: {
    title: string;
    description: string;
  };
  params: string;
  context: string;
  input: string;
  output: string;
  free: string;
};
