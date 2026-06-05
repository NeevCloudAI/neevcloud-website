export type AiInferenceModelFamilyId =
  | "popular-llms"
  | "embedding-models"
  | "image-models"
  | "custom-models";

export type AiInferenceModelFamilyOption = {
  id: AiInferenceModelFamilyId;
  number: string;
  label: string;
};

export type AiInferencePricingRow = {
  id: string;
  model: string;
  cells: readonly string[];
};

export type AiInferenceModelFamily = {
  id: AiInferenceModelFamilyId;
  number: string;
  sidebarLabel: string;
  titleName: string;
  subtitle: string;
  tableHeaders: readonly string[];
  rows: readonly AiInferencePricingRow[];
};

export type AiInferenceTransparentPricingModelFamilySidebarProps = {
  activeFamily: AiInferenceModelFamilyId;
  onFamilySelect: (id: AiInferenceModelFamilyId) => void;
};

export type AiInferenceTransparentPricingTableProps = {
  family: AiInferenceModelFamily;
};

export type AiInferenceTransparentPricingTableRowProps = {
  row: AiInferencePricingRow;
};
