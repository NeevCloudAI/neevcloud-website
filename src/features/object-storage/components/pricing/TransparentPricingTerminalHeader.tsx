import { Text } from "@/shared/ui-lib";

const TransparentPricingTerminalHeader = () => {
  return (
    <div className="flex items-center gap-5 border-b border-white/12 px-3.75 py-2.5">
      <div className="flex items-center gap-1" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <Text textColor="gray-04" fontFamily="spaceMono">
        {`~ object-storage-pricing - bash - 80x24`}
      </Text>
    </div>
  );
};

export default TransparentPricingTerminalHeader;
