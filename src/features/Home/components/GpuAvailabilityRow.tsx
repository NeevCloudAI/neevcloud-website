import { Divider, Text } from "@/shared/ui-lib";
import { INFRASTRUCTURE_GPU_SPEC_BADGES } from "@/features/Home/constants/infrastructure-section.constants";

type GpuAvailabilityRowProps = {
  rowId: string;
  modelName: string;
  showDividerBelow: boolean;
};

const BADGE_CLASS = "bg-white-10 rounded-xl px-2.5 py-1";

export default function GpuAvailabilityRow({
  rowId,
  modelName,
  showDividerBelow,
}: GpuAvailabilityRowProps) {
  return (
    <>
      <div className="flex items-center justify-between gap-4 px-4 md:px-14 py-4 md:py-5 text-gray-10">
        <Text>{modelName}</Text>
        <div className="flex flex-col md:flex-row flex-wrap gap-2">
          {INFRASTRUCTURE_GPU_SPEC_BADGES.map((label, index) => (
            <Text
              key={`${rowId}-spec-${index}`}
              as="small"
              className={BADGE_CLASS}
            >
              {label}
            </Text>
          ))}
        </div>
        <Text
          textColor="primary"
          weight="semibold"
          className="shrink-0 drop-shadow-[0_0_8px_#58D7A7]"
        >
          Available
        </Text>
      </div>
      {showDividerBelow ? (
        <Divider orientation="horizontal" className="bg-white-10" />
      ) : null}
    </>
  );
}
