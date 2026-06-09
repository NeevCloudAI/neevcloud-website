export type DocumentationTag = {
  id: string;
  label: string;
  href: string;
};

export type DocumentationCategory = {
  id: string;
  title: string;
  iconSrc: string;
  tags: readonly DocumentationTag[];
};

export type DevelopersDocumentationSearchClientProps = {
  categories: readonly DocumentationCategory[];
  searchPlaceholder: string;
  noMatchesLabel: string;
};
