import { AgenticWorkflowComponent } from "@/features/agentic-workflow";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/agentic-workflow",
  title: "Agentic Workflow | NeevCloud",
  description:
    "Run multi-step, multi-model agent pipelines on reliable, low-latency GPU compute. Container-native, Kubernetes-backed infrastructure for autonomous AI agents in India.",
  openGraphDescription:
    "Deploy autonomous AI agents with API-accessible inference, managed Kubernetes, and observability-ready GPU infrastructure on NeevCloud.",
});

const AgenticWorkflowPage = () => {
  return <AgenticWorkflowComponent />;
};

export default AgenticWorkflowPage;
