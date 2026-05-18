import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { Divider, Text } from "@/shared/ui-lib";
import ExploreModelsSection from "./ExploreModelsSection";
import ExperimentationSection from "./ExperimentationSection";
import AvailableModelsSection from "./AvailableModelsSection";
import ModelsSection from "./ModelsSection";

const ModelPlaygroundComponent = () => {
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
              className="max-w-4xl mt-4"
              textColor="primary"
            >
              Experience
              <Text variant="h1" as="span" textColor="black">
                AI Models Before You Deploy
              </Text>
            </Text>
          }
          description="Test and explore production-ready AI models through an interactive interface. No code required, no setup needed, just instant access to see what's possible."
          button1Text="Try in Playground"
          button2Text="View ALL Models"
          badgeText="Test AI Models Free"
          image="/images/playground.png"
          trustBadges={[
            "Data residency in India",
            "DPDP Act compliant",
            "SOC 2 Type II",
            "Data never used for training",
            "99.9% uptime SLA",
          ]}
        />
      </section>
      <ModelsSection />
      <AvailableModelsSection />
      <ExperimentationSection />
      <ExploreModelsSection />
      <FaqSection items={CPU_CLUSTER_FAQ_ITEMS} />
      <FooterComponent
        title="Launch Your First CPU Instance"
        description="Deploy general-purpose, compute-optimized, or memory-optimized instances in minutes. Co-located with GPU clusters for zero egress charges."
        button1Text="Configure Now"
        button2Text="Talk to Our Team"
      />
    </>
  );
};

export default ModelPlaygroundComponent;
