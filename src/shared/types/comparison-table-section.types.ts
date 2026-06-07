export type ComparisonTableRow = {
  id: string;
  aspect: string;
  traditional: string;
  supercloud: string;
};

export type ComparisonTableSectionProps = {
  sectionId: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  traditionalColumnLabel: string;
  supercloudColumnLabel: string;
  rows: readonly ComparisonTableRow[];
  className?: string;
};
