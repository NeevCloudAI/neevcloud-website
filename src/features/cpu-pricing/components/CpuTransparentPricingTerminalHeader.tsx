import { Text } from "@/shared/ui-lib";
import type { CpuTransparentPricingTerminalHeaderProps } from "../types/transparent-pricing-section.types";

const CpuTransparentPricingTerminalHeader = ({
  activeLabel,
}: CpuTransparentPricingTerminalHeaderProps) => {
  return (
    <div className="flex items-center border-b border-white-10 p-3.5">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <Text textColor="gray-80" fontFamily="spaceMono" className="ml-4.5">
        {`~ ${activeLabel}`}
      </Text>
    </div>
  );
};

export default CpuTransparentPricingTerminalHeader;
