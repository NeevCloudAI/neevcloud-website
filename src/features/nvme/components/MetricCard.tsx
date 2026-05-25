import type { MetricCardData } from "@/features/nvme/data/metrics-data";
import { Text } from "@/shared/ui-lib";

export type MetricCardProps = {
  metric: MetricCardData;
};

const MetricCard = ({ metric }: MetricCardProps) => {
  return (
    <article className="flex flex-col items-center rounded-md bg-gray-10 px-4 py-7.5">
      <metric.icon size={14} className={`text-${metric.valueColor}`} />
      <Text
        as="h3"
        weight="semibold"
        textColor={metric.valueColor}
        className="mt-2.5 mb-1.25"
      >
        {metric.value}
        <Text
          as="span"
          variant="h3"
          textColor="black"
          className="ml-1 md:ml-1.5"
        >
          {metric.unit}
        </Text>
      </Text>
      <Text as="small" textColor="gray-85" align="center">
        {metric.label}
      </Text>
    </article>
  );
};

export default MetricCard;
