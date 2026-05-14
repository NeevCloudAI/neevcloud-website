import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import DeployInstanceSection from "@/shared/components/DeployInstanceSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import ModelBuilderSection from "@/shared/components/ModelBuilderSection";
import { Divider, Text } from "@/shared/ui-lib";
import InferenceStackSection from "./InferenceStackSection";
import ModelsSection from "./ModelsSection";
import ThreeStepsSection from "./Threestepssection";

const ServerlessInferenceComponent = () => {
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
                weight="semibold"
                className="md:leading-16"
              >
                Run Any Model. Pay Per Token.
              </Text>
              <Text
                as="h1"
                align="center"
                weight="semibold"
                textColor="primary"
              >
                No GPUs
                <Text variant="h1" as="span" textColor="black">
                  to Manage
                </Text>
              </Text>
            </div>
          }
          description1="NeevCloud Serverless Inference gives you instant API access to 20+ production-ready open-source"
          description2="models. OpenAI-compatible, sub-50ms latency, billed in INR, with every request processed inside"
          description3="India."
          button1Text="Try in Playground"
          button2Text="View Pricing"
          badgeText="India's Sovereign Inference Cloud"
          image="/images/serverless.png"
        />
      </section>
      <ThreeStepsSection />
      <ModelBuilderSection />
      <ModelsSection />
      <DeployInstanceSection
        title={
          <>
            <Text as="h2" weight={"semibold"} textColor="white">
              Token Pricing.
              <Text
                as="span"
                variant="h2"
                textColor="primary"
                weight={"semibold"}
              >
                No Surprises.
              </Text>
            </Text>
          </>
        }
        description1="Pay per token, input and output billed separately. All charges in INR. Volume discounts unlock"
        description2="automatically above 10M tokens per month. Reserved inference capacity available for high-volume"
        description3="workloads."
        image={{
          src: "/images/token-pricing.png",
          alt: "Pricing",
          width: 1000,
          height: 1000,
        }}
        buttonText1="View Complete Pricing"
        buttonText2="Contact for Custom Plans"
      />
      <InferenceStackSection />
      <FaqSection />
      <FooterComponent />
    </>
  );
};

export default ServerlessInferenceComponent;
