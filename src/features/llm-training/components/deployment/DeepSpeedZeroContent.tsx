import { Text } from "@/shared/ui-lib";

const DeepSpeedZeroContent = () => (
  <>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="mt-1 leading-7"
    >
      {"{"}
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&quot;train_batch_size&quot;:
      <Text as="span" variant="p" textColor="primary" className="mr-0 md:mr-0">
        64
      </Text>
      <Text as="span" variant="p" textColor="white" className="ml-0 md:ml-0">
        ,
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&quot;gradient_accumulation_steps&quot;:
      <Text as="span" variant="p" textColor="primary" className="mr-0 md:mr-0">
        4
      </Text>
      <Text as="span" variant="p" textColor="white" className="ml-0 md:ml-0">
        ,
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&quot;optimizer&quot;:
      <Text as="span" variant="p" textColor="white">
        {"{"}
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;:
      <Text
        as="span"
        variant="p"
        textColor="pulse-red"
        className="mr-0 md:mr-0"
      >
        &quot;AdamW&quot;
      </Text>
      <Text as="span" variant="p" textColor="white" className="ml-0 md:ml-0">
        ,
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&quot;params&quot;:
      <Text as="span" variant="p" textColor="white">
        {" { "}
      </Text>
      <Text as="span" variant="p" textColor="yellow" className="mr-0 md:mr-0">
        &quot;lr&quot;
      </Text>
      :
      <Text as="span" variant="p" textColor="primary" className="mr-0 md:mr-0">
        2e-5,
      </Text>
      <Text as="span" variant="p" textColor="yellow" className="mr-0 md:mr-0">
        &quot;weight_decay&quot;
      </Text>
      :
      <Text as="span" variant="p" textColor="primary">
        0.01
      </Text>
      <Text as="span" variant="p" textColor="white" className="ml-0 md:ml-0">
        {"}"}
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;{"}"},
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&quot;zero_optimization&quot;:
      <Text as="span" variant="p" textColor="white">
        {"{"}
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&quot;stage&quot;:
      <Text as="span" variant="p" textColor="primary" className="mr-0 md:mr-0">
        3
      </Text>
      <Text as="span" variant="p" textColor="white" className="ml-0 md:ml-0">
        ,
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&quot;offload_optimizer&quot;:
      <Text as="span" variant="p" textColor="white">
        {"{"}
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;device&quot;:
      <Text
        as="span"
        variant="p"
        textColor="pulse-red"
        className="mr-0 md:mr-0"
      >
        &quot;cpu&quot;
      </Text>
      <Text as="span" variant="p" textColor="white" className="ml-0 md:ml-0">
        ,
      </Text>
      &nbsp;pin_memory:&nbsp;
      <Text as="span" variant="p" textColor="primary" className="ml-0 md:ml-0">
        true
      </Text>
    </Text>

    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;{"}"},
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&quot;overlap_comm&quot;:
      <Text as="span" variant="p" textColor="primary" className="mr-0 md:mr-0">
        true
      </Text>
      <Text as="span" variant="p" textColor="white" className="ml-0 md:ml-0">
        ,
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&quot;contiguous_gradients&quot;:
      <Text as="span" variant="p" textColor="primary" className="mr-0 md:mr-0">
        true
      </Text>
      <Text as="span" variant="p" textColor="white" className="ml-0 md:ml-0">
        ,
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;&quot;reduce_bucket_size&quot;:
      <Text as="span" variant="p" textColor="white" className="mr-0 md:mr-0">
        5e8
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;{"}"},
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="yellow"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&quot;fp16&quot;:
      <Text as="span" variant="p" textColor="white">
        {"{"}
      </Text>
      <Text as="span" variant="p" textColor="yellow">
        &quot;enabled&quot;:
      </Text>
      <Text as="span" variant="p" textColor="primary" className="mx-0 md:mx-0">
        true
      </Text>
      <Text as="span" variant="p" textColor="white" className="ml-0 md:ml-0">
        ,
      </Text>
      <Text as="span" variant="p" textColor="yellow">
        &quot;loss_scale&quot;:
      </Text>
      <Text as="span" variant="p" textColor="primary">
        0
      </Text>
      <Text as="span" variant="p" textColor="white" className="ml-0 md:ml-0">
        {"}"}
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      {"}"}
    </Text>
  </>
);

export default DeepSpeedZeroContent;
