import FlowArrowIcon from "./FlowArrowIcon";
import { FLOW_ARROW_COUNT } from "../../constants/private-network-section.constants";
import type { FlowDirection } from "../../types/private-network-section.types";

type FlowBandProps = {
  direction: FlowDirection;
};

const FlowBand = ({ direction }: FlowBandProps) => {
  return (
    <div
      className="relative flex h-20 w-fit flex-col items-center justify-between px-0.5 sm:px-1 md:h-3 md:w-full md:flex-row md:px-0"
      aria-hidden="true"
    >
      <div className="absolute bottom-0 left-1/2 top-0 -translate-x-1/2 border-l border-[0.5px] border-dashed border-gray-60 md:hidden" />
      <div className="absolute left-0 hidden w-full border-t border-[0.5px] border-dashed border-gray-60 md:block" />
      {Array.from({ length: FLOW_ARROW_COUNT }, (_, index) => (
        <FlowArrowIcon
          key={index}
          direction={direction}
          className="rotate-90 md:rotate-0"
        />
      ))}
    </div>
  );
};

export default FlowBand;
