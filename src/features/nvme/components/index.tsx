import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { Divider, Text } from "@/shared/ui-lib";
import StoragePerformanceSection from "./StoragePerformanceSection";
import DeployStorageSection from "./DeployStorageSection";
import MetricsSection from "./MetricsSection";
import TransparentPricingSection from "./TransparentPricingSection";
const NvmeComponent = () => {
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
              textColor="primary"
              className="max-w-4xl mt-4 md:mt-6"
            >
              NVMe Storage
              <Text variant="h1" as="span" textColor="black">
                Built for AI Workloads
              </Text>
            </Text>
          }
          description="Eliminate I/O bottlenecks with local NVMe disks that keep your GPUs saturated, not waiting. Training large models and running data-intensive inference pipelines demands storage that can keep pace."
          button1Text="Deploy with NVMe"
          button2Text="View Storage Pricing"
          badgeText="High-Performance NVMe Storage"
          image="/images/nvme.png"
          trustBadges={[
            "Sub-millisecond latency",
            "High sequential throughput",
            "Per-instance attachment",
            "No cross-tenant contention",
            "Included with GPUs",
          ]}
        />
      </section>
      <StoragePerformanceSection />
      <MetricsSection />
      <DeployStorageSection />
      <TransparentPricingSection />
      <FaqSection
        items={CPU_CLUSTER_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title="Start GPU Compute with NVMe"
        description="Sub-millisecond latency, 7 GB/s throughput. Keep your GPUs saturated, not waiting. 25GB is included free with every GPU instance."
        button1Text="Deploy with NVMe"
        button2Text="View Storage Pricing"
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default NvmeComponent;
