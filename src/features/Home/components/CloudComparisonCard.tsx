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
    <article className="relative flex flex-col overflow-hidden border border-cloud-gray p-4 md:p-10">
      {/* Top row: icon left, decorative square right */}
      <div className="flex items-center justify-between pb-4 md:pb-10">
        {/* let's make it responsive image and make it smaller on mobile */}
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
        <Text textColor="black/82">{item.description}</Text>
      </div>
    </article>
  );
}
