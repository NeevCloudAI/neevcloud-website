import { SquareCheck } from "lucide-react";
import type { Step } from "../data/mode-steps";
import { Text } from "@/shared/ui-lib";

interface StepContentProps {
  step: Step;
}

const StepContent = ({ step }: StepContentProps) => {
  return (
    <div>
      <Text as="h1" textColor="gray-60" className="text-[5rem]">
        {step.number}
      </Text>

      <Text as="h3" weight="semibold" className="text-[30px]">
        {step.heading}
      </Text>

      <Text className="mt-2.5" as="h6">
        {step.description}
      </Text>

      <ul className="mt-5 flex flex-col gap-2.5">
        {step.checkItems.map((item, i) => (
          <li
            key={i}
            className="bg-white rounded-md px-3.75 py-2.5 flex items-center gap-5"
          >
            <SquareCheck size={24} className=" text-primary shrink-0" />
            <div>
              <Text as="h6" weight="regular">
                {item.text}
              </Text>
              <Text textColor="gray-75">{item.description}</Text>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepContent;
