import { Text } from "@/shared/ui-lib";
import { INSTANCE_STAT_SEPARATOR } from "@/features/cpu-cluster/constants/private-network-section.constants";

type ComputeSpecsProps = {
  specs: string[];
};

const ComputeSpecs = ({ specs }: ComputeSpecsProps) => {
  return (
    <div className="flex items-center gap-2 mt-1">
      {specs.map((spec, index) => (
        <div key={spec} className="flex items-center gap-2">
          <Text as="h6" textColor="gray-60">
            {spec}
          </Text>
          {index < specs.length - 1 && (
            <Text as="h6" textColor="gray-60" aria-hidden="true">
              {INSTANCE_STAT_SEPARATOR}
            </Text>
          )}
        </div>
      ))}
    </div>
  );
};

export default ComputeSpecs;
