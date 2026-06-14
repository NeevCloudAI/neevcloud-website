import { Text } from "@/shared/ui-lib";
import { CloudStorageFeature } from "../../types/cloud-storage-section.types";

type CloudStorageFeatureItemProps = {
  feature: CloudStorageFeature;
};

const CloudStorageFeatureItem = ({ feature }: CloudStorageFeatureItemProps) => (
  <li className="flex gap-2.5 rounded-md bg-cloud-gray px-3.75 py-2.5">
    <Text as="h6" textColor="primary" className="shrink-0" aria-hidden="true">
      •
    </Text>
    <Text as="h6" textColor="gray-05" weight="regular">
      {feature.text}
    </Text>
  </li>
);

export default CloudStorageFeatureItem;
