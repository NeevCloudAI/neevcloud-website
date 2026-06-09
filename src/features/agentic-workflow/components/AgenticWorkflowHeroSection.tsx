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
      description={AGENTIC_WORKFLOW_HERO.description}
      primaryCta={AGENTIC_WORKFLOW_HERO.primaryCta}
      secondaryCta={AGENTIC_WORKFLOW_HERO.secondaryCta}
      badgeText={AGENTIC_WORKFLOW_HERO.badgeText}
      image={AGENTIC_WORKFLOW_HERO.image}
      trustBadges={[...AGENTIC_WORKFLOW_HERO.trustBadges]}
    />
  );
};

export default AgenticWorkflowHeroSection;
