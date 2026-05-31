import { Text } from "@/shared/ui-lib";
import { GenerativeAiPerformanceCardProps } from "../../types/performance-section.types";

const GenerativeAiPerformanceCard = ({
  card,
}: GenerativeAiPerformanceCardProps) => {
  return (
    <article className="rounded-md border border-white-10 bg-white-5 p-4 backdrop-blur-md md:p-7.5">
      <Text as="h3" textColor="white" weight="semibold">
        {card.title}
      </Text>
      <Text as="h6" textColor="primary" className="mt-1.25">
        {card.subtitle}
      </Text>
      <ul className="mt-4 md:mt-7.5 list-none p-0 m-0">
        {card.metrics.map((metric) => (
          <li
            key={metric.id}
            className="flex items-center justify-between gap-4 border-b border-white-10 py-2.5 last:border-b-0"
          >
            <Text as="h6" textColor="gray-75">
              {metric.label}
            </Text>
            <Text
              as="h6"
              textColor="primary"
              fontFamily="spaceMono"
              align="right"
              className="shrink-0"
            >
              {metric.value}
            </Text>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default GenerativeAiPerformanceCard;
