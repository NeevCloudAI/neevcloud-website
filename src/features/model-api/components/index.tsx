import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { MODEL_API_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import { Divider, Text } from "@/shared/ui-lib";
import ExploreModelsSection from "@/features/model-api/components/ExploreModelsSection";
import AvailableModelsSection from "@/features/model-api/components/AvailableModelsSection";
import ModelApiPricingSection from "./PricingSection";
const ModelApiComponent = () => {
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
                Production-Ready
                <Text variant="h1" as="span" textColor="black">
                  AI Models
                </Text>
              </Text>
              <Text as="h1" textColor="black">
                Through Simmple APIs
              </Text>
            </div>
          }
          description1="Integrate modern AI models into your applications with clean, well-documented APIs. From"
          description2="prototype to production in minutes, not weeks."
          button1Text="Request API Access"
          button2Text="View Documentation"
          badgeText="Production AI Models"
          image="/images/model-api.png"
        />
      </section>
      <AvailableModelsSection />
      <ExploreModelsSection />
      <ModelApiPricingSection/>
      <FaqSection items={MODEL_API_FAQ_ITEMS} />
      <FooterComponent />
    </>
  );
};

export default ModelApiComponent;
