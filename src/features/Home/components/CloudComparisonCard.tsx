import Image from "next/image";
import { Text } from "@/shared/ui-lib";
import type { CloudComparisonCardItem } from "../types/cloud-comparison-card.types";

type CloudComparisonCardProps = {
  item: CloudComparisonCardItem;
};

export default function CloudComparisonCard({
  item,
}: CloudComparisonCardProps) {
  return (
    <article className="relative flex flex-col overflow-hidden border border-gray-10 px-10 pt-15">
      {/* Top row: icon left, decorative square right */}
      <div className="flex items-center justify-between pb-10">
        <Image src={item.iconSrc} alt={item.title} width={80} height={80} />
        <div className="opacity-100" aria-hidden>
          <Image
            src="/icons/logo-white-bg.svg"
            alt=""
            width={117}
            height={117}
          />
        </div>
      </div>

      {/* Text content */}
      <div className="mb-5">
        <Text as="h3" weight="semibold" className="mb-2.5">
          {item.title}
        </Text>
        <Text className="text-gray-description">{item.description}</Text>
      </div>
    </article>
  );
}
