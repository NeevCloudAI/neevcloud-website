import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import DeployInstanceSection from "@/shared/components/DeployInstanceSection";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import { Divider, Text } from "@/shared/ui-lib";
import ModelInformationSection from "./ModelInformationSection";
import UseModelSection from "./UseModelSection";

const ModelCatalogComponent = () => {
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
              className="max-w-4xl mt-4 md:mt-6"
            >
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
      <DeployInstanceSection
        title={
          <>
            <Text as="h2" textColor="black" weight="semibold">
              See Any Model in
              <Text
                as="span"
                variant="h2"
                textColor="primary"
                weight="semibold"
              >
                Action
              </Text>
            </Text>
          </>
        }
        description="Pick a model, send a prompt, watch it respond. Latency, token count, and cost stream in real time, exactly what you'd see hitting the production API."
        image={{
          src: "/images/model-action.png",
          alt: "Pricing",
          width: 1000,
          height: 1000,
        }}
        showBGImage={false}
        showLogo={false}
        showBlur={false}
      />
      <DeployInstanceSection
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
          src: "/images/right-model.png",
          alt: "Pricing",
          width: 1000,
          height: 1000,
        }}
      />
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
