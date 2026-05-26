import { Text } from "@/shared/ui-lib";

const DeployStorageCustomTerminalHeader = () => {
  return (
    <div className="flex items-center justify-between gap-2 p-2.5 border-b border-black-5">
      <div className="flex items-center gap-2">
        <span
          className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"
          aria-hidden="true"
        />
        <span
          className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"
          aria-hidden="true"
        />
        <span
          className="w-2.5 h-2.5 rounded-full bg-[#28c840]"
          aria-hidden="true"
        />
        <Text textColor="white" fontFamily="spaceMono" className="ml-4">
          Custom Capacity
        </Text>
      </div>
      <Text textColor="gray-75" fontFamily="spaceMono">
        ~/create.sh ·
        <Text as="span" variant="p" textColor="primary">
          ready to copy
        </Text>
      </Text>
    </div>
  );
};

export default DeployStorageCustomTerminalHeader;
