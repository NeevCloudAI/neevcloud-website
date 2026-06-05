import { cn } from "@/lib/utils";
import { Button, Text } from "@/shared/ui-lib";
import Image from "next/image";
import type { GpuServiceSummaryCardProps } from "../types/deployment-comparison-section.types";

const GpuServiceSummaryCard = ({ service }: GpuServiceSummaryCardProps) => {
  const isContainer = service.variant === "container";

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-md border p-4 md:p-5",
        isContainer
          ? "border-primary-70 bg-primary-140"
          : "border-white-10 bg-black-80"
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-md",
            isContainer ? "bg-primary-40" : "bg-black-25"
          )}
        >
          <Image
            src={service.iconSrc}
            alt={service.iconAlt}
            width={20}
            height={20}
          />
        </div>
        <div className="min-w-0">
          <Text as="h3" textColor="primary" weight="semibold">
            {service.title}
          </Text>
          <Text as="small" fontFamily="spaceMono" textColor="gray-75">
            {service.deploymentType}
          </Text>
        </div>
      </div>

      <Text
        as="h6"
        fontFamily="spaceMono"
        textColor="gray-75"
        className="mt-4 italic"
      >
        &ldquo;{service.tagline}&rdquo;
      </Text>

      <ul className="m-0 mt-4 flex list-none flex-col gap-2 p-0">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <Text as="h6" textColor="primary" className="shrink-0">
              •
            </Text>
            <Text as="h6" textColor="gray-75" fontFamily="spaceMono">
              {bullet}
            </Text>
          </li>
        ))}
      </ul>

      <Button
        variant="ghost"
        size="full"
        backgroundColor={isContainer ? "primary" : "ghost"}
        textColor={isContainer ? "default" : "primary"}
        weight="semibold"
        spacing="md"
        className={cn(
          "mt-5 border font-space-mono",
          isContainer ? "border-primary" : "border-primary-70"
        )}
      >
        {service.ctaLabel}
      </Button>
    </article>
  );
};

export default GpuServiceSummaryCard;
