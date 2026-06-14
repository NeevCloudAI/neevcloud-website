import Image from "next/image";
import CloudStorageFeatureItem from "./CloudStorageFeatureItem";
import { CloudStorageCardData } from "../../types/cloud-storage-section.types";
import { Text } from "@/shared/ui-lib";

type CloudStorageCardProps = {
  card: CloudStorageCardData;
};

const CloudStorageCard = ({ card }: CloudStorageCardProps) => {
  return (
    <article className="flex w-full flex-col gap-5 rounded-md bg-white p-4 md:p-10">
      <div className="flex gap-5 items-center">
        <Image src={card.iconSrc} alt={card.title} width={50} height={50} />
        <Text as="h3" weight="semibold">
          {card.title}
        </Text>
      </div>
      <Text as="h6" textColor="gray-04" className="mt-0.5">
        {card.description}
      </Text>
      <ul className="mt-2 flex list-none flex-col gap-1.25 md:mt-4">
        {card.features.map((feature) => (
          <CloudStorageFeatureItem
            key={`${card.id}-${feature.text}`}
            feature={feature}
          />
        ))}
      </ul>
    </article>
  );
};

export default CloudStorageCard;
