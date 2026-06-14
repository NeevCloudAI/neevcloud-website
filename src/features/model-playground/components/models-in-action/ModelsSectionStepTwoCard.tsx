import { ArrowRight } from "@/shared/icons/lucide-icon-map";
import { Text } from "@/shared/ui-lib";
import type { ModelsSectionStepTwoCard } from "../../types/models-section.types";

type ModelsSectionStepTwoCardProps = {
  card: ModelsSectionStepTwoCard;
};

const ModelsSectionStepTwoCard = ({ card }: ModelsSectionStepTwoCardProps) => {
  return (
    <div className="bg-cloud-gray p-4 md:px-5 rounded-xl grid grid-cols-[1fr_auto_1fr] items-center gap-x-5">
      <div className="flex items-center gap-5 min-w-0">
        <Text as="h6" fontFamily="spaceMono" textColor="gray-05">
          {card.id}
        </Text>
        <Text
          as="h6"
          fontFamily="spaceMono"
          textColor="gray-05"
          className="line-through"
        >
          {card.label}
        </Text>
      </div>
      <span className="flex items-center justify-center shrink-0">
        <ArrowRight size={16} className="text-gray-05" aria-hidden="true" />
      </span>
      <Text as="h5" fontFamily="spaceMono" textColor="primary">
        {card.value}
      </Text>
    </div>
  );
};

export default ModelsSectionStepTwoCard;
