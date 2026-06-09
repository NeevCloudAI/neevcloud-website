import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import AgenticWorkflowHeroSection from "./AgenticWorkflowHeroSection";
import AgenticWorkflowInfrastructureSection from "./AgenticWorkflowInfrastructureSection";
import AgenticWorkflowApplicationSection from "./AgenticWorkflowApplicationSection";
import AgenticWorkflowDeploymentSection from "./AgenticWorkflowDeploymentSection";
import { AGENTIC_WORKFLOW_FAQ_ITEMS } from "../data/faq-section.data";
import { AGENTIC_WORKFLOW_FOOTER } from "../data/agentic-workflow-page.data";

const AgenticWorkflowPage = () => {
  return (
    <>
      <AgenticWorkflowHeroSection />
      <AgenticWorkflowInfrastructureSection />
      <AgenticWorkflowApplicationSection />
      <AgenticWorkflowDeploymentSection />
      <FaqSection items={AGENTIC_WORKFLOW_FAQ_ITEMS} />
      <FooterComponent
        {...AGENTIC_WORKFLOW_FOOTER}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default AgenticWorkflowPage;
