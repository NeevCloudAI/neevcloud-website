import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { SERVERLESS_INFERENCE_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import { Divider, Text } from "@/shared/ui-lib";
import HeroSection from "@/shared/components/HeroSection";
import AIStackSection from "./AIStackSection";
import PricingSection from "@/shared/components/pricing/Pricingsection";
import ThreeStepsSection from "./Threestepssection";
import ModelsSection from "./models/ModelsSection";
import ModelBuilderSection from "@/shared/components/ModelBuilderSection";
import { SERVERLESS_MODEL_BUILDER_PROPS } from "../data/serverless-model-builder";

const ServerlessInferenceComponent = () => {
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
              >
                The Right GPU for Every
              </Text>
              <Text
                as="h1"
                align="center"
                weight="semibold"
                textColor="primary"
              >
                AI Workload
              </Text>
            </div>
          }
          description1="NeevCloud Serverless Inference gives you instant API access to 20+ production-ready open-source"
          description2="models. OpenAI-compatible, sub-50ms latency, billed in INR, with every request processed inside"
          description3="India."
          button1Text="Try in Playground"
          button2Text="View Pricing"
          badgeText="Bare GPU Compute - Billed in INR"
          image="/images/serverless.png"
        />
      </section>
      <ThreeStepsSection />
      <ModelBuilderSection {...SERVERLESS_MODEL_BUILDER_PROPS} />
      <ModelsSection />
      <PricingSection
        headingInline
        headingLine1="Token pricing."
        headingLine2Primary="No Surprises."
        subText={[
          "Pay per token, input and output billed separately. All charges in INR. Volume discounts unlock ",
          "automatically above 10M tokens per month. Reserved inference capacity available for high-volume",
          "workloads.",
        ]}
        imageSrc="/images/inference-pricing.png"
        buttons={[
          { label: "View Complete Pricing" },
          {
            label: "Contact for Custom Plans",
            variant: "white",
            textColor: "black",
          },
        ]}
      />
      <AIStackSection />
      <FaqSection items={SERVERLESS_INFERENCE_FAQ_ITEMS} />
      <FooterComponent />
    </>
  );
};

export default ServerlessInferenceComponent;
