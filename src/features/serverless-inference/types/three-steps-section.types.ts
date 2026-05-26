export type CheckItem = {
  text: string;
  type: "check" | "clock";
};

export type Step = {
  number: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  descriptionHighlight?: string;
  descriptionSuffix?: string;
  checkItems: CheckItem[];
};

export type StepOneModel = {
  name: string;
  meta: string;
  price: string;
};

export type StepThreeBillingRow = {
  label: string;
  sub: string;
  value: string;
  neg: boolean;
};

export type StepThreeBilling = {
  title: string;
  subtitle: string;
  rows: StepThreeBillingRow[];
  total: string;
  totalLabel: string;
  totalSub: string;
};
