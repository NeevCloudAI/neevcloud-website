import { SquareCheck } from "@/shared/icons/lucide-icon-map";
import type { IntelligenceCard as IntelligenceCardData } from "../types/intelligence-section.types";
import { Text } from "@/shared/ui-lib";

type IntelligenceCardProps = {
  card: IntelligenceCardData;
};

const IntelligenceCard = ({ card }: IntelligenceCardProps) => {
  return (
    <article className="w-full rounded-lg bg-white p-4 md:p-4 flex flex-col justify-between md:px-10 md:py-7.5">
      <div>
        <Text as="h6" textColor="gray-02">
          {card.badgeLabel}
        </Text>
        <Text as="h3" weight="semibold" className="mt-2 md:mt-7.5 md:text-30px">
          {card.title}
        </Text>
        <Text as="h6" className="mt-2.5">
          {card.description}
        </Text>
      </div>
      <ul className="mt-4 flex list-none flex-col gap-2.5 p-0 m-0 md:mt-6">
        {card.highlights.map((highlight, index) => (
          <li
            key={`${card.id}-highlight-${index}`}
            className="flex gap-4 rounded-lg bg-cloud-gray px-3.75 py-2.5"
          >
            <SquareCheck
              size={24}
              className="shrink-0 text-primary"
              aria-hidden="true"
            />
            <Text as="h6">{highlight}</Text>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default IntelligenceCard;
