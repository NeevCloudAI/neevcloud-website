import type { AgenticWorkflowDeploymentOption } from "../types/deployment-section.types";

export const AGENTIC_WORKFLOW_DEPLOYMENT_SECTION = {
  titlePrefix: "Deploy Your",
  titleHighlight: "First Workload",
  description:
    "Kubernetes-native agents, tool calling, pipelines, fleet ops, and durable state-from one platform.",
} as const;

export const AGENTIC_WORKFLOW_DEPLOYMENT_OPTIONS: AgenticWorkflowDeploymentOption[] =
  [
    { id: "on-kubernetes", label: "On Kubernetes" },
    { id: "with-tool-calling", label: "With Tool Calling" },
    { id: "multi-step-pipeline", label: "Multi-Step Pipeline" },
    { id: "fleet-management", label: "Fleet Management" },
    { id: "state-persistence", label: "State Persistence" },
  ];
