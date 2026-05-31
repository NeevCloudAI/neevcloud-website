import type { ComponentType, ReactNode } from "react";

export type GridTabItem = {
  id: string;
  label: string;
};

export type GridTabsPanelRenderProps = {
  panelId: string;
  labelledBy: string;
  children: ReactNode;
};

export type GridTabsSectionClientProps = {
  tabs: readonly GridTabItem[];
  panels: readonly ComponentType[];
  defaultIndex?: number;
  ariaLabel?: string;
  tabIdPrefix?: string;
  tabListClassName?: string;
  renderPanel?: (props: GridTabsPanelRenderProps) => ReactNode;
};
