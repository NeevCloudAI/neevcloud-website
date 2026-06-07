export type GpuModelFamilyId = "h100" | "a100" | "l40s";

export type GpuModelFamilyOption = {
  id: GpuModelFamilyId;
  number: string;
  label: string;
};

export type GpuModelConfigurationRow = {
  id: string;
  configuration: string;
  pricePerHour: string;
  memory: string;
  bandwidth: string;
  fp16: string;
};

export type GpuModelCommitmentRow = {
  id: string;
  commitment: string;
  discount: string;
  examplePrice: string;
};

export type GpuModelFamily = {
  id: GpuModelFamilyId;
  number: string;
  sidebarLabel: string;
  titleName: string;
  subtitle: string;
  useCasesLabel: string;
  useCases: string;
  configurationRows: readonly GpuModelConfigurationRow[];
  commitmentSubtitle: string;
  commitmentExampleLabel: string;
  commitmentRows: readonly GpuModelCommitmentRow[];
  annualSavingsLabel: string;
  onDemandPerYear: string;
  reservedPerYear: string;
  youSave: string;
};

export type GpuModelTransparentPricingSidebarProps = {
  activeFamily: GpuModelFamilyId;
  onFamilySelect: (id: GpuModelFamilyId) => void;
};

export type GpuModelTransparentPricingConfigurationCardProps = {
  family: GpuModelFamily;
};

export type GpuModelTransparentPricingCommitmentCardProps = {
  family: GpuModelFamily;
};

export type GpuModelTransparentPricingAnnualSavingsCardProps = {
  family: GpuModelFamily;
};
