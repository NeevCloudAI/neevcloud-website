import { SquareCheck, Clock } from "lucide-react";
import type { Step } from "../data/three-steps-data";
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

      <Text className="bg-gray-60 text-gray-90 rounded-full px-4 py-1 w-fit">
        {step.badge}
      </Text>

      <Text className="mt-4" as="h6">
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

      {/* Check items */}
      <ul className="mt-4 flex flex-col gap-2">
        {step.checkItems.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.type === "check" ? (
              <SquareCheck className="w-4.5 h-4.5 text-primary shrink-0" />
            ) : (
              <Clock className="w-4.5 h-4.5 text-blue-40 shrink-0" />
            )}
            <Text
              as="h6"
              textColor={item.type === "check" ? "black" : "blue-40"}
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
