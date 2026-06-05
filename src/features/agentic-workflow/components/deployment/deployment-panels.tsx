import FleetManagementContent from "./FleetManagementContent";
import MultiStepPipelineContent from "./MultiStepPipelineContent";
import OnKubernetesContent from "./OnKubernetesContent";
import StatePersistenceContent from "./StatePersistenceContent";
import WithToolCallingContent from "./WithToolCallingContent";

export const AGENTIC_WORKFLOW_DEPLOYMENT_PANELS = [
  OnKubernetesContent,
  WithToolCallingContent,
  MultiStepPipelineContent,
  FleetManagementContent,
  StatePersistenceContent,
] as const;
