import { Text } from "@/shared/ui-lib";
import { MetricCardData } from "../../types/metrics-section.types";

type MetricCardProps = {
  metric: MetricCardData;
};

const MetricCard = ({ metric }: MetricCardProps) => {
  const Icon = metric.icon;

  return (
    <article className="flex flex-col items-center rounded-md bg-cloud-gray p-4 md:px-4 md:py-7.5">
      <Icon
        size={14}
        className={`text-${metric.valueColor}`}
        aria-hidden="true"
      />
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
      <Text as="small" textColor="gray-03" align="center">
        {metric.label}
      </Text>
    </article>
  );
};

export default MetricCard;
