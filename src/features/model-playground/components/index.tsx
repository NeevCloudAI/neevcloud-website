import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { Divider, Text } from "@/shared/ui-lib";
import ExploreModelsSection from "./ExploreModelsSection";
import ExperimentationSection from "./ExperimentationSection";

const ModelPlaygroundComponent = () => {
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
                textColor="primary"
              >
                Experience
                <Text variant="h1" as="span" textColor="black">
                  AI Models
                </Text>
              </Text>
              <Text as="h1" textColor="black">
                Before You Deploy
              </Text>
            </div>
          }
          description1="Test and explore production-ready AI models through an interactive interface. No code required, no"
          description2="setup needed, just instant access to see what's possible."
          button1Text="Try in Playground"
          button2Text="View ALL Models"
          badgeText="Test AI Models Free"
          image="/images/playground.png"
        />
      </section>
      <ExperimentationSection />
      <ExploreModelsSection />
      <FaqSection />
      <FooterComponent />
    </>
  );
};

export default ModelPlaygroundComponent;
