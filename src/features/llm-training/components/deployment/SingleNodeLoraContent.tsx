import { Text } from "@/shared/ui-lib";

const SingleNodeLoraContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="gray-04" className="mt-1 leading-7">
      # Launch H100 instance with fine-tuning template
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      neevcloud launch \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --gpu
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
      &nbsp; --gpus
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
      &nbsp; --template
      <Text as="span" variant="p" textColor="white">
        llama-finetune
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --dataset
      <Text as="span" variant="p" textColor="pulse-red">
        gs://my-bucket/training-data
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --output
      <Text as="span" variant="p" textColor="pulse-red">
        gs://my-bucket/checkpoints
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-04"
      className="mt-4 md:mt-6 leading-7"
    >
      # Instance starts with pre-configured environment
    </Text>
    <Text fontFamily="spaceMono" textColor="gray-04" className="mt-1 leading-7">
      # HuggingFace, DeepSpeed, Axolotl already installed
    </Text>
  </>
);

export default SingleNodeLoraContent;
