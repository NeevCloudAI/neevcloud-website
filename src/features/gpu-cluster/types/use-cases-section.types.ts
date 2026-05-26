export type UseCaseTagVariant = "primary" | "muted";

export type UseCaseTag = {
  text: string;
  variant: UseCaseTagVariant;
};

export type UseCaseSummaryBlock = {
  label: string;
  title: string;
  subtitle?: string;
};

export type UseCaseDefinition = {
  id: string;
  tabName: string;
  logoAlt: string;
  heading: string;
  description: string;
  tags: UseCaseTag[];
  summary: [UseCaseSummaryBlock, UseCaseSummaryBlock, UseCaseSummaryBlock];
};
