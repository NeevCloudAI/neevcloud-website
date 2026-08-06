import { AgenticStudioComponent } from "@/features/agentic-studio";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/agentic-studio",
  title: "Agentic Studio - Secure Sandboxes for AI Agents | NeevCloud",
  description:
    "Give your AI agents somewhere safe to act. Isolated, on-demand sandboxes and ready-to-run coding agents provisioned in seconds, fully controllable, and hosted in India.",
});

const AgenticStudioPage = () => {
  return <AgenticStudioComponent />;
};

export default AgenticStudioPage;
