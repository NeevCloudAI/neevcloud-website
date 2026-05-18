import { SquareCheck } from "lucide-react";
import type { Step } from "../data/mode-steps";
import { Text } from "@/shared/ui-lib";

interface StepContentProps {
  step: Step;
}

const StepContent = ({ step }: StepContentProps) => {
  return (
    <div>
      <Text
        as="h1"
        weight="semibold"
        textColor="gray-60"
        className="text-[5rem]"
      >
        {step.number}
      </Text>

      <Text as="h3" weight="semibold">
        {step.heading}
      </Text>

      <Text className="mt-2" as="h6">
        {step.description}
      </Text>

      <ul className="mt-4 flex flex-col gap-2">
        {step.checkItems.map((item, i) => (
          <li
            key={i}
            className="bg-white rounded-md px-4 py-2 flex items-center gap-4"
          >
            <SquareCheck size={24} className=" text-primary shrink-0" />
            <div>
              <Text as="h6">{item.text}</Text>
              <Text textColor="gray-75">{item.description}</Text>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepContent;
