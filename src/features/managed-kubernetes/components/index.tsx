import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import { Divider, Text } from "@/shared/ui-lib";
import ControlPlaneSection from "./ControlPlaneSection";
import NeedsSection from "./NeedsSection";
import DeployWorkloadSection from "./DeployWorkloadSection";
import PurposeSection from "./PurposeSection";

const ManagedKubernetesComponent = () => {
  return (
    <>
      <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection
          title={
            <Text
              as="h1"
              align="center"
              weight="semibold"
              className="max-w-6xl mt-4 md:mt-6"
            >
              Kubernetes Built for GPUs.
              <Text
                variant="h1"
                as="span"
                textColor="primary"
                className="mr-0 md:mr-0"
              >
                Managed
              </Text>
              {`, So You Don't Have To Be.`}
            </Text>
          }
          description="Deploy inference servers, training pipelines, and multi-tenant ML platforms on GPU-aware Kubernetes. Device plugins pre-installed. InfiniBand configured. Autoscaling included. You deploy pods, we handle the rest."
          button1Text="Deploy Your Cluster"
          button2Text="View Documentation"
          badgeText="GPU-Aware Kubernetes"
          image="/images/kubernetes.png"
          trustBadges={[
            "Zero manual GPU config",
            "InfiniBand ready",
            "Autoscaling node pools",
            "99.9% control plane SLA",
            "Free control plane",
          ]}
        />
      </section>
      <PurposeSection />
      <NeedsSection />
      <DeployWorkloadSection />
      <ControlPlaneSection />
      <FaqSection items={CPU_CLUSTER_FAQ_ITEMS} />
      <FooterComponent
        title="Deploy GPU-Aware Kubernetes."
        description="Create your first cluster with H100, H200, or A100 node pools. Device plugins, InfiniBand, and autoscaling are included. The control plane is free."
        button1Text="Create Cluster"
        button2Text="View Documentation"
      />
    </>
  );
};

export default ManagedKubernetesComponent;
