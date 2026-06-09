import type { Metadata } from "next";
import { DefenceComponent } from "@/features/defence";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "National Security & Defence | NeevCloud",
  description:
    "Defence and strategic workloads require infrastructure that guarantees complete data sovereignty, operates under Indian jurisdiction, and provides total isolation from foreign-controlled systems.",
  openGraph: {
    title: "National Security & Defence | NeevCloud",
    description:
      "Indigenous AI infrastructure for national security with complete data sovereignty, Indian jurisdiction, and air-gapped deployment options.",
  },
};

const DefencePage = () => {
  return <DefenceComponent />;
};

export default DefencePage;
