import { Text } from "@/shared/ui-lib";
import type { StoragePerformanceFeature } from "@/features/nvme/types/storage-performance-section.types";

type StoragePerformanceFeatureItemProps = {
  feature: StoragePerformanceFeature;
};

const StoragePerformanceFeatureItem = ({
  feature,
}: StoragePerformanceFeatureItemProps) => (
  <li className="flex gap-2.5 rounded-md bg-gray-10 px-3.75 py-2.5">
    <Text as="h6" textColor="primary" className="shrink-0" aria-hidden="true">
      •
    </Text>
    <Text as="h6" textColor="gray-90" weight="regular">
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

export default StoragePerformanceFeatureItem;
