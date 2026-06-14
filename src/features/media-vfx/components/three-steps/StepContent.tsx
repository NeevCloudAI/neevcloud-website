import { Text } from "@/shared/ui-lib";
import { Step } from "../../types/four-steps-section.types";

type StepContentProps = {
  step: Step;
};

const StepContent = ({ step }: StepContentProps) => {
  return (
    <div>
      <Text
        as="h1"
        weight="semibold"
        textColor="gray-01"
        className="text-[3rem] md:text-[5rem]"
        aria-hidden="true"
      >
        {step.number}
      </Text>

      <Text as="h3" weight="semibold" className="mt-4 md:mt-8 md:text-30px">
        {step.heading}
      </Text>

      <Text as="h6" className="mt-2.5">
        {step.description1}
      </Text>

      <Text as="h6" className="mt-2.5">
        {step.description2}
      </Text>
    </div>
  );
};

export default StepContent;
