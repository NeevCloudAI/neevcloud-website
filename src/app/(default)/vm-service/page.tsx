import { VmServiceComponent } from "@/features/vm-service";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/vm-service",
  title: "VM Service | NeevCloud",
  description:
    "Deploy general-purpose Linux VMs alongside GPU infrastructure with NeevCloud VM Service. Shared networking, storage, and security policies, with optional GPU attachment and per-minute billing.",
  openGraphDescription:
    "General-purpose Linux VMs on the same platform as your GPU workloads, with optional GPU attachment and per-minute billing.",
});

const VmServicePage = () => {
  return <VmServiceComponent />;
};

export default VmServicePage;
