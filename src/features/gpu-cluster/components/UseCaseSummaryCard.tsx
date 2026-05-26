import { Text } from "@/shared/ui-lib";
import type { UseCaseSummaryBlock } from "../types/use-cases-section.types";

type UseCaseSummaryCardProps = {
  block: UseCaseSummaryBlock;
};

const UseCaseSummaryCard = ({ block }: UseCaseSummaryCardProps) => {
  return (
    <div className="bg-white p-7.5 rounded-lg">
      <Text as="small" textColor="gray-65">
        {block.label}
      </Text>
      <Text as="h4" weight="semibold">
        {block.title}
      </Text>
      {block.subtitle ? (
        <Text as="h6" weight="semibold" textColor="gray-90">
          {block.subtitle}
        </Text>
      ) : null}
    </div>
  );
};

export default UseCaseSummaryCard;
