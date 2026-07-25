import { AgenticStudioComponent } from "@/features/agentic-studio";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/agentic-studio",
  title: "Agentic Studio | NeevCloud",
  description:
    "Launch secure, isolated sandboxes for AI agents and code execution with NeevCloud Agentic Studio. Fast launch times, built-in snapshots, and pausable state, ready in seconds.",
  openGraphDescription:
    "Fully managed sandbox environments for AI agents and untrusted code — isolated by default, with snapshots and pause/resume built in.",
});

const AgenticStudioPage = () => {
  return <AgenticStudioComponent />;
};

export default AgenticStudioPage;
