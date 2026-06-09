import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import { WHY_AI_SUPERCLOUD_FAQ_ITEMS } from "../data/faq-section.data";
import { WHY_AI_SUPERCLOUD_FOOTER } from "../data/why-ai-supercloud-page.data";
import AiSupercloudByNumbersSection from "./AiSupercloudByNumbersSection";
import CloudComparisonSection from "./CloudComparisonSection";
import ProblemSolutionSection from "./ProblemSolutionSection";
import WhyAiSupercloudHeroSection from "./WhyAiSupercloudHeroSection";

const WhyAiSupercloudPage = () => {
  return (
    <>
      <WhyAiSupercloudHeroSection />
      <ProblemSolutionSection />
      <CloudComparisonSection />
      <AiSupercloudByNumbersSection />
      <FaqSection
        items={WHY_AI_SUPERCLOUD_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        {...WHY_AI_SUPERCLOUD_FOOTER}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default WhyAiSupercloudPage;
