import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { Divider, Text } from "@/shared/ui-lib";
import PricingSection from "./PricingSection";
import ComputeSection from "./ComputeSection";
import UseCasesSection from "./UseCasesSection";

const GpuClusterComponent = () => {
  return (
    <>
      <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection
          title={
            <Text as="h1" className="mt-4 md:mt-6 max-w-3xl text-center">
              The Right GPU for Every
              <Text as="span" variant="h1" textColor="primary">
                AI Workload
              </Text>
            </Text>
          }
          description="One platform. On-demand, reserved, or spot, all on India-sovereign infrastructure. Every instance includes InfiniBand networking, NVMe-attached storage, and pre-built ML images. Live within minutes."
          button1Text="Configure Now"
          button2Text="Compare GPUs"
          badgeText="Bare GPU Compute - Billed in INR"
          image="/images/gpu.png"
        />
      </section>
      <PricingSection />
      <ComputeSection />
      <UseCasesSection />
      <FaqSection />
      <FooterComponent />
    </>
  );
};

export default GpuClusterComponent;
