import { Clock, SquareCheck } from "lucide-react";
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
        textColor="gray-60"
        className="text-[5rem]"
        aria-hidden="true"
      >
        {step.number}
      </Text>

      <Text as="h3" weight="semibold" className="mt-4 text-3xl">
        {step.heading}
      </Text>

      <Text as="h6" className="mt-4">
        {step.description1}
      </Text>

      <Text as="h6" className="mt-3">
        {step.description2}
      </Text>
    </div>
  );
};

export default StepContent;
