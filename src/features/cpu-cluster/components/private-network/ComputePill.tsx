import { Text } from "@/shared/ui-lib";
import { PILL_VARIANT_STYLES } from "../../constants/private-network-section.constants";
import type { ComputePillVariant } from "../../types/private-network-section.types";

type ComputePillProps = {
  label: string;
  variant: ComputePillVariant;
};

const ComputePill = ({ label, variant }: ComputePillProps) => {
  return (
    <Text
      as="small"
      className={`w-fit rounded-full px-2.5 py-1 ${PILL_VARIANT_STYLES[variant]}`}
    >
      {label}
    </Text>
  );
};

export default ComputePill;
