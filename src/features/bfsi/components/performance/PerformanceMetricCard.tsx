import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import { PerformanceMetricCardProps } from "../../types/performance-section.types";

const PerformanceMetricCard = ({
  metric,
  className,
}: PerformanceMetricCardProps) => {
  const { value, unit, title, description } = metric;

  return (
    <article
      className={cn(
        "rounded-md bg-white-5 p-4 backdrop-blur-md md:px-7.5 md:py-10",
        className
      )}
    >
      <Text as="h1" textColor="primary">
        {value}
        {unit ? (
          <Text as="span" variant="h5" textColor="white">
            {unit}
          </Text>
        ) : null}
      </Text>
      <Text as="h3" textColor="white" className="mt-2.5">
        {title}
      </Text>
      <Text as="h6" textColor="gray-75">
        {description}
      </Text>
    </article>
  );
};

export default PerformanceMetricCard;
