import { Text } from "@/shared/ui-lib";

const WorkloadCodeCardHeader = () => {
  return (
    <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-black-5">
      <div className="flex items-center gap-1" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
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

export default WorkloadCodeCardHeader;
