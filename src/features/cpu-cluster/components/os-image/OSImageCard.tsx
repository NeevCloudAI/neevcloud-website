"use client";

import { cn } from "@/lib/utils";
import { Divider, Text } from "@/shared/ui-lib";
import Image from "next/image";
import { memo } from "react";
import type {
  OsCardChip,
  OsImageCard,
} from "../../types/os-image-section.types";

type OSImageCardProps = Pick<
  OsImageCard,
  "title" | "description" | "image" | "cards"
> & {
  isSelected: boolean;
  onSelect: (title: string) => void;
};

const OSImageCard = memo(function OSImageCard({
  title,
  description,
  image,
  cards,
  isSelected,
  onSelect,
}: OSImageCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl p-8 flex flex-col overflow-hidden text-left cursor-pointer",
        isSelected ? "bg-primary text-white" : "bg-gray-10",
      )}
      onClick={() => onSelect(title)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(title);
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`Select ${title}`}
    >
      <div className="flex items-center gap-5">
        <div
          className={`w-14 h-14 p-2 ${image ? "bg-white" : "bg-gray-60"} rounded-md flex items-center justify-center`}
        >
          {image ? (
            <Image src={image} alt={title} width={35} height={35} />
          ) : (
            <Text as="h4" textColor="gray-75">
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

      <Divider
        orientation="horizontal"
        className="my-2.5 bg-gray-60 rounded-md"
      />

      <div className="flex items-center gap-2">
        {cards.map((card: OsCardChip) => (
          <Text
            as="small"
            key={card.name}
            className={cn(
              card.isActive && isSelected
                ? "bg-white text-primary px-2.5 py-1 rounded-full"
                : card.isActive
                  ? "bg-primary text-white px-2.5 py-1 rounded-full"
                  : isSelected
                    ? "bg-white/20 text-white px-2.5 py-1 rounded-full"
                    : "bg-gray-60 px-2.5 py-1 rounded-full",
            )}
          >
            {card.name}
          </Text>
        ))}
      </div>

      <div className="absolute bottom-0 right-0 opacity-80 pointer-events-none">
        <Image
          src="/icons/green-logo.svg"
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
