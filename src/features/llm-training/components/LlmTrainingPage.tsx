import AnnouncementSection from "@/shared/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
import LlmTrainingHeroSection from "./LlmTrainingHeroSection";
import LlmTrainingInfrastructureSection from "./LlmTrainingInfrastructureSection";
import LlmTrainingApplicationSection from "./LlmTrainingApplicationSection";
import { LLM_TRAINING_FAQ_ITEMS } from "../data/faq-section.data";
import { LLM_TRAINING_FOOTER } from "../data/llm-training-page.data";
import LlmDeploymentSection from "./LlmDeploymentSection";

const LlmTrainingPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <LlmTrainingHeroSection />
      <LlmTrainingInfrastructureSection />
      <LlmTrainingApplicationSection />
      <LlmDeploymentSection />
      <FaqSection items={LLM_TRAINING_FAQ_ITEMS} />
      <FooterComponent
        title={LLM_TRAINING_FOOTER.title}
        description={LLM_TRAINING_FOOTER.description}
        button1Text={LLM_TRAINING_FOOTER.button1Text}
        button2Text={LLM_TRAINING_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default LlmTrainingPage;
