import { Divider, Text } from "@/shared/ui-lib";
import { INFRASTRUCTURE_GPU_SPEC_BADGES } from "../constants/infrastructure-section.constants";

type GpuAvailabilityRowProps = {
  rowId: string;
  modelName: string;
  showDividerBelow: boolean;
};

const BADGE_CLASS = "bg-white/12 rounded-xl px-2.5 py-1";

export default function GpuAvailabilityRow({
  rowId,
  modelName,
  showDividerBelow,
}: GpuAvailabilityRowProps) {
  return (
    <>
      <div className="grid grid-cols-[minmax(120px,1fr)_auto_auto] items-center gap-2 px-4 py-4 text-cloud-gray sm:gap-3 md:grid-cols-[minmax(180px,1fr)_auto_minmax(120px,1fr)] md:gap-4 md:px-14 md:py-5">
        <Text className="justify-self-start">{modelName}</Text>
        <div className="flex flex-wrap items-center justify-start gap-2 ">
          {INFRASTRUCTURE_GPU_SPEC_BADGES.map((label, index) => (
            <Text
              key={`${rowId}-spec-${index}`}
              as="small"
              className={`${BADGE_CLASS} whitespace-nowrap min-w-22 sm:min-w-fit`}
            >
              {label}
            </Text>
          ))}
        </div>
        <Text
          textColor="primary"
          weight="semibold"
          className="shrink-0 text-right justify-self-end drop-shadow-[0_0_8px_#58D7A7]"
        >
          Available
        </Text>
      </div>
      {showDividerBelow ? (
        <Divider orientation="horizontal" className="bg-white/12" />
      ) : null}
    </>
  );
}
