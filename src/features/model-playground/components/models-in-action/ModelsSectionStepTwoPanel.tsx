import { Text } from "@/shared/ui-lib";
import ModelsSectionPanelLogo from "./ModelsSectionPanelLogo";
import ModelsSectionLiveBadge from "./ModelsSectionLiveBadge";
import { STEP_TWO_CARD_DATA } from "../../data/models-section.data";
import ModelsSectionStepTwoCard from "./ModelsSectionStepTwoCard";

const ModelsSectionStepTwoPanel = () => {
  return (
    <div className="relative bg-white rounded-xl w-full shadow-sm p-4 md:p-6.25 h-140">
      <ModelsSectionPanelLogo />
      <div className="flex items-center justify-between">
        <Text as="h5" weight="semibold">
          ZERO FRICTION ACCESS
        </Text>
        <ModelsSectionLiveBadge />
      </div>

      <div className="flex flex-col gap-2.5 mt-7.5">
        {STEP_TWO_CARD_DATA.map((card) => (
          <ModelsSectionStepTwoCard key={card.id} card={card} />
        ))}
      </div>

      <div className="border border-black/24 bg-black/10 backdrop-blur-md rounded-xl p-4 md:px-5 md:py-3.75 mt-5 flex items-center justify-between flex-col">
        <Text fontFamily="spaceMono" textColor="primary" as="h3">
          ≤ 60s
        </Text>
        <Text fontFamily="spaceMono" textColor="gray-05">
          from landing page to first instance
        </Text>
      </div>
    </div>
  );
};

export default ModelsSectionStepTwoPanel;
