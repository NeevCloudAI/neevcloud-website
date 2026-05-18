import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { Divider, Text } from "@/shared/ui-lib";
import ExploreApiSection from "./ExploreApiSection";
import IntelligenceSection from "./IntelligenceSection";
import PaySection from "./PaySection";

const ModelApiComponent = () => {
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
              weight="semibold"
              className="max-w-4xl mt-4 md:mt-6"
            >
              Production-Ready
              <Text variant="h1" as="span" textColor="black">
                AI Models Through Simple APIs
              </Text>
            </Text>
          }
          description="Integrate modern AI models into your applications with clean, well-documented APIs. From prototype to production in minutes, not weeks."
          button1Text="Request API Access"
          button2Text="View Documentation"
          badgeText="Production AI Models"
          image="/images/playground.png"
          trustBadges={[
            "Sub-100ms Latency",
            "RESTful APIs",
            "SOC 2 Type II",
            "Multi-Framework Support",
            "99.9% uptime SLA",
          ]}
        />
      </section>
      <IntelligenceSection />
      <ExploreApiSection />
      <PaySection />
      <FaqSection items={CPU_CLUSTER_FAQ_ITEMS} />
      <FooterComponent
        title="Start Building with Model APIs Today"
        description="Create an account and receive 10,000 free API requests. No credit card required."
        button1Text="Request API Access"
        button2Text="View Documentation"
      />
    </>
  );
};

export default ModelApiComponent;
