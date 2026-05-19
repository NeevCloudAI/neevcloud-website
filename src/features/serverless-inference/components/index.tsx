import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import DeployInstanceSection from "@/shared/components/DeployInstanceSection";
import FaqSection from "@/shared/components/faq/faq-section";
import { SERVERLESS_INFERENCE_FAQ_ITEMS } from "@/shared/data/faq-section-data";
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
            <Text
              as="h1"
              weight="semibold"
              className="max-w-4xl text-center mt-4 md:mt-6"
            >
              Run Any Model. Pay Per Token.
              <Text as="span" variant="h1" textColor="primary">
                No GPUs
              </Text>
              to Manage.
            </Text>
          }
          description="NeevCloud Serverless Inference gives you instant API access to 20+ production-ready open-source models. OpenAI-compatible, sub-50ms latency, billed in INR, with every request processed India."
          button1Text="Try in Playground"
          button2Text="View Pricing"
          badgeText="India's Sovereign Inference Cloud"
          image="/images/serverless.png"
          trustBadges={[
            "Data residency in India",
            "DPDP Act compliant",
            "SOC 2 Type II",
            "Data never used for training",
            "99.9% uptime SLA",
          ]}
        />
      </section>
      <ThreeStepsSection />
      <ModelBuilderSection />
      <ModelsSection />
      <DeployInstanceSection
        title={
          <>
            <Text
              as="h2"
              weight="semibold"
              textColor="white"
              className="max-w-4xl"
            >
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
        description="Pay per token, input and output billed separately. All charges in INR. Volume discounts unlock automatically above 10M tokens per month. Reserved inference capacity available for high-volume workloads."
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
      <FaqSection items={SERVERLESS_INFERENCE_FAQ_ITEMS} />
      <FooterComponent
        title="Ready to Run Your First Inference?"
        description="Deploy general-purpose, compute-optimized, or memory-optimized instances in minutes. Co-located with GPU clusters for zero egress charges."
        button1Text="Get Free API Key"
        button2Text="Read the Docs"
      />
    </>
  );
};

export default ServerlessInferenceComponent;
