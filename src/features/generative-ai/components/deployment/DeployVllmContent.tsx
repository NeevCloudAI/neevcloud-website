import { Text } from "@/shared/ui-lib";

const DeployVllmContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1 leading-7">
      # Launch production LLM endpoint
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      neevcloud
      <Text as="span" variant="h6" textColor="white">
        deploy
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --template
      <Text as="span" variant="h6" textColor="white">
        vllm
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --model
      <Text as="span" variant="h6" textColor="white">
        meta-llama/Llama-3.1-70b-instruct
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --gpu
      <Text as="span" variant="h6" textColor="white">
        h100
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --replicas
      <Text as="span" variant="h6" textColor="red-50">
        2
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --autoscale-max
      <Text as="span" variant="h6" textColor="red-50">
        8
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-75"
      className="mt-4 md:mt-6 leading-7"
    >
      # Returns endpoint URL immediately
    </Text>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1 leading-7">
      # https://your-model.neevcloud.ai
    </Text>
  </>
);

export default DeployVllmContent;
