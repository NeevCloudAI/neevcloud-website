import { Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";

export type StorageComparisonMetric = {
  id: string;
  label: string;
  labelColor?: string;
  subtitle?: string; // optional secondary line shown below label
  displayValue: string;
  seconds: number;
  valueColor: string;
  barColor?: string;
};

export type StorageComparisonBarProps = {
  metric: StorageComparisonMetric;
  backgroundColor?: string;
  showLabel?: boolean; // default true  — set false to hide the whole label/value row
  labelClassName?: string;
};

const StorageComparisonBar = ({
  metric,
  backgroundColor = "bg-white",
  showLabel = true,
  labelClassName,
}: StorageComparisonBarProps) => {
  const fillPercent = Math.min(100, (metric.seconds / 100) * 100);

  return (
    <div className="flex w-full flex-col gap-1">
      {showLabel && (
        <div
          className={cn(
            "flex items-start justify-between gap-4",
            labelClassName,
          )}
        >
          {/* Label + optional subtitle stacked on the left */}
          <div className="flex flex-col gap-0.5">
            <Text
              as="h6"
              fontFamily="spaceMono"
              className={cn(metric.labelColor ?? "text-gray-60")}
            >
              {metric.label}
            </Text>
            {metric.subtitle && (
              <Text
                as="p"
                fontFamily="spaceMono"
                className="text-gray-75 leading-tight"
              >
                {metric.subtitle}
              </Text>
            )}
          </div>

          {/* Value on the right, aligned to first line of label */}
          <Text
            as="h6"
            fontFamily="spaceMono"
            className={`shrink-0 ${metric.valueColor ? `text-${metric.valueColor}` : "text-gray-90"}`}
          >
            {metric.displayValue}
          </Text>
        </div>
      )}

      <div
        role="progressbar"
        aria-valuenow={metric.seconds}
        aria-valuemin={0}
        aria-valuemax={100}
        className={`mt-1 relative h-2.75 w-full overflow-hidden rounded-full ${backgroundColor}`}
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
