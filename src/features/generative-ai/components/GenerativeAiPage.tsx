import AnnouncementSection from "@/shared/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
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
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <GenerativeAiHeroSection />
      <GenerativeAiInfrastructureSection />
      <GenerativeAiApplicationSection />
      <GenerativeAiDeploymentSection />
      <GenerativeAiPerformanceSection />
      <FaqSection items={GENERATIVE_AI_FAQ_ITEMS} />
      <FooterComponent
        title={GENERATIVE_AI_FOOTER.title}
        description={GENERATIVE_AI_FOOTER.description}
        button1Text={GENERATIVE_AI_FOOTER.button1Text}
        button2Text={GENERATIVE_AI_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default GenerativeAiPage;
