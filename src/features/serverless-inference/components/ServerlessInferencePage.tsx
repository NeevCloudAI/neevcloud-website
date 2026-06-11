import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import ModelBuilderSection from "@/shared/components/ModelBuilderSection";
import ThreeStepSection from "./ThreeStepSection";
import ServerlessInferenceHeroSection from "./ServerlessInferenceHeroSection";
import ModelsSection from "./ModelsSection";
import TokenPricingSection from "./TokenPricingSection";
import InferenceStackSection from "./InferenceStackSection";
import { SERVERLESS_INFERENCE_FOOTER } from "../constants/serverless-inference-page.constants";
import { INFERENCE_API_FAQ_ITEMS } from "../data/faq-section-data";

const ServerlessInferencePage = () => {
  return (
    <>
      <ServerlessInferenceHeroSection />
      <ThreeStepSection />
      <ModelBuilderSection />
      <ModelsSection />
      <TokenPricingSection />
      <InferenceStackSection />
      <FaqSection
        items={INFERENCE_API_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        {...SERVERLESS_INFERENCE_FOOTER}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default ServerlessInferencePage;
