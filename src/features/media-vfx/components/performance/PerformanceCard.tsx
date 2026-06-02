import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import StorageComparisonBar, {
  StorageComparisonMetric,
} from "@/shared/components/StorageComparisonBar";
import {
  PerformanceBenchmarkCardProps,
  BenchmarkItem,
  FastestConfigCardProps,
  FastestConfigFeature,
  DescriptionSegment,
} from "../../types/performance-section.types";

const MAX_MINUTES = 45;

const toMetric = (item: BenchmarkItem): StorageComparisonMetric => ({
  id: item.id,
  label: item.label,
  labelColor: item.labelColor,
  subtitle: item.subtitle,
  displayValue: `${item.minutes} min`,
  seconds: (item.minutes / MAX_MINUTES) * 100,
  valueColor: item.valueColor,
  barColor: item.barColor,
});

// ─── Left Card: Benchmark Chart ────────────────────────────────────────────

export const PerformanceBenchmarkCard = ({
  items,
  className,
  footnote,
}: PerformanceBenchmarkCardProps) => {
  return (
    <article
      className={cn(
        "flex w-full flex-col rounded-xl bg-gray-950 p-5 md:p-8",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-95 pb-4">
        <Text
          as="p"
          className="text-xs font-mono tracking-widest text-gray-75 uppercase"
        >
          4K Frame · Cycles Path Tracing
        </Text>
        <Text as="p" className="text-xs text-gray-75">
          lower is better
        </Text>
      </div>

      {/* Bars */}
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <StorageComparisonBar
            key={item.id}
            metric={toMetric(item)}
            backgroundColor="bg-gray-90"
          />
        ))}
      </div>

      {/* Footnote */}
      {footnote && (
        <Text
          as="p"
          className="mt-6 text-xs text-gray-85 leading-relaxed border-t border-gray-95 pt-4"
        >
          {footnote}
        </Text>
      )}
    </article>
  );
};

// ─── Right Card: Fastest Configuration ─────────────────────────────────────

const FastestConfigFeatureItem = ({
  feature,
}: {
  feature: FastestConfigFeature;
}) => (
  <li className="flex items-center flex-wrap gap-2.5 rounded-md bg-white px-3.75 py-2.5">
    <div className="flex items-center gap-2.5">
      <Text as="h6" textColor="primary" className="shrink-0" aria-hidden="true">
        •
      </Text>
      <Text
        as="h6"
        className="whitespace-nowrap text-gray-85 font-mono text-base"
      >
        {feature.label}
      </Text>
    </div>
    <Text as="h6" className="text-base">
      {feature.value}
    </Text>
  </li>
);

export const FastestConfigCard = ({
  minutesPerFrame,
  description,
  features,
  className,
}: FastestConfigCardProps) => {
  return (
    <article
      className={cn(
        "flex w-full flex-col rounded-xl bg-gray-10 p-5 md:p-8",
        className,
      )}
    >
      {/* Label */}
      <Text
        as="h2"
        className="text-lg font-semibold tracking-widest uppercase mb-3"
      >
        Fastest Configuration
      </Text>

      {/* Big Stat */}
      <div className="flex items-baseline gap-2 mb-4">
        <Text
          as="h1"
          className="text-6xl font-semibold leading-none text-primary"
        >
          {minutesPerFrame}
        </Text>
        <Text as="h3" className="text-3xl font-semibold text-primary">
          min
        </Text>
        <Text as="h3" className="text-3xl font-semibold">
          per 4K frame
        </Text>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-90 leading-relaxed mb-6">
        {description.map((segment: DescriptionSegment, i: number) =>
          segment.highlight ? (
            <Text as="span" key={i} textColor="primary">
              {segment.text}
            </Text>
          ) : (
            <span key={i}>{segment.text}</span>
          ),
        )}
      </p>

      {/* Feature list */}
      <ul className="flex list-none flex-col gap-1.25 p-0 m-0">
        {features.map((feature) => (
          <FastestConfigFeatureItem key={feature.id} feature={feature} />
        ))}
      </ul>
    </article>
  );
};
