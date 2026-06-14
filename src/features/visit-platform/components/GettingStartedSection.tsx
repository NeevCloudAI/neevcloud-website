import Link from "next/link";
import { Text } from "@/shared/ui-lib";
import { GETTING_STARTED_STEPS } from "../data/getting-started-section.data";
import type { GettingStartedStep } from "../types/getting-started-section.types";
import Container from "@/shared/components/container";

const GettingStartedStepItem = ({
  step,
  index,
  isLast,
}: {
  step: GettingStartedStep;
  index: number;
  isLast: boolean;
}) => (
  <>
    <div
      className={`flex items-start gap-4 py-5 ${index < 3 ? "border-b border-gray-01" : ""}`}
    >
      <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-white">
        <Text
          as="h4"
          textColor="gray-02"
          weight="semibold"
          className="text-30px"
        >
          {step.number}
        </Text>
      </div>
      <div className="flex flex-col">
        <Text as="h5" weight="semibold" textColor="gray-05">
          {step.title}
        </Text>
        <Text textColor="gray-03" className="pt-1.25">
          {step.description}
          {step.link && (
            <Link
              href={step.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-2 hover:underline"
            >
              {step.link.text}
            </Link>
          )}
          {step.descriptionSuffix}
        </Text>
        {step.code && (
          <Text textColor="primary" className="mt-1 font-mono">
            {step.code}
          </Text>
        )}
      </div>
    </div>
  </>
);

const GettingStartedSection = () => {
  return (
    <section
      className="relative bg-black pb-8 md:pb-16 2xl:pb-25"
      aria-labelledby="getting-started-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="getting-started-heading"
          textColor="white"
          align="center"
          className="max-w-4xl"
        >
          Access your
          <Text as="span" variant="h2" textColor="primary">
            AI infrastructure
          </Text>
        </Text>

        <div className="mt-6 md:mt-12.5 w-full max-w-2xl rounded-xl bg-cloud-gray p-6 md:p-10 ">
          <Text as="h3" weight="semibold">
            GETTING STARTED
          </Text>
          <div className="mt-4 md:mt-7.5">
            {GETTING_STARTED_STEPS.map((step, index) => (
              <GettingStartedStepItem
                key={step.id}
                step={step}
                index={index}
                isLast={index === GETTING_STARTED_STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GettingStartedSection;
