import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import GenerativeAiHeroSection from "./GenerativeAiHeroSection";
import GenerativeAiInfrastructureSection from "./GenerativeAiInfrastructureSection";
import GenerativeAiApplicationSection from "./GenerativeAiApplicationSection";
import { GENERATIVE_AI_FAQ_ITEMS } from "../data/faq-section.data";
import { GENERATIVE_AI_FOOTER } from "../data/generative-ai-page.data";
import GenerativeAiDeploymentSection from "./GenerativeAiDeploymentSection";
import GenerativeAiPerformanceSection from "./GenerativeAiPerformanceSection";

const GenerativeAiPage = () => {
  return (
    <>
      <GenerativeAiHeroSection />
      <GenerativeAiInfrastructureSection />
      <GenerativeAiApplicationSection />
      <GenerativeAiDeploymentSection />
      <GenerativeAiPerformanceSection />
      <FaqSection items={GENERATIVE_AI_FAQ_ITEMS} />
      <FooterComponent
        {...GENERATIVE_AI_FOOTER}
        
      />
    </>
  );
};

export default GenerativeAiPage;
