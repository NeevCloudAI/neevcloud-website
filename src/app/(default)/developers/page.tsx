import { DevelopersComponent } from "@/features/developers";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/developers",
  title: "Developer Platform - APIs, SDKs & Docs | NeevCloud",
  description:
    "Build, train, and deploy faster with OpenAI-compatible APIs, SDKs, CLI, and Terraform support. Complete documentation designed for developers.",
});

const DevelopersPage = () => {
  return <DevelopersComponent />;
};

export default DevelopersPage;
