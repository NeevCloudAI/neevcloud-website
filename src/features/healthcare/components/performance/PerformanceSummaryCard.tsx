import { Text } from "@/shared/ui-lib";
import { PerformanceSummaryCardProps } from "../../types/performance-section.types";

const PerformanceSummaryCard = ({ metric }: PerformanceSummaryCardProps) => {
  return (
    <article className="rounded-md border border-white/12 bg-white/6 p-4 md:p-10 text-center backdrop-blur-md">
      <Text textColor="gray-01" weight="semibold" className="tracking-wide">
        {metric.label}
      </Text>
      <Text as="h1" textColor="primary" className="mt-2.5">
        {metric.value}
      </Text>
      <Text textColor="white" className="mt-2.5">
        {metric.footer}
      </Text>
    </article>
  );
};

export default PerformanceSummaryCard;
