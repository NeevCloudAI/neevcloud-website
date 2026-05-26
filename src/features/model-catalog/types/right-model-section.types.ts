export type ModelPricingRow = {
  id: string;
  model: {
    title: string;
    description: string;
  };
  provider: string;
  size: string;
  context: string;
  inputPrice: string;
  outputPrice: string;
  actions: {
    tryHref: string;
    docsHref: string;
    deployHref: string;
  };
};

export type RightModelTableHeader = {
  id: string;
  name: string;
};
