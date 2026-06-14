import { Text } from "@/shared/ui-lib";

const AxolotlYamlContent = () => (
  <>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="mt-1 leading-7"
    >
      base_model:
      <Text as="span" variant="p" textColor="white">
        meta-llama/Llama-3.1-70b
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      model_type:
      <Text as="span" variant="p" textColor="white">
        LlamaForCausalLM
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      tokenizer_type:
      <Text as="span" variant="p" textColor="white">
        AutoTokenizer
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      load_in_4bit:
      <Text as="span" variant="p" textColor="primary">
        true
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      adapter:
      <Text as="span" variant="p" textColor="white">
        lora
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      lora_r:
      <Text as="span" variant="p" textColor="primary">
        16
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      lora_alpha:
      <Text as="span" variant="p" textColor="primary">
        32
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      lora_dropout:
      <Text as="span" variant="p" textColor="primary">
        0.05
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      lora_target_modules:
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;-{" "}
      <Text as="span" variant="p" textColor="white">
        q_proj
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;-{" "}
      <Text as="span" variant="p" textColor="white">
        v_proj
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;-{" "}
      <Text as="span" variant="p" textColor="white">
        k_proj
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;-{" "}
      <Text as="span" variant="p" textColor="white">
        o_proj
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      datasets:
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;- path:
      <Text as="span" variant="p" textColor="pulse-red">
        s3://neevcloud-storage/instruction-data.jsonl
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;type:
      <Text as="span" variant="p" textColor="white">
        alpaca
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      num_epochs:
      <Text as="span" variant="p" textColor="primary">
        3
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      micro_batch_size:
      <Text as="span" variant="p" textColor="primary">
        4
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      gradient_accumulation_steps:
      <Text as="span" variant="p" textColor="primary">
        4
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      learning_rate:
      <Text as="span" variant="p" textColor="primary">
        0.0002
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      output_dir:
      <Text as="span" variant="p" textColor="pulse-red">
        s3://neevcloud-storage/checkpoints
      </Text>
    </Text>
  </>
);

export default AxolotlYamlContent;
