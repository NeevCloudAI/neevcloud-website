import { ArrowRight } from "@/shared/icons/lucide-icon-map";
import { Text } from "@/shared/ui-lib";
import type { ModelsSectionStepTwoCard } from "../../types/models-section.types";

type ModelsSectionStepTwoCardProps = {
  card: ModelsSectionStepTwoCard;
};

const ModelsSectionStepTwoCard = ({ card }: ModelsSectionStepTwoCardProps) => {
  return (
    <div className="bg-gray-10 p-4 md:px-5 rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Text as="h6" fontFamily="spaceMono" textColor="gray-90">
          {card.id}
        </Text>
        <Text
          as="h6"
          fontFamily="spaceMono"
          textColor="gray-90"
          className="line-through"
        >
          {card.label}
        </Text>
      </div>
      <ArrowRight size={16} className="text-gray-90" aria-hidden="true" />
      <Text as="h5" fontFamily="spaceMono" textColor="primary">
        {card.value}
      </Text>
    </div>
  );
};

export default ModelsSectionStepTwoCard;
