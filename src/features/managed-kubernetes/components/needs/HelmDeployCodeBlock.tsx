import NeedsCodeBlockWrapper from "./NeedsCodeBlockWrapper";
import { Text } from "@/shared/ui-lib";

const HelmDeployCodeBlock = () => {
  return (
    <NeedsCodeBlockWrapper>
      <Text textColor="primary" fontFamily="spaceMono">
        helm
        <Text as="span" variant="p" textColor="white" fontFamily="spaceMono">
          install vllm neevcloud/vllm \
        </Text>
      </Text>
      <Text textColor="primary" fontFamily="spaceMono">
        &nbsp;&nbsp; --set
        <Text as="span" variant="p" textColor="white" fontFamily="spaceMono">
          model=
        </Text>
        <Text
          as="span"
          variant="p"
          textColor="pulse-red"
          fontFamily="spaceMono"
        >
          llama-3-70b
        </Text>
      </Text>
    </NeedsCodeBlockWrapper>
  );
};

export default HelmDeployCodeBlock;
