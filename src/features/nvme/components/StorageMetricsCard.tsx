import { Text } from "@/shared/ui-lib";
import { StorageMetricsCardType } from "../data/storage-comparison-data";
import StorageComparisonBar from "@/shared/components/StorageComparisonBar";

const StorageMetricsCard = ({ card }: { card: StorageMetricsCardType }) => {
  return (
    <div className="p-4 md:p-6 bg-black rounded-md">
      <div className="flex items-center justify-between gap-2">
        <Text as="h5" textColor="white" weight="semibold">
          {card.title}
        </Text>
        <Text
          as="small"
          textColor="white"
          className="w-fit bg-primary px-3 py-1 rounded-full"
        >
          {card.badge}
        </Text>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {card.metrics.map((metric) => (
          <StorageComparisonBar key={metric.id} metric={metric} />
        ))}
      </div>
    </div>
  );
};

export default StorageMetricsCard;
