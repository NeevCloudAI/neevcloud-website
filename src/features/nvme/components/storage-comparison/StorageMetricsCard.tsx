import StorageComparisonBar from "@/shared/components/StorageComparisonBar";
import { Text } from "@/shared/ui-lib";
import { StorageMetricsCardData } from "../../types/storage-comparison-section.types";

type StorageMetricsCardProps = {
  card: StorageMetricsCardData;
};

const StorageMetricsCard = ({ card }: StorageMetricsCardProps) => {
  return (
    <article className="p-4 md:p-6.25 bg-black rounded-md">
      <div className="flex items-center justify-between gap-2">
        <Text as="h5" textColor="white" weight="semibold">
          {card.title}
        </Text>
        <Text
          as="small"
          textColor="white"
          className="w-fit bg-primary px-2.5 py-0.75 rounded-full"
        >
          {card.badge}
        </Text>
      </div>
      <ul className="mt-5 flex flex-col gap-2.5 list-none p-0 m-0">
        {card.metrics.map((metric) => (
          <li key={metric.id}>
            <StorageComparisonBar metric={metric} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default StorageMetricsCard;
