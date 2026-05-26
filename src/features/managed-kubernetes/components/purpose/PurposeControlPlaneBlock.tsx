import { Text } from "@/shared/ui-lib";
import type { PurposeFlowNode } from "@/features/managed-kubernetes/types/purpose-section.types";

type PurposeControlPlaneBlockProps = {
  node: PurposeFlowNode;
};

const PurposeControlPlaneBlock = ({ node }: PurposeControlPlaneBlockProps) => {
  return (
    <div className="z-2 w-fit flex flex-col items-center gap-1.25 bg-black rounded-lg p-5 md:px-24">
      <Text as="h4" weight="semibold" textColor="white">
        {node.title}
      </Text>
      <Text as="h6" textColor="gray-85">
        {node.subtitle}
      </Text>
      <Text textColor="primary">{node.footer}</Text>
    </div>
  );
};

export default PurposeControlPlaneBlock;
