import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
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
        title={SERVERLESS_INFERENCE_FOOTER.title}
        description={SERVERLESS_INFERENCE_FOOTER.description}
        button1Text={SERVERLESS_INFERENCE_FOOTER.button1Text}
        button2Text={SERVERLESS_INFERENCE_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default ServerlessInferencePage;
