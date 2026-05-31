"use client";

import GridTabsSectionClient from "@/shared/components/GridTabsSectionClient";
import WorkloadCodeCard from "./deploy-workload/WorkloadCodeCard";
import { WORKLOAD_PANELS } from "./deploy-workload/workload-panels";
import { DEFAULT_WORKLOAD_INDEX } from "../constants/deploy-workload-section.constants";
import { WORKLOAD_OPTIONS } from "../data/deploy-workload-section.data";

const DeployWorkloadSectionClient = () => {
  return (
    <GridTabsSectionClient
      tabs={WORKLOAD_OPTIONS}
      panels={WORKLOAD_PANELS}
      defaultIndex={DEFAULT_WORKLOAD_INDEX}
      ariaLabel="Workload options"
      tabIdPrefix="workload"
      renderPanel={({ panelId, labelledBy, children }) => (
        <WorkloadCodeCard
          key={panelId}
          panelId={panelId}
          labelledBy={labelledBy}
        >
          {children}
        </WorkloadCodeCard>
      )}
    />
  );
};

export default DeployWorkloadSectionClient;
