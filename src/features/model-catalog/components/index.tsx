import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { Divider, Text } from "@/shared/ui-lib";
import ModelInformationSection from "./ModelInformationSection";
import UseModelSection from "./UseModelSection";
import RightModelSection from "./RightModelSection";
import ModelActionSection from "./ModelActionSection";

const ModelCatalogComponent = () => {
  return (
    <>
      <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection
          title={
            <Text as="h1" align="center" className="max-w-4xl mt-4 md:mt-6">
              20+ production-Ready AI models.
              <Text variant="h1" as="span" textColor="primary">
                One platform.
              </Text>
            </Text>
          }
          description="Browse, filter, and test language, vision, and audio models. Every model is production-ready, OpenAI-compatible, and runs on infrastructure within India."
          button1Text="Try Models Free"
          button2Text="Get API Access"
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
      <ModelActionSection />
      <RightModelSection />
      <ModelInformationSection />
      <UseModelSection />
      <FooterComponent
        title="Start Building with Model APIs Today"
        description="Create an account and receive 10,000 free API requests. No credit card required."
        button1Text="Request API Access"
        button2Text="View Documentation"
      />
    </>
  );
};

export default ModelCatalogComponent;
