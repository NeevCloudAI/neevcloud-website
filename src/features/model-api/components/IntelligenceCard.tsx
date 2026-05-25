import { SquareCheck } from "lucide-react";
import { Text } from "@/shared/ui-lib";
import type { IntelligenceCard as IntelligenceCardData } from "../data/intelligence-section-data";

type IntelligenceCardProps = {
  card: IntelligenceCardData;
};

export default function IntelligenceCard({ card }: IntelligenceCardProps) {
  return (
    <div className="w-full rounded-lg bg-white p-4 md:p-4 flex flex-col justify-between md:px-10 md:py-7.5">
      <div>
        <Text as="h6" textColor="blue-40">
          {card.badgeLabel}
        </Text>
        <Text as="h3" weight="semibold" className="mt-2 md:mt-7.5">
          {card.title}
        </Text>
        <Text as="h6" className="mt-2.5">
          {card.description}
        </Text>
      </div>
      <ul className="mt-4 flex flex-col gap-2.5 md:mt-6">
        {card.highlights.map((highlight, index) => (
          <li
            key={`${card.id}-highlight-${index}`}
            className="flex gap-4 rounded-lg bg-gray-20 px-3.75 py-2.5"
          >
            <SquareCheck size={24} className="shrink-0 text-primary" />
            <Text as="h6">{highlight}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}
