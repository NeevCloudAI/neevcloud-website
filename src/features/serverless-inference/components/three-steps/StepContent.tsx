import { Clock, SquareCheck } from "@/shared/icons/lucide-icon-map";
import { Text } from "@/shared/ui-lib";
import { Step } from "../../types/three-steps-section.types";

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
        className="text-[5rem]"
        aria-hidden="true"
      >
        {step.number}
      </Text>

      <Text className="bg-gray-01 text-gray-05 rounded-full px-3.75 py-1.25 w-fit mt-2">
        {step.badge}
      </Text>

      <Text className="mt-4 md:mt-9" as="h6">
        {step.description}
        {step.descriptionHighlight && (
          <Text
            as="span"
            variant="h6"
            textColor="primary"
            weight="semibold"
            className="ml-0 md:ml-0"
          >
            {step.descriptionHighlight}
          </Text>
        )}
        {step.descriptionSuffix}
      </Text>

      <ul className="mt-5 flex flex-col gap-2.5 list-none p-0 m-0">
        {step.checkItems.map((item) => (
          <li key={item.text} className="flex items-center gap-2.5">
            {item.type === "check" ? (
              <SquareCheck
                className="w-4.5 h-4.5 text-primary shrink-0"
                aria-hidden="true"
              />
            ) : (
              <Clock
                className="w-4.5 h-4.5 text-gray-02 shrink-0"
                aria-hidden="true"
              />
            )}
            <Text
              as="h6"
              textColor={item.type === "check" ? "black" : "gray-02"}
            >
              {item.text}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepContent;
