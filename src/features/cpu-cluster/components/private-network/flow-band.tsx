import {
  FLOW_ARROW_COUNT,
  PILL_VARIANT_STYLES,
} from "@/features/cpu-cluster/data/private-network-section-data";
import type {
  ComputePillVariant,
  FlowDirection,
} from "@/features/cpu-cluster/data/private-network-section-types";
import { Text } from "@/shared/ui-lib";

type FlowBandProps = {
  direction: FlowDirection;
};

type FlowArrowIconProps = {
  direction: FlowDirection;
  className?: string;
};

type ComputePillProps = {
  label: string;
  variant: ComputePillVariant;
};

function FlowArrowIcon({ direction, className }: FlowArrowIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`z-2 h-3 w-3 origin-center md:h-5 md:w-5 ${className ?? ""}`}
    >
      {direction === "forward" ? (
        <>
          <path
            d="M9.10742 10.7144L12.3217 7.50007L9.10742 4.28578"
            stroke="#00A78B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.67871 7.5H12.3216"
            stroke="#00A78B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <path
            d="M5.89258 10.7144L2.67829 7.50007L5.89258 4.28578"
            stroke="#FF4D48"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.3213 7.5H2.67843"
            stroke="#FF4D48"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

export function FlowBand({ direction }: FlowBandProps) {
  return (
    <div className="relative flex h-30 w-fit flex-col items-center justify-between px-0.5 sm:px-1 md:h-3 md:w-full md:flex-row md:px-0">
      <div
        className="absolute bottom-0 left-1/2 top-0 -translate-x-1/2 border-l border-[0.5px] border-dashed border-gray-60 md:hidden"
        aria-hidden
      />
      <div
        className="absolute left-0 top-1/2 hidden w-full border-t border-[0.5px] border-dashed border-gray-60 md:block"
        aria-hidden
      />
      {Array.from({ length: FLOW_ARROW_COUNT }, (_, index) => (
        <FlowArrowIcon
          key={index}
          direction={direction}
          className="rotate-90 md:rotate-0"
        />
      ))}
    </div>
  );
}

export function ComputePill({ label, variant }: ComputePillProps) {
  return (
    <Text
      as="small"
      className={`w-fit rounded-full px-4 py-1 ${PILL_VARIANT_STYLES[variant]}`}
    >
      {label}
    </Text>
  );
}
