import { Text } from "@/shared/ui-lib";
import type {
  StoragePerformanceCardData,
  StoragePerformanceFeature,
} from "@/features/nvme/data/storage-performance-data";

export type StoragePerformanceCardProps = {
  card: StoragePerformanceCardData;
};

const StoragePerformanceFeatureItem = ({
  feature,
}: {
  feature: StoragePerformanceFeature;
}) => (
  <li className="flex gap-2 rounded-md bg-gray-10 px-4 py-2">
    <Text as="h6" textColor="primary" className="shrink-0">
      •
    </Text>
    <Text as="h6" textColor="gray-90">
      {feature.text}
      {feature.highlight ? (
        <>
          {" "}
          <Text as="span" textColor="primary">
            {feature.highlight}
          </Text>
        </>
      ) : null}
    </Text>
  </li>
);

const StoragePerformanceCard = ({ card }: StoragePerformanceCardProps) => {
  return (
    <article className="flex w-full flex-col gap-2 rounded-md bg-white p-4 md:p-8">
      <div className="flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-blue-40"></div>
        <div className="flex flex-col">
          <Text as="h3" weight="semibold">
            {card.title}
          </Text>
          <Text textColor="gray-75">{card.subtitle}</Text>
        </div>
      </div>
      <Text as="h6" textColor="gray-75" className="mt-2">
        {card.description}
      </Text>
      <ul className="mt-2 flex list-none flex-col gap-1.5 md:mt-4">
        {card.features.map((feature) => (
          <StoragePerformanceFeatureItem
            key={`${card.id}-${feature.text}`}
            feature={feature}
          />
        ))}
      </ul>
    </article>
  );
};

export default StoragePerformanceCard;
