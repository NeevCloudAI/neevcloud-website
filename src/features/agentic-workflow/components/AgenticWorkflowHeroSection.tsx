import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { AGENTIC_WORKFLOW_HERO } from "../data/agentic-workflow-page.data";

const AgenticWorkflowHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            className="max-w-4xl mt-4 md:mt-6"
            textColor={"white"}
          >
            The Infrastructure Behind
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-4xl"
            textColor={"primary"}
          >
            Autonomous AI Agents
          </Text>
        </>
      }
      {...AGENTIC_WORKFLOW_HERO}
    />
  );
};

export default AgenticWorkflowHeroSection;
