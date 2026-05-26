import ComputePill from "@/features/cpu-cluster/components/private-network/ComputePill";
import ComputeSpecs from "@/features/cpu-cluster/components/private-network/ComputeSpecs";
import type { ComputeInstance } from "@/features/cpu-cluster/types/private-network-section.types";
import { Text } from "@/shared/ui-lib";

const ComputeInstanceCard = ({
  typeLabel,
  variant,
  name,
  specs,
  transferHint,
}: ComputeInstance) => {
  return (
    <article className="flex-1 rounded-xl bg-gray-90 p-4 md:px-7.5 md:py-8.5">
      <div className="flex items-center gap-2.5">
        <ComputePill label={typeLabel} variant={variant} />
        <Text as="h4" weight="semibold" textColor="white">
          {name}
        </Text>
      </div>
      <ComputeSpecs specs={specs} />
      <Text as="small" textColor="primary-60" className="mt-2.5">
        {transferHint}
      </Text>
    </article>
  );
};

export default ComputeInstanceCard;
