import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import AiTemplatesHeroSection from "./AiTemplatesHeroSection";
import WhyTemplatesSection from "./WhyTemplatesSection";
import WorkloadSection from "./WorkloadSection";
import KeyBenefitsSection from "./KeyBenefitsSection";
import { AI_TEMPLATES_FOOTER } from "../constants/ai-templates-page.constants";
import { AI_TEMPLATES_FAQ_ITEMS } from "../data/faq-section.data";

const AiTemplatesPage = () => {
  return (
    <>
      <AiTemplatesHeroSection />
      <WhyTemplatesSection />
      <WorkloadSection />
      <KeyBenefitsSection />
      <FaqSection items={AI_TEMPLATES_FAQ_ITEMS} />
      <FooterComponent {...AI_TEMPLATES_FOOTER} />
    </>
  );
};

export default AiTemplatesPage;
