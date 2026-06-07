import { cn } from "@/lib/utils";
import type {
  GpuTechnicalSpecsBar,
  GpuTechnicalSpecsBarVariant,
  GpuTechnicalSpecsChart,
} from "@/shared/types/gpu-technical-specs-section.types";
import { Text } from "@/shared/ui-lib";

type GpuTechnicalSpecsBarChartProps = {
  chart: GpuTechnicalSpecsChart;
};

const barVariantClassName: Record<GpuTechnicalSpecsBarVariant, string> = {
  black: "bg-black text-white",
  default: "border border-gray-92 bg-gray-106 text-black",
  highlight: "bg-linear-to-t from-[#022C3C] to-[#59D8A7] text-white",
  "highlight-light": "bg-linear-to-t from-[#46a481] to-[#96f7e4] text-black",
};

const legendVariantClassName: Record<GpuTechnicalSpecsBarVariant, string> = {
  black: "bg-black",
  default: "bg-gray-106 border border-gray-92",
  highlight: "bg-linear-to-t from-[#022C3C] to-[#59D8A7]",
  "highlight-light": "bg-linear-to-t from-[#46a481] to-[#96f7e4]",
};

function formatYAxisTick(
  value: number,
  format: GpuTechnicalSpecsChart["yAxisFormat"]
): string {
  if (format === "number") {
    return Number.isInteger(value) ? value.toString() : value.toFixed(1);
  }

  const rounded = Math.round(value * 10) / 10;
  const formatted = Number.isInteger(rounded)
    ? rounded.toString()
    : rounded.toFixed(1);

  return `${formatted}x`;
}

function buildYAxisTicks(chart: GpuTechnicalSpecsChart): number[] {
  const step = chart.yAxisStep ?? 1;
  const ticks: number[] = [];

  for (let value = chart.yAxisMax; value >= 0; value -= step) {
    ticks.push(Math.round(value * 100) / 100);
  }

  return ticks;
}

function getBarHeightPercent(value: number, yAxisMax: number): number {
  return (value / yAxisMax) * 100;
}

type BarArrowProps = {
  bar: GpuTechnicalSpecsBar;
  chart: GpuTechnicalSpecsChart;
  barAreaHeight: number;
};

const BarReferenceArrow = ({ bar, chart, barAreaHeight }: BarArrowProps) => {
  if (!bar.arrowLabel || chart.referenceLine === undefined) {
    return null;
  }

  const barHeight =
    (getBarHeightPercent(bar.value, chart.yAxisMax) / 100) * barAreaHeight;
  const referenceHeight =
    (getBarHeightPercent(chart.referenceLine, chart.yAxisMax) / 100) *
    barAreaHeight;
  const arrowHeight = referenceHeight - barHeight;

  if (arrowHeight <= 0) {
    return null;
  }

  return (
    <div
      className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center"
      style={{
        bottom: barHeight,
        height: arrowHeight,
      }}
    >
      <Text
        as="small"
        weight="semibold"
        textColor="black"
        className="shrink-0 whitespace-nowrap text-[10px]"
      >
        {bar.arrowLabel}
      </Text>
      <div className="flex min-h-0 w-full flex-1 flex-col items-center">
        <Text as="small" className="text-[8px] leading-none" textColor="black">
          ▴
        </Text>
        <div className="w-px flex-1 border-l border-dashed border-black" />
      </div>
    </div>
  );
};

const GpuTechnicalSpecsBarChart = ({
  chart,
}: GpuTechnicalSpecsBarChartProps) => {
  const yAxisTicks = buildYAxisTicks(chart);
  const yAxisFormat = chart.yAxisFormat ?? "multiplier";
  const barAreaHeight = chart.barChartHeight ?? 130;
  const referenceLineHeight =
    chart.referenceLine !== undefined
      ? (getBarHeightPercent(chart.referenceLine, chart.yAxisMax) / 100) *
        barAreaHeight
      : undefined;

  return (
    <figure className="w-full">
      {chart.title && (
        <Text weight="semibold" align="center">
          {chart.title}
        </Text>
      )}

      <div className="flex gap-2 mt-4 md:mt-8">
        <div
          className="relative shrink-0"
          style={{ height: barAreaHeight + 24, width: 28 }}
        >
          {yAxisTicks.map((tick) => {
            const bottom =
              (getBarHeightPercent(tick, chart.yAxisMax) / 100) * barAreaHeight;

            return (
              <Text
                key={tick}
                as="small"
                textColor="gray-100"
                className="absolute right-0 -translate-y-1/2"
                style={{ bottom }}
              >
                {formatYAxisTick(tick, yAxisFormat)}
              </Text>
            );
          })}
        </div>

        <div className="relative min-w-0 flex-1">
          <div
            className="relative border-l border-b border-gray-92"
            style={{ height: barAreaHeight }}
          >
            {yAxisTicks.map((tick) => {
              const bottom =
                (getBarHeightPercent(tick, chart.yAxisMax) / 100) *
                barAreaHeight;

              return (
                <div
                  key={`grid-${tick}`}
                  className="absolute inset-x-0 border-t border-gray-92"
                  style={{ bottom }}
                />
              );
            })}

            {referenceLineHeight !== undefined ? (
              <div
                className="absolute inset-x-0 z-1 border-t-2 border-dashed border-gray-80"
                style={{ bottom: referenceLineHeight }}
              />
            ) : null}

            <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-around px-1">
              {chart.bars.map((bar) => {
                const barHeight =
                  (getBarHeightPercent(bar.value, chart.yAxisMax) / 100) *
                  barAreaHeight;

                return (
                  <div
                    key={bar.id}
                    className="relative flex w-13 max-w-[20%] flex-col items-center"
                  >
                    <BarReferenceArrow
                      bar={bar}
                      chart={chart}
                      barAreaHeight={barAreaHeight}
                    />
                    <div
                      className={cn(
                        "relative flex w-full min-w-10 items-center justify-center px-1 py-1",
                        barVariantClassName[bar.variant]
                      )}
                      style={{
                        height: Math.max(barHeight, 18),
                      }}
                    >
                      <Text as="small" className="text-[10px] leading-none">
                        {bar.displayValue}
                      </Text>
                    </div>
                    <Text
                      as="small"
                      textColor="black"
                      align="center"
                      className="absolute top-full mt-1 w-16 leading-tight"
                    >
                      {bar.name}
                    </Text>
                    {bar.description && (
                      <Text
                        as="small"
                        textColor="black"
                        align="center"
                        className="absolute top-full mt-4.5 w-16 text-[9px] leading-tight"
                      >
                        {bar.description}
                      </Text>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {chart.yAxisLabel ? (
            <Text
              as="small"
              align="center"
              textColor="gray-100"
              className="mt-6 block text-[10px]"
            >
              {chart.yAxisLabel}
            </Text>
          ) : null}
        </div>
      </div>

      <figcaption className="mt-2">
        <Text
          as="small"
          align="center"
          textColor="black-5"
          className="text-[9px]"
        >
          {chart.caption}
        </Text>
      </figcaption>

      {chart.legend ? (
        <ul className="m-0 mt-4 flex list-none flex-col gap-1.5 p-0">
          {chart.legend.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span
                className={cn(
                  "size-2.5 shrink-0 rounded-xs",
                  legendVariantClassName[item.variant]
                )}
                aria-hidden="true"
              />
              <Text as="small" textColor="black-5" className="text-[10px]">
                {item.label}
              </Text>
            </li>
          ))}
        </ul>
      ) : null}
    </figure>
  );
};

export default GpuTechnicalSpecsBarChart;
