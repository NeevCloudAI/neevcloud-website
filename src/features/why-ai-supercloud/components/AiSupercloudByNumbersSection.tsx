import StatsByNumbersSection from "@/shared/components/stats-by-numbers-section";
import {
  AI_SUPERCLOUD_BY_NUMBERS_ITEMS,
  AI_SUPERCLOUD_BY_NUMBERS_SECTION,
} from "../data/ai-supercloud-by-numbers-section.data";

const AiSupercloudByNumbersSection = () => {
  return (
    <StatsByNumbersSection
      sectionId="ai-supercloud-by-numbers"
      titlePrefix={AI_SUPERCLOUD_BY_NUMBERS_SECTION.titlePrefix}
      titleHighlight={AI_SUPERCLOUD_BY_NUMBERS_SECTION.titleHighlight}
      items={AI_SUPERCLOUD_BY_NUMBERS_ITEMS}
    />
  );
};

export default AiSupercloudByNumbersSection;
