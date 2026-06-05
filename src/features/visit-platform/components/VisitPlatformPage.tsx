import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
import AnnouncementSection from "@/shared/components/AnnouncementSection";
import VisitPlatformHeroSection from "./VisitPlatformHeroSection";
import { MODEL_PLAYGROUND_FOOTER } from "../data/model-playground-page.constants";
import InfrastructureSection from "./InfrastructureSection";
import CompleteAISection from "./AiControl";
import LlmDeploymentSection from "./LlmDeploymentSection";
const VisitPlatformPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <VisitPlatformHeroSection />
      <LlmDeploymentSection />
      <InfrastructureSection />
      <CompleteAISection />

      <FooterComponent
        title={MODEL_PLAYGROUND_FOOTER.title}
        description={MODEL_PLAYGROUND_FOOTER.description}
        button1Text={MODEL_PLAYGROUND_FOOTER.button1Text}
        button2Text={MODEL_PLAYGROUND_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default VisitPlatformPage;
