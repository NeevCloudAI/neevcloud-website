import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import { AI_INFERENCE_FAQ } from "../data/ai-inference-faq-section.data";
import { AI_INFERENCE_FOOTER } from "../data/ai-inference-page.data";
import AiInferenceCapabilitiesSection from "./AiInferenceCapabilitiesSection";
import AiInferenceHeroSection from "./AiInferenceHeroSection";
import AiInferenceScenariosSection from "./AiInferenceScenariosSection";
import AiInferenceTransparentPricingSection from "./AiInferenceTransparentPricingSection";
import AiInferenceDeploymentSection from "./AiInferenceDeploymentSection";

const AiInferencePage = () => {
  return (
    <>
      <AiInferenceHeroSection />
      <AiInferenceCapabilitiesSection />
      <AiInferenceScenariosSection />
      <AiInferenceTransparentPricingSection />
      <AiInferenceDeploymentSection />
      <FaqSection items={AI_INFERENCE_FAQ} className="pt-0 md:pt-0 2xl:pt-0" />
      <FooterComponent
        title={AI_INFERENCE_FOOTER.title}
        description={AI_INFERENCE_FOOTER.description}
        primaryCta={AI_INFERENCE_FOOTER.primaryCta}
        secondaryCta={AI_INFERENCE_FOOTER.secondaryCta}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default AiInferencePage;
