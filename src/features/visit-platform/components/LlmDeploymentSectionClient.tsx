"use client";

import { useState } from "react";
import { CONSOLE_TABS } from "../data/console-section.data";
import {
  DashboardOverviewTab,
  GpuDeploymentTab,
  InferenceManagementTab,
  FleetManagementTab,
  StatePersistenceTab,
} from "./DashboardOverviewTab";

const PANELS = [
  DashboardOverviewTab,
  GpuDeploymentTab,
  InferenceManagementTab,
  FleetManagementTab,
  StatePersistenceTab,
];

const ConsoleSectionClient = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActivePanel = PANELS[activeIndex];

  return (
    <div className="w-full mt-8">
      {/* Tab bar */}
      <div
        className="flex w-full overflow-x-auto rounded-lg bg-black"
        role="tablist"
        aria-label="NeevCloud Console sections"
      >
        {CONSOLE_TABS.map((tab, i) => (
          <button
            key={tab.id}
            role="tab"
            id={`console-tab-${tab.id}`}
            aria-selected={activeIndex === i}
            aria-controls={`console-panel-${tab.id}`}
            onClick={() => setActiveIndex(i)}
            className={`flex-1 whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors ${
              activeIndex === i
                ? "bg-primary text-black"
                : "text-gray-60 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        id={`console-panel-${CONSOLE_TABS[activeIndex].id}`}
        aria-labelledby={`console-tab-${CONSOLE_TABS[activeIndex].id}`}
      >
        <ActivePanel />
      </div>
    </div>
  );
};

export default ConsoleSectionClient;
