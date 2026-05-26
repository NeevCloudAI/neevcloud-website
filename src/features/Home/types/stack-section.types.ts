export type StackSectionListItem = {
  id: string;
  label: string;
  description: string;
};

export type StackSectionPanel = {
  id: string;
  title: string;
  description: string;
  items: StackSectionListItem[];
};

