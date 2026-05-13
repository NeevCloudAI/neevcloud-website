import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import OSImageSection from "./os-image/OSImageSection";
import PrivateNetworkSection from "./private-network/private-network-section";
import FooterComponent from "@/shared/components/footer";
import { Divider, Text } from "@/shared/ui-lib";
import FaqSection from "@/shared/components/faq/faq-section";
import HeroSection from "@/shared/components/HeroSection";
import DeployInstanceSection from "./DeployInstanceSection";
import AIStackSection from "./AIStackSection";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import PricingSection from "@/shared/components/pricing/Pricingsection";

const CpuClusterComponent = () => {
  return (
    <>
      <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection
          title={
            <div className="flex items-center justify-center gap-1 md:gap-2 mt-4 md:mt-6">
              <Text
                as="h1"
                align="center"
                weight="semibold"
                className=" md:leading-16"
              >
                The
                <Text variant="h1" as="span" textColor="primary">
                  Control Plane
                </Text>
                for your GPU Cluster. Everything That Runs Around It.
              </Text>
            </div>
          }
          description1="Model API gateways, data pipelines, orchestration control planes, and monitoring stacks, every AI"
          description2="deployment needs CPU alongside its GPUs. NeevCloud CPU instances are co-located with GPU"
          description3="clusters in the same private network. No egress charges between them."
          button1Text="Deploy Instance"
          button2Text="View Pricing"
          badgeText="CPU Compute for AI Infrastructure"
          image="/images/cpu.png"
        />
      </section>
      <PricingSection
        headingLine1="Every Workload"
        headingLine2Primary="Flat rate."
        headingLine2White="Unmetered."
        subText="Commit and Save. The Longer the Plan, the Lower the Rate."
        imageSrc="/images/deploy-instance.png"
        buttons={[
          { label: "Deploy Instance" },
          
        ]}
      />

      <AIStackSection />
      <OSImageSection />
      <PrivateNetworkSection />
      <FaqSection items={CPU_CLUSTER_FAQ_ITEMS} />
      <FooterComponent />
    </>
  );
};

export default CpuClusterComponent;
