import { Text } from "@/shared/ui-lib";
import type { MetricCardData } from "@/features/nvme/data/metrics-data";

export type MetricCardProps = {
  metric: MetricCardData;
};

const MetricCard = ({ metric }: MetricCardProps) => {
  const Icon = metric.icon;

  return (
    <article className="flex flex-col items-center gap-2 rounded-md bg-gray-10 px-4 py-6">
      <Icon size={14} className={`text-${metric.valueColor}`} />
      <Text as="h3" weight="semibold" textColor={metric.valueColor}>
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
      <Text as="small" textColor="gray-75" align="center">
        {metric.label}
      </Text>
    </article>
  );
};

export default MetricCard;
