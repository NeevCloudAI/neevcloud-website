import { Text } from "@/shared/ui-lib";
import { StorageMetricsCardType } from "../data/storage-comparison-data";
import StorageComparisonBar from "@/shared/components/StorageComparisonBar";

const StorageMetricsCard = ({ card }: { card: StorageMetricsCardType }) => {
  return (
    <div className="p-4 md:p-6.25 bg-black rounded-md">
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
      <div className="mt-5 flex flex-col gap-2.25">
        {card.metrics.map((metric) => (
          <StorageComparisonBar key={metric.id} metric={metric} />
        ))}
      </div>
    </div>
  );
};

export default StorageMetricsCard;
