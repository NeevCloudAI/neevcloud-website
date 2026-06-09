import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { AGENTIC_WORKFLOW_HERO } from "../data/agentic-workflow-page.data";

const AgenticWorkflowHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-4xl mt-4 md:mt-6">
          The Infrastructure Behind
          <Text as="span" variant="h1" textColor="primary">
            Autonomous AI Agents
          </Text>
        </Text>
      }
      {...AGENTIC_WORKFLOW_HERO}
    />
  );
};

export default AgenticWorkflowHeroSection;
