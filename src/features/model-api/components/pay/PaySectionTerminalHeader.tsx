import { Text } from "@/shared/ui-lib";

const PaySectionTerminalHeader = () => {
  return (
    <div className="flex items-center gap-2 p-3.75 border-b border-black-5">
      <div className="flex items-center gap-1.25" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      <Text
        as="h6"
        textColor="gray-75"
        fontFamily="spaceMono"
        className="ml-5"
      >
        {`~ model-api-pricing - bash - 80x24`}
      </Text>
    </div>
  );
};

export default PaySectionTerminalHeader;
