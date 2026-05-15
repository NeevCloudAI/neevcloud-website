import { Text } from "@/shared/ui-lib";
import type { StorageComparisonMetric } from "@/features/nvme/data/storage-comparison-data";

export type StorageComparisonBarProps = {
  metric: StorageComparisonMetric;
  maxSeconds: number;
};

const StorageComparisonBar = ({
  metric,
  maxSeconds,
}: StorageComparisonBarProps) => {
  const fillPercent = Math.min(100, (metric.seconds / maxSeconds) * 100);

  return (
    <div className="flex w-full flex-col gap-1.5">
      <div className="flex items-center justify-between gap-4">
        <Text as="h6" fontFamily="spaceMono" textColor="gray-60">
          {metric.label}
        </Text>
        <Text as="h6" fontFamily="spaceMono" textColor={metric.valueColor}>
          {metric.displayValue}
        </Text>
      </div>
      <div
        role="progressbar"
        className="relative h-2 w-full overflow-hidden rounded-full bg-white"
      >
        <div
          className={`absolute inset-y-0 left-0 rounded-full bg-${metric.valueColor}`}
          style={{ width: `${fillPercent}%` }}
        />
      </div>
    </div>
  );
};

export default StorageComparisonBar;
