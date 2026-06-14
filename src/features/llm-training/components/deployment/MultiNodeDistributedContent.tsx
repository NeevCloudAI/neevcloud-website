import { Text } from "@/shared/ui-lib";

const MultiNodeDistributedContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="gray-04" className="mt-1 leading-7">
      # Create 4-node cluster (32x H100 GPUs)
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      neevcloud
      <Text as="span" variant="p" textColor="white">
        cluster create fine-tune-cluster
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --nodes
      <Text as="span" variant="p" textColor="white">
        4
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --gpus-per-node
      <Text as="span" variant="p" textColor="white">
        8
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --gpu-type
      <Text as="span" variant="p" textColor="white">
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
      &nbsp; --framework
      <Text as="span" variant="p" textColor="white">
        deepspeed
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-04"
      className="mt-4 md:mt-6 leading-7"
    >
      # Submit distributed training job
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      neevcloud
      <Text as="span" variant="p" textColor="white">
        jobs submit
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --cluster
      <Text as="span" variant="p" textColor="white">
        fine-tune-cluster
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --script
      <Text as="span" variant="p" textColor="white">
        train.py
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --config
      <Text as="span" variant="p" textColor="white">
        deepspeed_config.json
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --checkpoint-interval
      <Text as="span" variant="p" textColor="white">
        100
      </Text>
    </Text>
  </>
);

export default MultiNodeDistributedContent;
