import NeedsCodeBlockWrapper from "./NeedsCodeBlockWrapper";
import { Text } from "@/shared/ui-lib";

const GpuResourceCodeBlock = () => {
  return (
    <NeedsCodeBlockWrapper>
      <Text as="small" textColor="white" fontFamily="spaceMono">
        resources:
      </Text>
      <Text as="small" textColor="white" fontFamily="spaceMono">
        &nbsp;&nbsp;limits:
      </Text>
      <Text as="small" textColor="primary" fontFamily="spaceMono">
        &nbsp;&nbsp;&nbsp;nvidia.com/gpu:
        <Text
          as="span"
          variant="small"
          textColor="white"
          fontFamily="spaceMono"
        >
          1
          <Text
            as="span"
            variant="small"
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
