import { Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import type { PurposeFlowNode } from "../../types/infrastructure-section.types";

type PurposeControlPlaneBlockProps = {
  node: PurposeFlowNode;
  className?: string;
};

const ControlPlaneBlock = ({
  node,
  className,
}: PurposeControlPlaneBlockProps) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-black items-center rounded-lg p-5 md:px-30",
        className,
      )}
    >
      <Text as="h6" textColor="gray-03">
        {node.subtitle}
      </Text>
      <Text
        as="h4"
        weight="semibold"
        textColor="white"
        className="text-[18px] md:text-[22px] mt-1.25"
      >
        {node.title}
      </Text>
      <Text textColor="primary" className="mt-1.25">
        {node.footer}
      </Text>
    </div>
  );
};

export default ControlPlaneBlock;
