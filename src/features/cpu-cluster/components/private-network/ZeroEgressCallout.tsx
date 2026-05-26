import { Text } from "@/shared/ui-lib";
import {
  ZERO_EGRESS_DESCRIPTION,
  ZERO_EGRESS_DESCRIPTION_LINES,
  ZERO_EGRESS_PRICE,
  ZERO_EGRESS_TITLE,
} from "@/features/cpu-cluster/constants/private-network-section.constants";

const ZeroEgressCallout = () => {
  return (
    <div className="flex justify-center mt-4 md:mt-12.5">
      <div className="flex flex-col md:flex-row items-stretch p-4 md:p-7.5 bg-primary w-fit gap-4 rounded-lg">
        <Text
          as="h3"
          weight="semibold"
          textColor="tertiary"
          className="text-[40px] bg-gray-10 rounded-md w-fit h-fit leading-none p-4 py-5"
          aria-hidden="true"
        >
          {ZERO_EGRESS_PRICE}
        </Text>
        <div className="flex flex-col text-white">
          <Text as="h3" weight="semibold" className="mb-1.25">
            {ZERO_EGRESS_TITLE}
          </Text>
          <Text className="block md:hidden">{ZERO_EGRESS_DESCRIPTION}</Text>
          <Text className="hidden md:block">
            {ZERO_EGRESS_DESCRIPTION_LINES[0]}
          </Text>
          <Text className="hidden md:block">
            {ZERO_EGRESS_DESCRIPTION_LINES[1]}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ZeroEgressCallout;
