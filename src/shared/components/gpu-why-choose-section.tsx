import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import type { GpuWhyChooseSectionProps } from "@/shared/types/gpu-why-choose-section.types";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";
import LinkComponent from "../ui-lib/link";

const GpuWhyChooseSection = ({
  titlePrefix,
  titleHighlight,
  titleSuffix,
  description,
  features,
  buttonCta,
  buttonLink,
  buttonTarget,
  imageSrc,
  imageAlt,
  className,
}: GpuWhyChooseSectionProps) => {
  return (
    <section
      className={cn("relative bg-white py-8 md:py-16 2xl:py-25", className)}
      aria-labelledby="gpu-why-choose-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="gpu-why-choose-section-heading"
          align="center"
          className="max-w-5xl"
        >
          {titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {titleHighlight}
          </Text>
          {titleSuffix}
        </Text>

        <div className="mt-4 grid w-full grid-cols-1 items-center gap-5 md:mt-12.5 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Text as="h4" weight="regular" className="max-w-3xl">
              {description}
            </Text>

            <ul className="m-0 mt-4 flex list-none flex-col gap-2.5 p-0 md:mt-7.5">
              {features.map((feature) => (
                <li key={feature.id} className="flex items-start gap-2.5">
                  <Text as="span" textColor="primary" className="mt-0.5">
                    •
                  </Text>
                  <Text as="h6" textColor="gray-90">
                    {feature.title} {feature.description}
                  </Text>
                </li>
              ))}
            </ul>

            <LinkComponent
              href={buttonLink}
              target={buttonTarget}
              spacing="lg"
              className="mt-4 w-fit md:mt-12.5"
            >
              {buttonCta}
            </LinkComponent>
          </div>

          <div className="relative flex min-h-50 w-full items-center justify-center md:min-h-100">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={560}
              height={420}
              className="h-auto w-full max-w-lg object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GpuWhyChooseSection;
