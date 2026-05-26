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
    <article className="relative flex items-center gap-4 overflow-hidden rounded-md border border-gray-10 px-6 py-12">
      <div className="h-20 w-20 shrink-0 bg-gray-50" aria-hidden />
      <div className="pr-8">
        <Text as="h3" weight="semibold">
          {item.title}
        </Text>
        <Text as="h6" textColor="black-5">
          {item.description}
        </Text>
      </div>
      <div className="absolute bottom-[-10%] right-0 opacity-80" aria-hidden>
        <Image src="/icons/green-logo.svg" alt="" width={100} height={100} />
      </div>
    </article>
  );
}
