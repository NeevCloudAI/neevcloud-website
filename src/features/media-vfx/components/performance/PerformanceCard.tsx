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

export const PerformanceBenchmarkCard = ({
  items,
  className,
  footnote,
}: PerformanceBenchmarkCardProps) => {
  return (
    <article
      className={cn(
        "flex w-full flex-col rounded-xl bg-gray-950 p-3 md:px-3.75 md:py-2.5",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/12 pb-2.5">
        <Text textColor="gray-04" fontFamily="spaceMono">
          4K Frame · Cycles Path Tracing
        </Text>
        <Text textColor="gray-04" fontFamily="spaceMono">
          lower is better
        </Text>
      </div>

      {/* Bars */}
      <div className="flex flex-col gap-5 mt-4 md:mt-7.5">
        {items.map((item) => (
          <StorageComparisonBar
            key={item.id}
            metric={toMetric(item)}
            backgroundColor="bg-gray-05"
            labelClassName="items-end"
          />
        ))}
      </div>

      {/* Footnote */}
      {footnote && (
        <Text className="text-xs text-gray-03 leading-relaxed border-t border-white/12 mt-4 md:mt-7.5 pt-3.75">
          {footnote}
        </Text>
      )}
    </article>
  );
};

const FastestConfigFeatureItem = ({
  feature,
}: {
  feature: FastestConfigFeature;
}) => (
  <li className="flex items-center flex-wrap gap-2.5 rounded-md bg-white px-3.75 py-2.5">
    <div className="flex items-center gap-2.5">
      <Text as="h6" textColor="primary" aria-hidden="true" weight="semibold">
        •
      </Text>
      <Text as="h6" textColor="gray-03">
        {feature.label}
      </Text>
    </div>
    <Text as="h6">{feature.value}</Text>
  </li>
);

export const FastestConfigCard = ({
  minutesPerFrame,
  features,
  className,
}: FastestConfigCardProps) => {
  return (
    <article
      className={cn(
        "flex w-full flex-col rounded-xl bg-cloud-gray p-4 md:p-10",
        className,
      )}
    >
      {/* Label */}
      <Text as="h4" className="text-[18px] md:text-[22px]" weight="semibold">
        FASTEST CONFIGURATION
      </Text>

      {/* Big Stat */}
      <div className="flex items-baseline gap-2 mt-5">
        <Text
          as="h1"
          weight="semibold"
          className="text-[30px] md:text-6xl leading-none text-primary"
        >
          {minutesPerFrame}
        </Text>
        <Text as="h3" className="md:text-30px font-semibold text-primary">
          min
        </Text>
        <Text as="h3" className="text-30px font-semibold">
          per 4K frame
        </Text>
      </div>

      {/* Description */}
      <Text as="h6" textColor="gray-05" className="mt-6 md:mt-7.5">
        8x H100 with NVLink delivers a 20M-poly path-traced 4K frame in 2
        minutes,
        <Text as="span" textColor="primary" variant="h6">
          22.5x faster
        </Text>
        than a single A100 and
        <Text as="span" textColor="primary" variant="h6">
          7x faster
        </Text>
        than a single H100. Per-second billing means the cluster vanishes the
        moment your render finishes.
      </Text>

      {/* Feature list */}
      <ul className="flex list-none flex-col gap-1.25 mt-4 md:mt-10">
        {features.map((feature) => (
          <FastestConfigFeatureItem key={feature.id} feature={feature} />
        ))}
      </ul>
    </article>
  );
};
