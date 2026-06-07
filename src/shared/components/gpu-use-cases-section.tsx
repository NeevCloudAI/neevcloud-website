import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import GpuUseCasesCard from "@/shared/components/gpu-use-cases-card";
import type { GpuUseCasesSectionProps } from "@/shared/types/gpu-use-cases-section.types";
import { Text } from "@/shared/ui-lib";

const GpuUseCasesSection = ({
  titlePrefix,
  titleHighlight,
  titleSuffix = "",
  cards,
  className,
}: GpuUseCasesSectionProps) => {
  return (
    <section
      className={cn("relative bg-white py-8 md:py-16 2xl:py-25", className)}
      aria-labelledby="gpu-use-cases-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="gpu-use-cases-section-heading"
          align="center"
          className="max-w-5xl"
        >
          {titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {titleHighlight}
          </Text>
          {titleSuffix}
        </Text>

        <ul className="m-0 mt-4 grid w-full list-none grid-cols-1 gap-5 p-0 md:mt-12.5 md:grid-cols-2">
          {cards.map((card) => (
            <li key={card.id}>
              <GpuUseCasesCard
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default GpuUseCasesSection;
