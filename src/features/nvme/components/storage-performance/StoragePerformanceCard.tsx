import StoragePerformanceFeatureItem from "./StoragePerformanceFeatureItem";
import { StoragePerformanceCardData } from "../../types/storage-performance-section.types";
import { Text } from "@/shared/ui-lib";

type StoragePerformanceCardProps = {
  card: StoragePerformanceCardData;
};

const StoragePerformanceCard = ({ card }: StoragePerformanceCardProps) => {
  const Icon = card.icon;

  return (
    <article className="flex w-full flex-col gap-5 rounded-md bg-white p-4 md:p-10">
      <div className="flex gap-5 items-center">
        {Icon ? (
          <div
            className="flex h-12.5 w-12.5 items-center justify-center rounded-md bg-cloud-gray"
            aria-hidden="true"
          >
            <Icon size={30} className="text-primary" />
          </div>
        ) : (
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-gray-02"
            aria-hidden="true"
          />
        )}
        <div className="flex flex-col">
          <Text as="h3" weight="semibold">
            {card.title}
          </Text>
          <Text textColor="gray-04">{card.subtitle}</Text>
        </div>
      </div>
      <Text as="h6" textColor="gray-04" className="mt-0.5">
        {card.description}
      </Text>
      <ul className="mt-2 flex list-none flex-col gap-1.25 md:mt-4">
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
