"use client";

import { CONSOLE_TABS } from "../data/console-section.data";
import {
  DashboardOverviewTab,
  GpuDeploymentTab,
  InferenceManagementTab,
  FleetManagementTab,
  StatePersistenceTab,
} from "./DashboardOverviewTab";
import GridTabsSectionClient from "@/shared/components/GridTabsSectionClient";

const PANELS = [
  DashboardOverviewTab,
  GpuDeploymentTab,
  InferenceManagementTab,
  FleetManagementTab,
  StatePersistenceTab,
];

const LlmDeploymentSectionClient = () => {
  return (
    <div className="w-full mt-8 md:mt-12.5">
      <GridTabsSectionClient
        tabs={CONSOLE_TABS}
        panels={PANELS}
        defaultIndex={0}
        ariaLabel="NeevCloud Console sections"
        tabIdPrefix="console"
        renderPanel={({ panelId, labelledBy, children }) => (
          <div role="tabpanel" id={panelId} aria-labelledby={labelledBy}>
            {children}
          </div>
        )}
      />
    </div>
  );
};

export default LlmDeploymentSectionClient;
