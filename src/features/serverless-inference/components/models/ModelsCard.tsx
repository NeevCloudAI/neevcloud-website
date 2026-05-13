"use client";

import { cn } from "@/lib/utils";
import { Button, Text } from "@/shared/ui-lib";
import Image from "next/image";
import { memo } from "react";
import type {
  ModelCardChip,
  ModelImageCard,
} from "@/features/serverless-inference/data/models-section-types";

type ModelCardProps = {
  title: string;
  description: string;
  image: string;
  cards: ModelCardChip[];
  context: string;
  pricePerMillion: string;
  params: string;
  isSelected: boolean;
  onSelect: (title: string) => void;
};

const CHIP_COLORS = ["chip-1", "chip-2", "chip-3", "chip-4"];

const ModelCard = memo(function ModelCard({
  title,
  description,
  image,
  cards,
  context,
  pricePerMillion,
  params,
  isSelected,
  onSelect,
}: ModelCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      onClick={() => onSelect(title)}
      onKeyDown={(e) => e.key === "Enter" && onSelect(title)}
      className={cn(
        "relative cursor-pointer rounded-xl p-4 bg-gray-10 transition-all flex flex-col gap-4 border",
        isSelected
          ? "border-primary ring-2 ring-primary/40"
          : "border-transparent hover:border-primary/50",
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 p-2 bg-white rounded-md flex items-center justify-center shrink-0">
          <Image src={image} alt={title} width={35} height={35} />
        </div>
        <div>
          <Text as="h3" weight="semibold">
            {title}
          </Text>
          <Text as="h6">{description}</Text>
        </div>
      </div>

      {/* Chips */}
      <div className="flex items-center gap-2 flex-wrap">
        {cards.map((card: ModelCardChip, index: number) => (
          <span
            key={card.name}
            className={`text-xs px-3 py-1 rounded-full ${CHIP_COLORS[index % CHIP_COLORS.length]}`}
          >
            {card.name}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3">
        <div className="flex flex-col items-center gap-1">
          <Text
            as="small"
            textColor="gray-60"
            className="uppercase tracking-wide"
          >
            Context
          </Text>
          <Text as="h6" weight="semibold">
            {context}
          </Text>
        </div>

        <div className="w-px h-8 bg-gray-50" />

        <div className="flex flex-col items-center gap-1">
          <Text
            as="small"
            textColor="gray-60"
            className="uppercase tracking-wide"
          >
            Price/1M
          </Text>
          <Text as="h6" weight="semibold" textColor="primary">
            {pricePerMillion}
          </Text>
        </div>

        <div className="w-px h-8 bg-gray-50" />

        <div className="flex flex-col items-center gap-1">
          <Text
            as="small"
            textColor="gray-60"
            className="uppercase tracking-wide"
          >
            Params
          </Text>
          <Text as="h6" weight="semibold">
            {params}
          </Text>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <Button
          backgroundColor="primary"
          weight="semibold"
          className="flex-1 flex items-center justify-center gap-2"
        >
          <Image src="/icons/logout.svg" alt={title} width={15} height={15} />
          Try in Playground
        </Button>
        <Button
          backgroundColor="transparent"
          weight="semibold"
          className="flex-1 border border-black"
          textColor="black"
        >
          Read Documentation
        </Button>
      </div>

      {/* Background watermark */}
      <div className="absolute bottom-0 right-0 opacity-90 pointer-events-none select-none">
        <Image
          src="/icons/logo-serverless.svg"
          alt=""
          aria-hidden="true"
          width={130}
          height={130}
          className="dark-filter"
        />
      </div>
    </div>
  );
});

ModelCard.displayName = "ModelCard";

export default ModelCard;
