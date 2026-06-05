"use client";

import GridTabsSectionClient from "@/shared/components/GridTabsSectionClient";
import CodeTabPanel from "@/shared/components/code-tab-panel/CodeTabPanel";
import { DEFAULT_AGENTIC_WORKFLOW_DEPLOYMENT_INDEX } from "../constants/deployment-section.constants";
import { AGENTIC_WORKFLOW_DEPLOYMENT_OPTIONS } from "../data/deployment-section.data";
import { AGENTIC_WORKFLOW_DEPLOYMENT_PANELS } from "./deployment/deployment-panels";

const AgenticWorkflowDeploymentSectionClient = () => {
  return (
    <GridTabsSectionClient
      tabs={AGENTIC_WORKFLOW_DEPLOYMENT_OPTIONS}
      panels={AGENTIC_WORKFLOW_DEPLOYMENT_PANELS}
      defaultIndex={DEFAULT_AGENTIC_WORKFLOW_DEPLOYMENT_INDEX}
      ariaLabel="Agentic workflow deployment options"
      tabIdPrefix="agentic-workflow-deployment"
      renderPanel={({ panelId, labelledBy, children }) => (
        <CodeTabPanel key={panelId} panelId={panelId} labelledBy={labelledBy}>
          {children}
        </CodeTabPanel>
      )}
    />
  );
};

export default AgenticWorkflowDeploymentSectionClient;
