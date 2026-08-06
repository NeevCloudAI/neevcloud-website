import { VmServiceComponent } from "@/features/vm-service";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/vm-service",
  title: "GPU & CPU Virtual Machines for AI/ML | NeevCloud",
  description:
    "On-demand GPU and CPU VMs built for AI/ML. Provision in minutes, attach a pre-built AI template, and connect via SSH. NVIDIA H100, H200, RTX PRO 6000 & more hosted in India.",
});

const VmServicePage = () => {
  return <VmServiceComponent />;
};

export default VmServicePage;
