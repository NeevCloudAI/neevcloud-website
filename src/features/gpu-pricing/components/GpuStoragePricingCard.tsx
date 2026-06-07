import { Text } from "@/shared/ui-lib";
import type { GpuStoragePricingCardProps } from "../types/storage-pricing-section.types";

const GpuStoragePricingCard = ({ item }: GpuStoragePricingCardProps) => {
  return (
    <article className="flex h-full flex-col rounded-md border border-black-30 bg-black-80 p-4 md:px-8.75 md:py-6.5">
      <Text as="h6" fontFamily="spaceMono" textColor="white">
        {item.title}
      </Text>

      <div className="mt-3 flex items-baseline">
        <Text as="h2" textColor="primary" weight="semibold">
          {item.price}
        </Text>
        {item.priceUnit ? (
          <Text as="h6" fontFamily="spaceMono" textColor="white">
            {item.priceUnit}
          </Text>
        ) : null}
      </div>

      <Text
        as="h6"
        fontFamily="spaceMono"
        textColor="gray-80"
        className="mt-auto pt-3"
      >
        {item.footnote}
      </Text>
    </article>
  );
};

export default GpuStoragePricingCard;
