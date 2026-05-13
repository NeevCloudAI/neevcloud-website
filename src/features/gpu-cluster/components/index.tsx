import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { Divider, Text } from "@/shared/ui-lib";
import PricingSection from "@/shared/components/pricing/Pricingsection";
import ComputeSection from "./ComputeSection";
import UseCasesSection from "./UseCasesSection";
import { GPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";

const GpuClusterComponent = () => {
  return (
    <>
      <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection
          title={
            <div className="flex flex-row md:flex-col items-center justify-center gap-1 md:gap-2 mt-4 md:mt-6">
              <Text
                as="h1"
                align="center"
                weight="semibold"
                className=" md:leading-16"
              >
                The Right GPU for Every
              </Text>
              <Text
                as="h1"
                align="center"
                weight="semibold"
                textColor="primary"
              >
                AI Workload
              </Text>
            </div>
          }
          description1="One platform. On-demand, reserved, or spot, all on India-sovereign infrastructure. Every instance"
          description2="includes InfiniBand networking, NVMe-attached storage, and pre-built ML images. Live within"
          description3="minutes."
          button1Text="Configure Now"
          button2Text="Compare GPUs"
          badgeText="Bare GPU Compute - Billed in INR"
          image="/images/gpu.png"
        />
      </section>
      <PricingSection
        headingLine1="Every Workload"
        headingLine2Primary="Flat rate."
        headingLine2White="Unmetered."
        subText="Commit and Save. The Longer the Plan, the Lower the Rate."
        imageSrc="/images/pricing.png"
        buttons={[
          { label: "View Complete Pricing" },
          {
            label: "Contact for Custom Plans",
            variant: "white",
            textColor: "black",
          },
        ]}
      />
      <ComputeSection />
      <UseCasesSection />
      <FaqSection items={GPU_CLUSTER_FAQ_ITEMS} />
      <FooterComponent />
    </>
  );
};

export default GpuClusterComponent;
