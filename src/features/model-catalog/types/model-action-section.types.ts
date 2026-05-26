export type ModelActionItem = {
  id: string;
  name: string;
  provider: string;
  context: string;
  latency: string;
};

export type ModelActionSidebarCardProps = {
  model: ModelActionItem;
  isActive: boolean;
  onSelect: () => void;
};
