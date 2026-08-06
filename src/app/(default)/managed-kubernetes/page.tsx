import { ManagedKubernetesComponent } from "@/features/managed-kubernetes";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/managed-kubernetes",
  title: "Managed Kubernetes - GPU-Aware K8s | NeevCloud",
  description:
    "Deploy GPU workloads on managed Kubernetes. Pre-configured device plugins, InfiniBand networking, autoscaling. H100, H200, A100 ready.",
});

const ManagedKubernetesPage = () => {
  return <ManagedKubernetesComponent />;
};

export default ManagedKubernetesPage;
