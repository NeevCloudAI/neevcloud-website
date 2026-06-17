import Image from "next/image";
import { Calendar, Star } from "@/shared/icons/lucide-icon-map";
import { LinkComponent, Text } from "@/shared/ui-lib";
import type { PressCoverageCardItem } from "../../types/press-coverage-section.types";

type PressCoverageCardProps = {
  item: PressCoverageCardItem;
};

const PressCoverageCard = ({ item }: PressCoverageCardProps) => {
  return (
    <article className="flex gap-4 md:gap-5">
      <Image
        src={item.image}
        alt=""
        width={108}
        height={108}
        className="object-cover"
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-4 md:gap-5">
          <div className="flex items-center gap-1.75">
            <Calendar className="size-4 shrink-0" aria-hidden="true" />
            <Text as="h6">{item.date}</Text>
          </div>
          <div className="flex items-center gap-1.75">
            <Star className="size-4 shrink-0" aria-hidden="true" />
            <Text as="h6">{item.source}</Text>
          </div>
        </div>

        <LinkComponent
          href={item.readMoreHref}
          target="_blank"
          variant="ghost"
          spacing="none"
          size="none"
          className="text-left"
        >
          <Text
            as="h5"
            weight="semibold"
            className="mt-2.5"
            textColor="primary"
          >
            {item.title}
          </Text>
        </LinkComponent>

        <Text textColor="gray-05" className="mt-2">
          {item.description}
        </Text>
      </div>
    </article>
  );
};

export default PressCoverageCard;
