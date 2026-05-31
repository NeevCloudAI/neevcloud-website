import { Text } from "@/shared/ui-lib";

const HuggingFaceLoraContent = () => (
  <>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      from
      <Text as="span" variant="p" textColor="white">
        transformers
      </Text>
      import
      <Text as="span" variant="p" textColor="white">
        AutoModelForCausalLM, AutoTokenizer
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      from
      <Text as="span" variant="p" textColor="white">
        peft
      </Text>
      import
      <Text as="span" variant="p" textColor="white">
        LoraConfig, get_peft_model, prepare_model_for_kbit_training
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      from
      <Text as="span" variant="p" textColor="white">
        datasets
      </Text>
      import
      <Text as="span" variant="p" textColor="white">
        load_dataset
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-75"
      className="mt-4 md:mt-6 leading-7"
    >
      # Load base model
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      model = AutoModelForCausalLM.from_pretrained(
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;
      <Text as="span" variant="p" textColor="red-50" className="mr-0 md:mr-0">
        &quot;meta-llama/Llama-3.1-70b&quot;
      </Text>
      ,
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;load_in_4bit=
      <Text as="span" variant="p" textColor="primary" className="mx-0 md:mx-0">
        True
      </Text>
      ,
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;device_map=
      <Text as="span" variant="p" textColor="red-50" className="mx-0 md:mx-0">
        &quot;auto&quot;
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      )
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      model = prepare_model_for_kbit_training(model)
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-75"
      className="mt-4 md:mt-6 leading-7"
    >
      # Configure LoRA
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      lora_config = LoraConfig(
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;r=
      <Text as="span" variant="p" textColor="primary" className="mx-0 md:mx-0">
        16
      </Text>
      , lora_alpha=
      <Text as="span" variant="p" textColor="primary" className="mx-0 md:mx-0">
        32
      </Text>
      ,
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;target_modules=[
      <Text as="span" variant="p" textColor="red-50">
        &quot;q_proj&quot;
      </Text>
      ,
      <Text as="span" variant="p" textColor="red-50" className="mr-0 md:mr-0">
        &quot;v_proj&quot;
      </Text>
      ],
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;lora_dropout=
      <Text as="span" variant="p" textColor="primary" className="mx-0 md:mx-0">
        0.05
      </Text>
      , bias=
      <Text as="span" variant="p" textColor="red-50" className="mx-0 md:mx-0">
        &quot;none&quot;
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      )
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      model = get_peft_model(model, lora_config)
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-75"
      className="mt-4 md:mt-6 leading-7"
    >
      # Load dataset · checkpoints auto-saved
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      dataset = load_dataset(
      <Text as="span" variant="p" textColor="red-50">
        &quot;json&quot;
      </Text>
      , data_files=
      <Text as="span" variant="p" textColor="red-50">
        &quot;s3://neevcloud-storage/train.jsonl&quot;
      </Text>
      )
    </Text>
  </>
);

export default HuggingFaceLoraContent;
