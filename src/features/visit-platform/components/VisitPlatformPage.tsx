import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import VisitPlatformHeroSection from "./VisitPlatformHeroSection";
import { VISIT_PLATFORM_FAQ_ITEMS } from "../data/faq-section.data";
import { MODEL_PLAYGROUND_FOOTER } from "../data/model-playground-page.constants";
import AiDevelopmentSection from "./AiDevelopmentSection";
import InfrastructureSection from "./InfrastructureSection";
import CompleteAISection from "./AiControl";
import LlmDeploymentSection from "./LlmDeploymentSection";
import GettingStartedSection from "./GettingStartedSection";

const VisitPlatformPage = () => {
  return (
    <>
      <VisitPlatformHeroSection />
      <LlmDeploymentSection />
      <InfrastructureSection />
      <AiDevelopmentSection />
      <CompleteAISection />
      <GettingStartedSection />
      <FaqSection
        items={VISIT_PLATFORM_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title={MODEL_PLAYGROUND_FOOTER.title}
        description={MODEL_PLAYGROUND_FOOTER.description}
        primaryCta={MODEL_PLAYGROUND_FOOTER.primaryCta}
        secondaryCta={MODEL_PLAYGROUND_FOOTER.secondaryCta}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default VisitPlatformPage;
