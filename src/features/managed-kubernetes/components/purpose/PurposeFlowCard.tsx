import { Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import type { PurposeFlowNode } from "../../types/purpose-section.types";

type PurposeFlowCardProps = {
  node: PurposeFlowNode;
  className?: string;
};

const PurposeFlowCard = ({ node, className }: PurposeFlowCardProps) => {
  return (
    <div
      className={cn(
        "z-3 flex flex-col items-center bg-white rounded-lg p-5 md:px-24",
        className,
      )}
    >
      {node.badge && (
        <Text
          as="small"
          textColor="white"
          className="bg-primary rounded-full px-2.5 py-0.75 mb-2.5"
        >
          {node.badge}
        </Text>
      )}
      <Text as="h4" weight="semibold" className="mb-1.25">
        {node.title}
      </Text>
      <Text as="h6" textColor="gray-85">
        {node.subtitle}
      </Text>

      {node.details && (
        <div className="flex flex-col items-center">
          {node.details.map((detail) => (
            <Text as="h6" textColor="gray-85" key={detail}>
              {detail}
            </Text>
          ))}
        </div>
      )}
    </div>
  );
};

export default PurposeFlowCard;
