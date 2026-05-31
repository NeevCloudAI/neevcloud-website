import type { Metadata } from "next";
import { AgenticWorkflowComponent } from "@/features/agentic-workflow";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Agentic Workflow | NeevCloud",
  description:
    "Run multi-step, multi-model agent pipelines on reliable, low-latency GPU compute. Container-native, Kubernetes-backed infrastructure for autonomous AI agents in India.",
  openGraph: {
    title: "Agentic Workflow | NeevCloud",
    description:
      "Deploy autonomous AI agents with API-accessible inference, managed Kubernetes, and observability-ready GPU infrastructure on NeevCloud.",
  },
};

const AgenticWorkflowPage = () => {
  return <AgenticWorkflowComponent />;
};

export default AgenticWorkflowPage;
