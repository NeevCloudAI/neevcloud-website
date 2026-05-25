export type CpuInstanceFamilyId =
  | "general-purpose"
  | "compute-optimized"
  | "memory-optimized";

export type CpuConfigurationRow = {
  configuration: string;
  vcpu: string;
  ram: string;
  storage: string;
  bestFor: string;
};

export type CpuInstanceFamily = {
  id: CpuInstanceFamilyId;
  number: string;
  sidebarLabel: string;
  titleName: string;
  subtitle: string;
  footer: string;
  rows: CpuConfigurationRow[];
};

export const CPU_INSTANCE_FAMILIES: CpuInstanceFamily[] = [
  {
    id: "general-purpose",
    number: "01",
    sidebarLabel: "general purpose instances",
    titleName: "general purpose instances",
    subtitle: "// Balanced vCPU : 2c/4GB to 32c/64GB",
    footer: "// api servers • model gateways • web backends • microservices",
    rows: [
      {
        configuration: "starter",
        vcpu: "2",
        ram: "4gb",
        storage: "20gb ssd",
        bestFor: "development, testing",
      },
      {
        configuration: "basic",
        vcpu: "4",
        ram: "8gb",
        storage: "40gb ssd",
        bestFor: "small APIs, apps",
      },
      {
        configuration: "standard",
        vcpu: "8",
        ram: "16gb",
        storage: "80gb ssd",
        bestFor: "production APIs",
      },
      {
        configuration: "large",
        vcpu: "16",
        ram: "32gb",
        storage: "160gb ssd",
        bestFor: "busy APIs, workers",
      },
      {
        configuration: "xlarge",
        vcpu: "32",
        ram: "64gb",
        storage: "320gb ssd",
        bestFor: "high-traffic services",
      },
    ],
  },
  {
    id: "compute-optimized",
    number: "02",
    sidebarLabel: "compute optimized instances",
    titleName: "compute optimized instances",
    subtitle: "// High vCPU density : 8c/8GB to 64c/64GB",
    footer: "// tokenization pipelines · parallel processing · batch jobs",
    rows: [
      {
        configuration: "small",
        vcpu: "8",
        ram: "8gb",
        storage: "80gb ssd",
        bestFor: "parallel processing",
      },
      {
        configuration: "medium",
        vcpu: "16",
        ram: "16gb",
        storage: "160gb ssd",
        bestFor: "data pipelines",
      },
      {
        configuration: "large",
        vcpu: "32",
        ram: "32gb",
        storage: "320gb ssd",
        bestFor: "tokenization at scale",
      },
      {
        configuration: "xlarge",
        vcpu: "64",
        ram: "64gb",
        storage: "320gb ssd",
        bestFor: "batch processing",
      },
    ],
  },
  {
    id: "memory-optimized",
    number: "03",
    sidebarLabel: "memory optimized instances",
    titleName: "memory optimized instances",
    subtitle: "// High RAM per vCPU : 4c/32GB to 32c/256GB",
    footer: "// Vector databases · redis · large dataset processing",
    rows: [
      {
        configuration: "small",
        vcpu: "4",
        ram: "32gb",
        storage: "40gb ssd",
        bestFor: "small vector DBs",
      },
      {
        configuration: "medium",
        vcpu: "8",
        ram: "64gb",
        storage: "80gb ssd",
        bestFor: "redis, caching",
      },
      {
        configuration: "large",
        vcpu: "16",
        ram: "128gb",
        storage: "160gb ssd",
        bestFor: "large datasets",
      },
      {
        configuration: "xlarge",
        vcpu: "32",
        ram: "256gb",
        storage: "320gb ssd",
        bestFor: "feature stores",
      },
    ],
  },
];

export const CPU_INSTANCE_FAMILY_BY_ID = Object.fromEntries(
  CPU_INSTANCE_FAMILIES.map((family) => [family.id, family]),
) as Record<CpuInstanceFamilyId, CpuInstanceFamily>;
