import { Button, Text } from "@/shared/ui-lib";
import { YOU_WILL_LEARN_LABEL } from "../../constants/three-paths-section.constants";
import type { PathsStep } from "../../types/three-paths-section.types";
import LinkComponent from "@/shared/ui-lib/link";

type StepContentProps = {
  step: PathsStep;
};

const StepContent = ({ step }: StepContentProps) => {
  return (
    <div>
      <Text
        as="h1"
        weight="semibold"
        textColor="gray-60"
        className="text-[3rem] md:text-[5rem]"
        aria-hidden="true"
      >
        {step.number}
      </Text>

      <Text
        as="h3"
        weight="semibold"
        className="mt-4 md:mt-8 text-[20px] md:text-[30px]"
      >
        {step.heading}
      </Text>

      <Text as="h6" className="mt-2.5">
        {step.description}
      </Text>

      <div className="mt-5 rounded-md bg-primary p-3.75">
        <Text textColor="gray-10">{YOU_WILL_LEARN_LABEL}</Text>
        <Text as="h6" textColor="white">
          {step.learnText}
        </Text>
      </div>

      <LinkComponent
        href={step.primaryCtaRoute}
        target={step.primaryCtaTarget}
        variant="black"
        spacing="lg"
        className="mt-4 md:mt-10"
      >
        {step.primaryCtaLabel}
      </LinkComponent>
    </div>
  );
};

export default StepContent;
