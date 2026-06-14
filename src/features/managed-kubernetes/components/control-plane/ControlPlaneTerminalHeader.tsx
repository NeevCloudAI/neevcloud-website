import { Text } from "@/shared/ui-lib";

const ControlPlaneTerminalHeader = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-black/82">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <Text textColor="gray-80" fontFamily="spaceMono" className="ml-4.5">
        {`~ nks-pricing - bash - 80×24`}
      </Text>
    </div>
  );
};

export default ControlPlaneTerminalHeader;
