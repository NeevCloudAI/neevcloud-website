import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import GpuWhyChooseNeevcloudCard from "@/shared/components/gpu-why-choose-neevcloud-card";
import type { GpuWhyChooseNeevcloudSectionProps } from "@/shared/types/gpu-why-choose-neevcloud-section.types";
import { Button, Text } from "@/shared/ui-lib";

const GpuWhyChooseNeevcloudSection = ({
  whyChoose,
  roi,
  buttonText,
  className,
}: GpuWhyChooseNeevcloudSectionProps) => {
  const roiPrimaryCards = roi.cards.slice(0, 3);
  const roiSecondaryCards = roi.cards.slice(3);

  return (
    <section
      className={cn("relative bg-black py-8 md:py-16 2xl:py-25", className)}
      aria-labelledby="gpu-why-choose-neevcloud-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[80%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="gpu-why-choose-neevcloud-heading"
          textColor="white"
          align="center"
        >
          {whyChoose.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {whyChoose.titleHighlight}
          </Text>
        </Text>

        <ul className="m-0 mt-4 grid w-full list-none grid-cols-1 gap-5 p-0 md:mt-12.5 md:grid-cols-3">
          {whyChoose.cards.map((card) => (
            <li key={card.id}>
              <GpuWhyChooseNeevcloudCard
                title={card.title}
                icon={card.icon}
                description={card.description}
              />
            </li>
          ))}
        </ul>

        <Text
          as="h2"
          textColor="white"
          align="center"
          className="mt-8 md:mt-25"
        >
          <Text as="span" variant="h2" textColor="primary">
            {roi.titleHighlight}
          </Text>
          {roi.titleSuffix}
        </Text>

        {roi.description ? (
          <Text
            as="h6"
            textColor="gray-10"
            align="center"
            className="mt-2.5 max-w-3xl"
          >
            {roi.description}
          </Text>
        ) : null}

        <ul className="m-0 mt-4 grid w-full list-none grid-cols-1 gap-5 p-0 md:mt-12.5 md:grid-cols-3">
          {roiPrimaryCards.map((card) => (
            <li key={card.id}>
              <GpuWhyChooseNeevcloudCard
                title={card.title}
                icon={card.icon}
                description={card.description}
              />
            </li>
          ))}
        </ul>

        {roiSecondaryCards.length > 0 ? (
          <ul className="m-0 mt-5 grid w-full max-w-4xl list-none grid-cols-1 gap-5 p-0 md:grid-cols-2">
            {roiSecondaryCards.map((card) => (
              <li key={card.id}>
                <GpuWhyChooseNeevcloudCard
                  title={card.title}
                  icon={card.icon}
                  description={card.description}
                />
              </li>
            ))}
          </ul>
        ) : null}

        <Button spacing="lg" className="mt-8 md:mt-12.5">
          {buttonText}
        </Button>
      </Container>
    </section>
  );
};

export default GpuWhyChooseNeevcloudSection;
