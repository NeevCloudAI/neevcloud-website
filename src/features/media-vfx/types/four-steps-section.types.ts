import { Text } from "@/shared/ui-lib";

export type Step = {
  number: string;
  label: string; // "STEP 01"
  title: string; // "Upload Assets"
  heading: string; // "High-throughput ingest"
  description1: string;
  description2: string;
};

export type StepOneAsset = {
  name: string;
  size: string;
  barColor: string;
  seconds: number;
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

type TextColor = React.ComponentProps<typeof Text>["textColor"];

export interface CardRow {
  icon?: string;
  iconColor?: TextColor;
  left: string;
  right: string;
  leftColor?: TextColor;
  rightColor?: TextColor;
}
