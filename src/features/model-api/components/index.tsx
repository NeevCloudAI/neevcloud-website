import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { Divider, Text } from "@/shared/ui-lib";

const ModelApiComponent = () => {
  return (
    <>
      <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat">
        <AnnouncementSection />
        <HeaderComponent />
        <Divider orientation="horizontal" />
        <HeroSection
          title={
            <div className="flex flex-col items-center justify-center gap-1 md:gap-2 mt-4 md:mt-6">
              <Text
                as="h1"
                align="center"
                textColor="primary"
                weight="semibold"
                className=" md:leading-16"
              >
                Production-Ready
                <Text variant="h1" as="span" textColor="black">
                  AI Models
                </Text>
              </Text>
              <Text as="h1" align="center" weight="semibold">
                Through Simple APIs
              </Text>
            </div>
          }
          description1="Integrate modern AI models into your applications with clean, well-documented APIs. From "
          description2="prototype to production in minutes, not weeks."
          button1Text="Request API Access"
          button2Text="View Documentation"
          badgeText="Production AI Models"
          image="/images/gpu.png"
        />
      </section>
    </>
  );
};

export default ModelApiComponent;
