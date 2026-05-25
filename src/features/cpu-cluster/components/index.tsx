import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import OSImageSection from "./os-image/OSImageSection";
import PrivateNetworkSection from "./private-network/private-network-section";
import FooterComponent from "@/shared/components/footer";
import { Divider, Text } from "@/shared/ui-lib";
import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import HeroSection from "@/shared/components/HeroSection";
import AIStackSection from "./AIStackSection";
import CPUWorkloadsSection from "./CPUWorkloadSection";

const CpuClusterComponent = () => {
  return (
    <>
      <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection
          title={
            <Text as="h1" className="max-w-7xl text-center mt-4 md:mt-6 ">
              The
              <Text as="span" variant="h1" textColor="primary">
                Control Plane
              </Text>
              for your GPU Cluster. Everything That Runs Around It.
            </Text>
          }
          description="Model API gateways, data pipelines, orchestration control planes, and monitoring stacks, every AI deployment needs CPU alongside its GPUs. NeevCloud CPU instances are co-located with GPU clusters in the same private network. No egress charges between them."
          button1Text="Deploy Instance"
          button2Text="View Pricing"
          badgeText="CPU Compute for AI Infrastructure"
          image="/images/cpu.png"
        />
      </section>
      <CPUWorkloadsSection />
      <AIStackSection />
      <OSImageSection />
      <PrivateNetworkSection />
      <FaqSection items={CPU_CLUSTER_FAQ_ITEMS} />
      <FooterComponent
        title="Launch Your First CPU Instance"
        description="Deploy general-purpose, compute-optimized, or memory-optimized instances in minutes. Co-located with GPU clusters for zero egress charges."
        button1Text="Configure Now"
        button2Text="Talk to Our Team"
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default CpuClusterComponent;
