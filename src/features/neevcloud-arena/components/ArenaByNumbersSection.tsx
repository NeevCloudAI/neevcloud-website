import StatsByNumbersSection from "@/shared/components/stats-by-numbers-section";
import {
  ARENA_BY_NUMBERS_ITEMS,
  ARENA_BY_NUMBERS_SECTION,
} from "../data/arena-by-numbers-section.data";

const ArenaByNumbersSection = () => {
  return (
    <StatsByNumbersSection
      sectionId="arena-by-numbers"
      titlePrefix={ARENA_BY_NUMBERS_SECTION.titlePrefix}
      titleHighlight={ARENA_BY_NUMBERS_SECTION.titleHighlight}
      items={ARENA_BY_NUMBERS_ITEMS}
    />
  );
};

export default ArenaByNumbersSection;
