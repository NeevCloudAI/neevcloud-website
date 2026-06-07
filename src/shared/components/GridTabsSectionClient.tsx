"use client";

import { useState } from "react";
import { Button } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import type {
  GridTabsPanelRenderProps,
  GridTabsSectionClientProps,
} from "@/shared/types/grid-tabs-section.types";

const TAB_GRID_COLS: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
};

const defaultRenderPanel = ({
  panelId,
  labelledBy,
  children,
}: GridTabsPanelRenderProps) => (
  <div
    id={panelId}
    role="tabpanel"
    aria-labelledby={labelledBy}
    className="w-full mt-4 md:mt-7.5"
  >
    {children}
  </div>
);

const GridTabsSectionClient = ({
  tabs,
  panels,
  defaultIndex = 0,
  ariaLabel = "Section tabs",
  tabIdPrefix = "grid-tabs",
  tabListClassName,
  renderPanel = defaultRenderPanel,
}: GridTabsSectionClientProps) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const selectedTab = tabs[selectedIndex];
  const ActivePanel = panels[selectedIndex];

  if (!selectedTab || !ActivePanel) {
    return null;
  }

  const tabId = `${tabIdPrefix}-tab-${selectedTab.id}`;
  const panelId = `${tabIdPrefix}-panel-${selectedTab.id}`;

  return (
    <>
      <div
        className={cn(
          "w-full grid grid-cols-1 items-center justify-between",
          TAB_GRID_COLS[tabs.length] ?? "md:grid-cols-4",
          tabListClassName
        )}
        role="tablist"
        aria-label={ariaLabel}
      >
        {tabs.map((tab, index) => {
          const isSelected = selectedIndex === index;
          const isLast = index === tabs.length - 1;
          const isFirst = index === 0;
          const currentTabId = `${tabIdPrefix}-tab-${tab.id}`;

          return (
            <Button
              key={tab.id}
              id={currentTabId}
              role="tab"
              type="button"
              size="full"
              aria-selected={isSelected}
              aria-controls={`${tabIdPrefix}-panel-${tab.id}`}
              tabIndex={isSelected ? 0 : -1}
              fontFamily="spaceMono"
              spacing="lg"
              variant={isSelected ? undefined : "black"}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "rounded-none py-4 transition-colors text-sm",
                !isLast && "border-b md:border-b-0 md:border-r",
                isFirst && "rounded-l-md",
                isLast && "rounded-r-md",
                isSelected
                  ? "bg-primary-100 text-black"
                  : "border-gray-90 text-gray-65"
              )}
            >
              {tab.label}
            </Button>
          );
        })}
      </div>

      {renderPanel({
        panelId,
        labelledBy: tabId,
        children: <ActivePanel key={selectedTab.id} />,
      })}
    </>
  );
};

export default GridTabsSectionClient;
