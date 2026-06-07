import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import type { GpuHeroSectionProps } from "@/shared/types/gpu-hero-section.types";
import { Text } from "@/shared/ui-lib";
import { SquareCheck } from "lucide-react";

const GpuHeroSection = ({
  badgeText,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  titleSecondary,
  description,
  bulletPoints = [],
  features,
  pricingPrefix,
  pricingAmount,
  pricingFooter,
  rightContent,
  className,
}: GpuHeroSectionProps) => {
  return (
    <section
      className={cn("relative bg-black py-8 md:py-16 2xl:py-25", className)}
    >
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
        <div className="flex flex-col justify-center">
          <Text
            as="small"
            textColor="primary-70"
            className="bg-green-60 p-1 rounded-md border border-green-40 w-fit"
          >
            {badgeText}
          </Text>

          <Text
            as="h1"
            textColor="white"
            weight="medium"
            className="max-w-2xl mt-2.5"
          >
            {titlePrefix}
            <Text variant="h1" as="span" textColor="primary" weight="medium">
              {titleHighlight}
            </Text>
            {titleSuffix}
          </Text>

          {titleSecondary ? (
            <Text
              as="h1"
              textColor="white"
              weight="medium"
              className="max-w-2xl"
            >
              {titleSecondary}
            </Text>
          ) : null}

          <Text as="h6" className="mt-2.5 max-w-3xl" textColor="white">
            {description}
          </Text>

          <ul className="mt-4 md:mt-7.5 flex flex-col gap-2.5">
            {bulletPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <Text as="span" textColor="primary">
                  •
                </Text>
                <Text as="h6" textColor="gray-60">
                  {point}
                </Text>
              </li>
            ))}
          </ul>

          <ul className="mt-4 md:mt-7.5 flex gap-2.5 md:gap-7.5">
            {features.map((feature, index) => (
              <li
                key={`${feature}-${index}`}
                className="flex items-center gap-2.5"
              >
                <SquareCheck size={24} className="text-primary" />
                <Text as="h6" textColor="gray-60">
                  {feature}
                </Text>
              </li>
            ))}
          </ul>

          <div className="mt-4 md:mt-12.5">
            <Text as="h6" textColor="gray-60">
              {pricingPrefix}
              <Text
                as="span"
                textColor="primary"
                variant="h2"
                weight="semibold"
              >
                {pricingAmount}
              </Text>
            </Text>
            <Text as="h6" textColor="gray-60">
              {pricingFooter}
            </Text>
          </div>
        </div>
        <div>{rightContent}</div>
      </Container>
    </section>
  );
};

export default GpuHeroSection;
