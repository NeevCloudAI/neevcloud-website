import type { ModelFeature } from "@/shared/types/model-builder-section.types";

export const MODEL_BUILDER_FEATURES: ModelFeature[] = [
  {
    title: "One binary, every workflow",
    description:
      "NeevCloud handles auth, clusters, jobs, checkpoints, no context-switching between five consoles.",
  },
  {
    title: "Git-native deployments",
    description:
      "Choose 8x, 4x, 2x or 1x GPU instances to fit a wide range of AI workloads, from POC to production.",
  },
  {
    title: "Use UI, API or CLI",
    description:
      "Automate with the NeevCloud API to create, stop, and restart instances from your UI, CI/CD, or orchestration scripts.",
  },
];

export const MODEL_BUILDER_COPY = {
  description:
    "No ticket-driven DevEx. A single CLI, typed SDKs for every runtime, and infrastructure that respects your repo structure.",
  terminalPath: "~/models/avatar · zsh",
} as const;
