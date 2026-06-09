import type { Metadata } from "next";
import { ManagedKubernetesComponent } from "@/features/managed-kubernetes";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Managed Kubernetes | NeevCloud",
  description:
    "Deploy inference servers, training pipelines, and multi-tenant ML platforms on GPU-aware Kubernetes. Device plugins pre-installed. InfiniBand configured. Autoscaling included.",
  openGraph: {
    title: "Managed Kubernetes | NeevCloud",
    description:
      "GPU-aware Kubernetes for inference servers, training pipelines, and ML platforms. Device plugins, InfiniBand, and autoscaling included.",
  },
};

const ManagedKubernetesPage = () => {
  return <ManagedKubernetesComponent />;
};

export default ManagedKubernetesPage;
