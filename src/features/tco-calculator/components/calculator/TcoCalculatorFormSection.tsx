import type { ReactNode } from "react";
import { Text } from "@/shared/ui-lib";

type TcoCalculatorFormSectionProps = {
  step: number;
  title: string;
  children: ReactNode;
};

const TcoCalculatorFormSection = ({
  step,
  title,
  children,
}: TcoCalculatorFormSectionProps) => {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <span
          className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
          aria-hidden="true"
        >
          {step}
        </span>
        <Text as="h5" weight="semibold" textColor="primary">
          {title}
        </Text>
      </div>
      <div className="mt-4 flex flex-col gap-5">{children}</div>
    </div>
  );
};

export default TcoCalculatorFormSection;
