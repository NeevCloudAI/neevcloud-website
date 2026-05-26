import NeedsCodeBlockWrapper from "./NeedsCodeBlockWrapper";
import { Text } from "@/shared/ui-lib";

const HelmDeployCodeBlock = () => {
  return (
    <NeedsCodeBlockWrapper>
      <Text as="small" textColor="primary" fontFamily="spaceMono">
        helm
        <Text
          as="span"
          variant="small"
          textColor="white"
          fontFamily="spaceMono"
        >
          install vllm neevcloud/vllm \
        </Text>
      </Text>
      <Text as="small" textColor="primary" fontFamily="spaceMono">
        &nbsp;&nbsp; --set
        <Text
          as="span"
          variant="small"
          textColor="white"
          fontFamily="spaceMono"
        >
          model=
        </Text>
        <Text
          as="span"
          variant="small"
          textColor="red-50"
          fontFamily="spaceMono"
        >
          llama-3-70b
        </Text>
      </Text>
    </NeedsCodeBlockWrapper>
  );
};

export default HelmDeployCodeBlock;
