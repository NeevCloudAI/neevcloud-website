import FooterComponent from "@/shared/components/footer";
import AiTemplatesHeroSection from "./AiTemplatesHeroSection";
import WhyTemplatesSection from "./WhyTemplatesSection";
import WorkloadSection from "./WorkloadSection";
import KeyBenefitsSection from "./KeyBenefitsSection";
import { AI_TEMPLATES_FOOTER } from "../constants/ai-templates-page.constants";

const AiTemplatesPage = () => {
  return (
    <>
      <AiTemplatesHeroSection />
      <WhyTemplatesSection />
      <WorkloadSection />
      <KeyBenefitsSection />
      <FooterComponent {...AI_TEMPLATES_FOOTER} />
    </>
  );
};

export default AiTemplatesPage;
