import { INSTANCE_STAT_SEPARATOR } from "@/features/gpu/data/private-network-section-data";
import type { ComputeInstance } from "@/features/gpu/data/private-network-section-types";
import { Text } from "@/shared/ui-lib";
import { ComputePill } from "@/features/gpu/components/private-network/flow-band";

type ComputeSpecsProps = {
  specs: string[];
};

function ComputeSpecs({ specs }: ComputeSpecsProps) {
  return (
    <div className="flex items-center gap-2">
      {specs.map((spec, index) => (
        <div key={spec} className="flex items-center gap-2">
          <Text as="h6" textColor="gray-60">
            {spec}
          </Text>
          {index < specs.length - 1 && (
            <Text as="h6" textColor="gray-60">
              {INSTANCE_STAT_SEPARATOR}
            </Text>
          )}
        </div>
      ))}
    </div>
  );
}

export function ComputeInstanceCard({
  typeLabel,
  variant,
  name,
  specs,
  transferHint,
}: ComputeInstance) {
  return (
    <div className="flex-1 space-y-3 rounded-xl bg-gray-100 p-4 md:p-8">
      <div className="flex items-center gap-4">
        <ComputePill label={typeLabel} variant={variant} />
        <Text as="h4" weight="semibold" textColor="white">
          {name}
        </Text>
      </div>
      <ComputeSpecs specs={specs} />
      <Text as="small" textColor="primary-60">
        {transferHint}
      </Text>
    </div>
  );
}
