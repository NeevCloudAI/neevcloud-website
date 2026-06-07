import {
  GPU_FLIP_CHART_MAX_MULTIPLIER,
  GPU_FLIP_PIXELS_PER_UNIT,
} from "@/shared/constants/gpu-other-gpus-section.constants";
import type { GpuFlipChartProps } from "@/shared/types/gpu-other-gpus-section.types";
import { Text } from "@/shared/ui-lib";

const chartTicks = Array.from(
  { length: GPU_FLIP_CHART_MAX_MULTIPLIER + 1 },
  (_, index) => GPU_FLIP_CHART_MAX_MULTIPLIER - index
);

const GpuFlipChart = ({ flipDetails }: GpuFlipChartProps) => {
  const upToHeight = flipDetails.linePosition - flipDetails.card1.height;

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-0 bottom-0 left-5 w-px bg-gray-92" />
      {chartTicks.map((tick) => (
        <div
          key={tick}
          className="absolute inset-x-0 flex items-end "
          style={{ bottom: tick * GPU_FLIP_PIXELS_PER_UNIT }}
        >
          <Text
            as="small"
            textColor="gray-100"
            weight="semibold"
            className="w-5 pr-1 text-right text-[10px] "
          >
            {tick}x
          </Text>
          <div className="flex-1 border-t border-gray-92" />
        </div>
      ))}
      <div
        className="absolute right-0 left-5 border-t-2 border-dashed border-gray-80 z-3"
        style={{ bottom: flipDetails.linePosition }}
      />
      <div
        className="absolute bottom-[0.5px] left-25 w-13 p-2 border flex justify-center z-3 bg-black text-white"
        style={{
          height: flipDetails.card1.height,
        }}
      >
        {flipDetails.card1.upToLabel ? (
          <div
            className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center"
            style={{
              bottom: flipDetails.card1.height,
              height: upToHeight,
            }}
          >
            <div className="flex min-h-0 w-full flex-1 flex-col items-center">
              <Text
                as="small"
                textColor="black"
                className="h-[5px] text-[13px] leading-none"
                weight="semibold"
              >
                ▴
              </Text>
              <div className="w-px flex-1 bg-black" />
            </div>
            <Text
              as="small"
              textColor="black"
              className="shrink-0 whitespace-nowrap text-[10px] leading-none"
              weight="semibold"
            >
              {flipDetails.card1.upToLabel}
            </Text>
            <div className="flex min-h-0  w-px flex-1 justify-center">
              <div className="w-px flex-1 bg-black" />
            </div>
          </div>
        ) : null}
        <Text as="small">{flipDetails.card1.label}</Text>
        <Text
          as="small"
          className="absolute bottom-[-18] left-1/2 -translate-x-1/2 z-3"
          textColor={"black"}
        >
          {flipDetails.card1.cardName}
        </Text>
      </div>
      <div
        className="absolute bottom-[0.5px] left-50 w-13 p-2 border flex justify-center bg-linear-to-r from-[#59D8A7] to-[#022C3C] text-white"
        style={{
          height: flipDetails.card2.height,
        }}
      >
        <Text as="small">{flipDetails.card2.label}</Text>
        <Text
          as="small"
          className="absolute bottom-[-18] left-1/2 -translate-x-1/2 z-3 text-[10px] whitespace-nowrap"
          textColor={"black"}
        >
          {flipDetails.card2.cardName}
        </Text>
      </div>
    </div>
  );
};

export default GpuFlipChart;
