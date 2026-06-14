import { Text } from "@/shared/ui-lib";
import Image from "next/image";
import { memo } from "react";
import type {
  OsCardChip,
  OsImageCard,
} from "../../types/os-image-section.types";

type OSImageCardProps = Pick<
  OsImageCard,
  "title" | "description" | "image" | "cards"
>;

const OSImageCard = memo(function OSImageCard({
  title,
  description,
  image,
  cards,
}: OSImageCardProps) {
  return (
    <div className="relative rounded-md p-4 md:p-6.25 flex flex-col overflow-hidden text-left bg-cloud-gray">
      <div className="flex items-center gap-5">
        <div
          className={`w-14 h-14 p-2 ${image ? "bg-white" : "bg-gray-01"} rounded-md flex items-center justify-center`}
        >
          {image ? (
            <Image src={image} alt={title} width={35} height={35} />
          ) : (
            <Text as="h4" textColor="gray-04">
              +
            </Text>
          )}
        </div>
        <div>
          <Text as="h3" weight="semibold">
            {title}
          </Text>
          <Text as="h6">{description}</Text>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {cards.map((card: OsCardChip) => (
          <Text
            as="small"
            key={card.name}
            className={
              card.isActive
                ? "bg-primary text-white px-2.5 py-1 rounded-full"
                : "bg-gray-01 px-2.5 py-1 rounded-full"
            }
          >
            {card.name}
          </Text>
        ))}
      </div>

      <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
        <Image
          src="/icons/logo.svg"
          alt=""
          aria-hidden="true"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
});

OSImageCard.displayName = "OSImageCard";

export default OSImageCard;
