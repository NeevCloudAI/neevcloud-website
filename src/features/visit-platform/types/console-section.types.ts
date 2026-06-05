export type ConsoleTab = {
  id: string;
  label: string;
};

export type StatCard = {
  label: string;
  value: string;
  change: string;
};

export type GpuStep = {
  number?: number;
  label: string;
  status: "done" | "processing" | "pending";
};

export type InferenceModel = {
  name: string;
  provider: string;
  context: string;
  price: string;
};

export type VolumeRow = {
  name: string;
  type: string;
  attached: string;
  size: string;
};

export type BillingRow = {
  label: string;
  value: string;
};
