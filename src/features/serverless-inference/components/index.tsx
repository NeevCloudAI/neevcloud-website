import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import HeroSection from "@/shared/components/HeroSection";
import ModelBuilderSection from "@/shared/components/ModelBuilderSection";
import { Divider, Text } from "@/shared/ui-lib";
import InferenceStackSection from "./InferenceStackSection";
import ModelsSection from "./ModelsSection";
import ThreeStepsSection from "./Threestepssection";
import TokenPricingSection from "./TokenPricingSection";

const ServerlessInferenceComponent = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <HeroSection
        title={
          <Text as="h1" className="max-w-4xl text-center mt-4 md:mt-6">
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
      />
      <ThreeStepsSection />
      <ModelBuilderSection />
      <ModelsSection />
      <TokenPricingSection />
      <InferenceStackSection />
      <FaqSection
        items={CPU_CLUSTER_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title="Ready to Run Your First Inference?"
        description="Deploy general-purpose, compute-optimized, or memory-optimized instances in minutes. Co-located with GPU clusters for zero egress charges."
        button1Text="Get Free API Key"
        button2Text="Read the Docs"
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default ServerlessInferenceComponent;
