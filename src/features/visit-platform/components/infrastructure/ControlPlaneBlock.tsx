import { Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import type { PurposeFlowNode } from "../../types/infrastructure-section.types";

type PurposeControlPlaneBlockProps = {
  node: PurposeFlowNode;
  className?: string;
};

const ControlPlaneBlock = ({ node, className }: PurposeControlPlaneBlockProps) => {
  return (
    <div className={cn(
      "flex flex-col bg-black items-center rounded-lg py-5",
      className
    )}>
      <Text as="h6" textColor="gray-85" className="tracking-widest uppercase px-30.5">
        {node.subtitle}
      </Text>
      <Text as="h4" weight="semibold" textColor="white" className="text-[22px] md:text-[25px] py-1.5">
        {node.title}
      </Text>
      <Text textColor="primary" >
        {node.footer}
      </Text>
    </div>
  );
};

export default ControlPlaneBlock;