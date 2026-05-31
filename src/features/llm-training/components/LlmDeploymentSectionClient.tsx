"use client";

import GridTabsSectionClient from "@/shared/components/GridTabsSectionClient";
import CodeTabPanel from "@/shared/components/code-tab-panel/CodeTabPanel";
import { DEFAULT_DEPLOYMENT_INDEX } from "../constants/deployment-section.constants";
import { DEPLOYMENT_OPTIONS } from "../data/deployment-section.data";
import { DEPLOYMENT_PANELS } from "./deployment/deployment-panels";

const LlmDeploymentSectionClient = () => {
  return (
    <GridTabsSectionClient
      tabs={DEPLOYMENT_OPTIONS}
      panels={DEPLOYMENT_PANELS}
      defaultIndex={DEFAULT_DEPLOYMENT_INDEX}
      ariaLabel="LLM training deployment options"
      tabIdPrefix="llm-deployment"
      renderPanel={({ panelId, labelledBy, children }) => (
        <CodeTabPanel
          key={panelId}
          panelId={panelId}
          labelledBy={labelledBy}
        >
          {children}
        </CodeTabPanel>
      )}
    />
  );
};

export default LlmDeploymentSectionClient;
