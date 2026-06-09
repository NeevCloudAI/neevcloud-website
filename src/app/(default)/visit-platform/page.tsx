import type { Metadata } from "next";
import { VisitPlatformComponent } from "@/features/visit-platform";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "AI SuperCloud Platform | NeevCloud",
  description:
    "Deploy GPUs, manage inference, control storage, and monitor workloads through a unified console. Everything you need to build AI, accessible in one place.",
  openGraph: {
    title: "AI SuperCloud Platform | NeevCloud",
    description:
      "Deploy GPUs, manage inference, control storage, and monitor workloads through a unified console. Everything you need to build AI, accessible in one place.",
  },
};

const VisitPlatformPage = () => {
  return <VisitPlatformComponent />;
};

export default VisitPlatformPage;
