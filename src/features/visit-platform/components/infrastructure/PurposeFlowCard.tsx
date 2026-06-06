import { Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import type { PurposeFlowNode } from "../../types/infrastructure-section.types";

type PurposeFlowCardProps = {
  node: PurposeFlowNode;
  className?: string;
};

const PurposeFlowCard = ({ node, className }: PurposeFlowCardProps) => {
  const isNetwork = node.id === "private-network";

  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-lg py-5",
        isNetwork ? "px-12.5" : "px-15.5",
        className,
      )}
    >
      {node.subtitle && !node.badge && (
        <Text as="h6" textColor="gray-90">
          {node.subtitle}
        </Text>
      )}
      {node.badge && (
        <Text
          as="small"
          textColor="white"
          className="bg-primary rounded-full px-2.5 py-0.75"
        >
          {node.badge}
        </Text>
      )}
      <Text
        as="h4"
        weight="semibold"
        className="text-[18px] md:text-[22px] mt-2.5"
      >
        {node.title}
      </Text>
      {node.subtitle && node.badge && (
        <Text as="h6" textColor="gray-85" className="mt-1.25">
          {node.subtitle}
        </Text>
      )}
      {node.footer && !node.badge && (
        <Text textColor="green-10" className="mt-1.25">
          {node.footer}
        </Text>
      )}
    </div>
  );
};

export default PurposeFlowCard;
