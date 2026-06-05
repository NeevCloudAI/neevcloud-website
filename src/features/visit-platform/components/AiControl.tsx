import StatsGridSection from "@/shared/components/StatsGridSection";
import { COMPLETE_AI_CARDS } from "../data/complete-ai-section.data";
import GettingStartedSection from "./GettingStartedSection";

const CompleteAISection = () => {
  return (
    <>
      <StatsGridSection
        sectionId="complete-ai-heading"
        heading="Complete "
        headingHighlight="AI infrastructure control"
        highlightPosition="after"
        cards={COMPLETE_AI_CARDS}
      />
      <GettingStartedSection />
    </>
  );
};

export default CompleteAISection;
