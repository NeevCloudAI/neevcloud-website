import type { Metadata } from "next";
import { DevelopersComponent } from "@/features/developers";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Developers | NeevCloud",
  description:
    "OpenAI-compatible APIs, Python and Node SDKs, CLI, Terraform support, and developer-first documentation. From zero to first inference call in under 5 minutes.",
  openGraph: {
    title: "Developers | NeevCloud",
    description:
      "Everything you need to build and scale AI. OpenAI-compatible APIs, SDKs, CLI, Terraform, and complete docs for real-world use.",
  },
};

const DevelopersPage = () => {
  return <DevelopersComponent />;
};

export default DevelopersPage;
