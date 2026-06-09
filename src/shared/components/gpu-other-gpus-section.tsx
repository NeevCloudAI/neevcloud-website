import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import GpuOtherGpusCard from "@/shared/components/gpu-other-gpus-card";
import {
  GPU_OTHER_GPUS_FLIP_CHART_CONFIG_BY_PAGE,
  GPU_OTHER_GPUS_SECTION_TITLE,
} from "@/shared/constants/gpu-other-gpus-section.constants";
import { getGpuOtherGpusCatalog } from "@/shared/data/gpu-other-gpus-section.data";
import type { GpuOtherGpusSectionProps } from "@/shared/types/gpu-other-gpus-section.types";
import { Text } from "@/shared/ui-lib";

const GpuOtherGpusSection = ({
  excludeId,
  title = GPU_OTHER_GPUS_SECTION_TITLE,
  className,
}: GpuOtherGpusSectionProps) => {
  const cards = getGpuOtherGpusCatalog(excludeId).filter(
    (card) => card.id !== excludeId,
  );
  const flipChartConfig =
    GPU_OTHER_GPUS_FLIP_CHART_CONFIG_BY_PAGE[
      excludeId as keyof typeof GPU_OTHER_GPUS_FLIP_CHART_CONFIG_BY_PAGE
    ];

  if (cards.length === 0) {
    return null;
  }

  return (
    <section
      className={cn("bg-black py-8 md:py-25", className)}
      aria-labelledby="gpu-other-gpus-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="gpu-other-gpus-section-heading"
          textColor="white"
          align="center"
        >
          {title}
        </Text>

        <ul className="m-0 mt-4 grid w-full list-none grid-cols-1 gap-5 p-0 md:mt-12.5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <li key={card.id}>
              <GpuOtherGpusCard
                title={card.title}
                description={card.description}
                flipDetails={card.flipDetails}
                flipChartConfig={flipChartConfig}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default GpuOtherGpusSection;
