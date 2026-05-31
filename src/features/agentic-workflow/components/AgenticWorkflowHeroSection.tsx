import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { AGENTIC_WORKFLOW_HERO } from "../data/agentic-workflow-page.data";

const AgenticWorkflowHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-5xl mt-4 md:mt-6">
          The Infrastructure Behind
          <Text as="span" variant="h1" textColor="primary">
            Autonomous AI Agents
          </Text>
        </Text>
      }
      description={AGENTIC_WORKFLOW_HERO.description}
      button1Text={AGENTIC_WORKFLOW_HERO.button1Text}
      button2Text={AGENTIC_WORKFLOW_HERO.button2Text}
      badgeText={AGENTIC_WORKFLOW_HERO.badgeText}
      image={AGENTIC_WORKFLOW_HERO.image}
      trustBadges={[...AGENTIC_WORKFLOW_HERO.trustBadges]}
    />
  );
};

export default AgenticWorkflowHeroSection;
