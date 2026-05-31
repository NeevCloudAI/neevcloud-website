import AnnouncementSection from "@/shared/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
import AgenticWorkflowHeroSection from "./AgenticWorkflowHeroSection";
import AgenticWorkflowInfrastructureSection from "./AgenticWorkflowInfrastructureSection";
import AgenticWorkflowApplicationSection from "./AgenticWorkflowApplicationSection";
import { AGENTIC_WORKFLOW_FAQ_ITEMS } from "../data/faq-section.data";
import { AGENTIC_WORKFLOW_FOOTER } from "../data/agentic-workflow-page.data";

const AgenticWorkflowPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <AgenticWorkflowHeroSection />
      <AgenticWorkflowInfrastructureSection />
      <AgenticWorkflowApplicationSection />
      <FaqSection items={AGENTIC_WORKFLOW_FAQ_ITEMS} />
      <FooterComponent
        title={AGENTIC_WORKFLOW_FOOTER.title}
        description={AGENTIC_WORKFLOW_FOOTER.description}
        button1Text={AGENTIC_WORKFLOW_FOOTER.button1Text}
        button2Text={AGENTIC_WORKFLOW_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default AgenticWorkflowPage;
