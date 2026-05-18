import { Text } from "@/shared/ui-lib";

export type StorageComparisonMetric = {
  id: string;
  label: string;
  displayValue: string;
  seconds: number;
  valueColor: "primary" | "red-50" | "primary-gradient";
  barColor?: string;
};

export type StorageComparisonBarProps = {
  metric: StorageComparisonMetric;
  backgroundColor?: string;
};

const StorageComparisonBar = ({
  metric,
  backgroundColor = "bg-white",
}: StorageComparisonBarProps) => {
  const fillPercent = Math.min(100, (metric.seconds / 100) * 100);

  return (
    <div className="flex w-full flex-col gap-1.5">
      <div className="flex items-center justify-between gap-4">
        <Text as="h6" fontFamily="spaceMono" textColor="gray-90">
          {metric.label}
        </Text>
        <Text as="h6" fontFamily="spaceMono" textColor={metric.valueColor}>
          {metric.displayValue}
        </Text>
      </div>
      <div
        role="progressbar"
        className={`relative h-2 w-full overflow-hidden rounded-full ${backgroundColor}`}
      >
        <div
          className={`absolute inset-y-0 left-0 rounded-full ${metric.barColor}`}
          style={{ width: `${fillPercent}%` }}
        />
      </div>
    </div>
  );
};

export default StorageComparisonBar;
