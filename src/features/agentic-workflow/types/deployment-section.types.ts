export type AgenticWorkflowDeploymentOptionId =
  | "on-kubernetes"
  | "with-tool-calling"
  | "multi-step-pipeline"
  | "fleet-management"
  | "state-persistence";

export type AgenticWorkflowDeploymentOption = {
  id: AgenticWorkflowDeploymentOptionId;
  label: string;
};
