import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import AgenticStudioHeroSection from "./AgenticStudioHeroSection";
import WhyAgenticStudioSection from "./WhyAgenticStudioSection";
import UseCasesSection from "./UseCasesSection";
import { AGENTIC_STUDIO_FOOTER } from "../constants/agentic-studio-page.constants";
import { AGENTIC_STUDIO_FAQ_ITEMS } from "../data/faq-section.data";

const AgenticStudioPage = () => {
  return (
    <>
      <AgenticStudioHeroSection />
      <WhyAgenticStudioSection />
      <UseCasesSection />
      <FaqSection items={AGENTIC_STUDIO_FAQ_ITEMS} />
      <FooterComponent
        {...AGENTIC_STUDIO_FOOTER}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default AgenticStudioPage;
