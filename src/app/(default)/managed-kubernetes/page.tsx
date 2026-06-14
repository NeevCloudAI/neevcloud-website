import { ManagedKubernetesComponent } from "@/features/managed-kubernetes";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Managed Kubernetes | NeevCloud",
  description:
    "Deploy inference servers, training pipelines, and multi-tenant ML platforms on GPU-aware Kubernetes. Device plugins pre-installed. InfiniBand configured. Autoscaling included.",
  openGraphDescription:
    "GPU-aware Kubernetes for inference servers, training pipelines, and ML platforms. Device plugins, InfiniBand, and autoscaling included.",
});

const ManagedKubernetesPage = () => {
  return <ManagedKubernetesComponent />;
};

export default ManagedKubernetesPage;
