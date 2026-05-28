import { SquareCheck } from "lucide-react";
import { Text } from "@/shared/ui-lib";
import type { ModelsSectionStep } from "../../types/models-section.types";

type ModelsSectionStepContentProps = {
  step: ModelsSectionStep;
};

const ModelsSectionStepContent = ({ step }: ModelsSectionStepContentProps) => {
  return (
    <div>
      <Text
        as="h1"
        textColor="gray-60"
        className="text-[5rem]"
        aria-hidden="true"
      >
        {step.number}
      </Text>

      <Text as="h3" weight="semibold" className="text-[30px] mt-5">
        {step.heading}
      </Text>

      <Text className="mt-2.5" as="h6">
        {step.description}
      </Text>

      <ul className="mt-5 flex flex-col gap-2.5 list-none p-0 m-0">
        {step.checkItems.map((item) => (
          <li
            key={item.text}
            className="bg-white rounded-md px-3.75 py-2.5 flex items-center gap-5"
          >
            <SquareCheck
              size={24}
              className=" text-primary shrink-0"
              aria-hidden="true"
            />
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

export default ModelsSectionStepContent;
