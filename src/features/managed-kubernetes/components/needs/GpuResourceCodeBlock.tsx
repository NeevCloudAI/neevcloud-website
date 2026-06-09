import NeedsCodeBlockWrapper from "./NeedsCodeBlockWrapper";
import { Text } from "@/shared/ui-lib";

const GpuResourceCodeBlock = () => {
  return (
    <NeedsCodeBlockWrapper>
      <Text textColor="white" fontFamily="spaceMono" className="leading-5">
        resources:
      </Text>
      <Text textColor="white" fontFamily="spaceMono" className="leading-5">
        &nbsp;&nbsp;limits:
      </Text>
      <Text textColor="primary" fontFamily="spaceMono" className="leading-5">
        &nbsp;&nbsp;&nbsp;nvidia.com/gpu:
        <Text as="span" variant="p" textColor="white" fontFamily="spaceMono">
          1
          <Text
            as="span"
            variant="p"
            textColor="gray-75"
            fontFamily="spaceMono"
          >
            # Just works
          </Text>
        </Text>
      </Text>
    </NeedsCodeBlockWrapper>
  );
};

export default GpuResourceCodeBlock;
