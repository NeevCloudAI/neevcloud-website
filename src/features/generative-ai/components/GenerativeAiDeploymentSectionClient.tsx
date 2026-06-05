"use client";

import GridTabsSectionClient from "@/shared/components/GridTabsSectionClient";
import CodeTabPanel from "@/shared/components/code-tab-panel/CodeTabPanel";
import { DEFAULT_GENERATIVE_AI_DEPLOYMENT_INDEX } from "../constants/deployment-section.constants";
import { GENERATIVE_AI_DEPLOYMENT_OPTIONS } from "../data/deployment-section.data";
import { GENERATIVE_AI_DEPLOYMENT_PANELS } from "./deployment/deployment-panels";

const GenerativeAiDeploymentSectionClient = () => {
  return (
    <GridTabsSectionClient
      tabs={GENERATIVE_AI_DEPLOYMENT_OPTIONS}
      panels={GENERATIVE_AI_DEPLOYMENT_PANELS}
      defaultIndex={DEFAULT_GENERATIVE_AI_DEPLOYMENT_INDEX}
      ariaLabel="Generative AI deployment options"
      tabIdPrefix="generative-ai-deployment"
      renderPanel={({ panelId, labelledBy, children }) => (
        <CodeTabPanel key={panelId} panelId={panelId} labelledBy={labelledBy}>
          {children}
        </CodeTabPanel>
      )}
    />
  );
};

export default GenerativeAiDeploymentSectionClient;
