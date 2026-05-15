import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import DeployInstanceSection from "@/shared/components/DeployInstanceSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { Divider, Text } from "@/shared/ui-lib";
import StoragePerformanceSection from "./StoragePerformanceSection";
import DeployStorageSection from "./DeployStorageSection";
import MetricsSection from "./MetricsSection";
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
              weight="semibold"
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
          image="/images/gpu.png"
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
      <DeployInstanceSection
        showBorder={false}
        showBlur={false}
        title={
          <Text
            as="h2"
            textColor="white"
            weight="semibold"
            className="max-w-4xl"
          >
            Find the right model
            <Text as="span" variant="h2" textColor="primary">
              for your use case.
            </Text>
          </Text>
        }
        description="Every model row links to docs, the playground, and a one-click deploy template."
        image={{
          src: "/images/transparent-pricing.png",
          alt: "Pricing",
          width: 1000,
          height: 1000,
        }}
      />
      <FaqSection />
      <FooterComponent />
    </>
  );
};

export default NvmeComponent;
