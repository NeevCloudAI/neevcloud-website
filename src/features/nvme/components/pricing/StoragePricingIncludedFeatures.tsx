import { Text } from "@/shared/ui-lib";
import { INCLUDED_FEATURES } from "../../constants/storage-pricing-calculator.constants";

const StoragePricingIncludedFeatures = () => {
  return (
    <div className="mt-4 md:mt-7.5">
      <Text as="h5" weight="semibold">
        What&apos;s Included
      </Text>
      <ul className="flex flex-wrap gap-2.5 mt-5 list-none p-0 m-0">
        {INCLUDED_FEATURES.map((feature) => (
          <li key={feature}>
            <Text className="rounded-full bg-primary px-2.5 py-0.75 text-white">
              {feature}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoragePricingIncludedFeatures;
