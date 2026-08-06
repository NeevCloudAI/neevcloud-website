import { AgenticWorkflowComponent } from "@/features/agentic-workflow";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/agentic-workflow",
  title: "AI Agents Infrastructure - GPU Compute | NeevCloud",
  description:
    "Run autonomous AI agents on GPU infrastructure. Multi-step reasoning, tool use, persistent compute. Kubernetes-native orchestration.",
});

const AgenticWorkflowPage = () => {
  return <AgenticWorkflowComponent />;
};

export default AgenticWorkflowPage;
