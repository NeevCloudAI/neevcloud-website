import { Text } from "@/shared/ui-lib";

const VllmWorkloadContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1 leading-7">
      # Add NeevCloud Helm repo
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      helm
      <Text as="span" variant="p" textColor="white">
        repo add neevcloud
      </Text>
      <Text as="span" variant="p" textColor="red-50" className="ml-0 md:ml-0">
        https://charts.neevcloud.com
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      helm
      <Text as="span" variant="p" textColor="white">
        repo update
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-4 md:mt-8">
      # Install vLLM with Llama 3 70B
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      helm
      <Text as="span" variant="p" textColor="white">
        install llama-server neevcloud/vllm
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --set
      <Text as="span" variant="p" textColor="white" className="mr-0 md:mr-0">
        model=
      </Text>
      <Text as="span" variant="p" textColor="red-50" className="ml-0 md:ml-0">
        meta-llama/Llama-3-70b-instruct
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --set
      <Text as="span" variant="p" textColor="white">
        gpus=1
      </Text>
      \
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp; --set
      <Text as="span" variant="p" textColor="white" className="mr-0 md:mr-0">
        nodepool=
      </Text>
      <Text as="span" variant="p" textColor="red-50" className="ml-0 md:ml-0">
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
      &nbsp; --set
      <Text as="span" variant="p" textColor="white" className="mr-0 md:mr-0">
        replicas=
      </Text>
      2
    </Text>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-4 md:mt-6">
      # Service available at llama-server.default.svc.cluster.local:8000
    </Text>
  </>
);

export default VllmWorkloadContent;
