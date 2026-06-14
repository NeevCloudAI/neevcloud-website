import { DevelopersComponent } from "@/features/developers";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Developers | NeevCloud",
  description:
    "OpenAI-compatible APIs, Python and Node SDKs, CLI, Terraform support, and developer-first documentation. From zero to first inference call in under 5 minutes.",
  openGraphDescription:
    "Everything you need to build and scale AI. OpenAI-compatible APIs, SDKs, CLI, Terraform, and complete docs for real-world use.",
});

const DevelopersPage = () => {
  return <DevelopersComponent />;
};

export default DevelopersPage;
