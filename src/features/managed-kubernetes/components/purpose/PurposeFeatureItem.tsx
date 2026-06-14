import { Divider, Text } from "@/shared/ui-lib";
import type { PurposeFeatureItem as PurposeFeatureItemType } from "../../types/purpose-section.types";

type PurposeFeatureItemProps = {
  feature: PurposeFeatureItemType;
  showDivider: boolean;
};

const PurposeFeatureItem = ({
  feature,
  showDivider,
}: PurposeFeatureItemProps) => {
  return (
    <div className="relative flex flex-col gap-1.25 px-4 py-5 md:px-5 md:py-6">
      {showDivider ? (
        <Divider
          orientation="vertical"
          className="absolute left-0 top-0 hidden h-full bg-gray-01 md:block"
        />
      ) : null}
      {showDivider ? (
        <Divider
          orientation="horizontal"
          className="absolute top-0 left-4 right-4 bg-gray-01 md:hidden"
        />
      ) : null}
      <Text as="small" textColor="primary">
        {feature.number}
      </Text>
      <Text as="h4" weight="semibold">
        {feature.title}
      </Text>
      <Text as="h6" textColor="gray-03">
        {feature.description}
      </Text>
    </div>
  );
};

export default PurposeFeatureItem;
