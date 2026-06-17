"use client";

import GpuFlipChart from "@/shared/components/gpu-flip-chart";
import { cn } from "@/lib/utils";
import {
  GPU_OTHER_GPUS_ICON,
  GPU_OTHER_GPUS_KNOW_MORE_LABEL,
} from "@/shared/constants/gpu-other-gpus-section.constants";
import type { GpuOtherGpusCardProps } from "@/shared/types/gpu-other-gpus-section.types";
import { buildGpuFlipChartDetails } from "@/shared/utils/gpu-flip-details";
import { Button, Text } from "@/shared/ui-lib";
import Image from "next/image";
import { useState } from "react";

const cardSurfaceClassName =
  "flex h-full w-full flex-col rounded-md border border-white/12 bg-white/6 p-4 backdrop-blur-md md:p-7.5 backface-hidden";

const GpuOtherGpusCard = ({
  title,
  description,
  flipDetails,
  flipChartConfig,
  iconSrc = GPU_OTHER_GPUS_ICON,
  className,
}: GpuOtherGpusCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const chartDetails = buildGpuFlipChartDetails(flipDetails, flipChartConfig);

  return (
    <div className="h-full w-full min-h-[250px]">
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-500 transform-3d",
          isFlipped && "transform-[rotateY(180deg)]",
          className,
        )}
      >
        <article className={cardSurfaceClassName} aria-hidden={isFlipped}>
          <div className="flex items-center gap-3.75">
            <Image
              src={iconSrc}
              alt="GPU Icon"
              width={40}
              height={26}
              aria-hidden="true"
            />
            <Text as="h4" weight="semibold" textColor="white">
              {title}
            </Text>
          </div>

          <Text
            as="h6"
            textColor="gray-01"
            className="mt-4 md:mt-6.5 flex-1"
            weight="regular"
          >
            {description}
          </Text>

          <Button
            className="mt-5 md:mt-7.5 underline"
            variant="ghost"
            textColor="primary"
            spacing="none"
            onClick={() => setIsFlipped(true)}
          >
            {GPU_OTHER_GPUS_KNOW_MORE_LABEL}
          </Button>
        </article>

        <article
          className={cn(
            cardSurfaceClassName,
            "absolute inset-0 transform-[rotateY(180deg)] bg-white items-center justify-center",
          )}
          aria-hidden={!isFlipped}
        >
          <Text as="small" align="center">
            Overall Ai performancr considering LLM training, LLM inference
            throughput, memory capacity & bandwidth, and secondary graphics
            capability
          </Text>
          <GpuFlipChart flipDetails={chartDetails} />
        </article>
      </div>
    </div>
  );
};

export default GpuOtherGpusCard;
