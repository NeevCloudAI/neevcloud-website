import { Text } from "@/shared/ui-lib";
import { SquareCheck, Clock } from "lucide-react";
import type { Step } from "../data/three-steps-data";

interface StepContentProps {
  step: Step;
}

const StepContent = ({ step }: StepContentProps) => {
  return (
    <div>
      {/* Big faded step number */}
      <p className="text-[7rem] md:text-[9rem] font-bold leading-none text-[var(--gray-60)] select-none">
        {step.number}
      </p>

      {/* Badge pill */}
      <span className="inline-block mt-3 text-xs font-semibold tracking-widest text-[var(--gray-90)] bg-[var(--gray-60)] rounded-full px-3 py-1 uppercase">
        {step.badge}
      </span>

      {/* Description — supports inline teal links via dangerouslySetInnerHTML if needed */}
      <p className="mt-4 text-sm leading-relaxed">
        {step.description}
        {step.descriptionHighlight && (
          <span className="text-primary font-medium">
            {step.descriptionHighlight}
          </span>
        )}
        {step.descriptionSuffix}
      </p>

      {/* Check items */}
      <ul className="mt-4 flex flex-col gap-2">
        {step.checkItems.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.type === "check" ? (
              <SquareCheck className="w-4 h-4 text-primary flex-shrink-0" />
            ) : (
              <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
            )}
            <span
              className={`text-sm ${item.type === "check" ? "" : "text-gray-400"}`}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepContent;
