import { Text } from "@/shared/ui-lib";

const BatchProcessingContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="gray-04" className="mt-1 leading-7">
      # Process multiple requests efficiently
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      batch_prompts = [
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;
      <Text
        as="span"
        variant="h6"
        textColor="pulse-red"
        className="mr-0 md:mr-0"
      >
        &quot;Summarize this article...&quot;
      </Text>
      ,
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;
      <Text
        as="span"
        variant="h6"
        textColor="pulse-red"
        className="mr-0 md:mr-0"
      >
        &quot;Generate product description...&quot;
      </Text>
      ,
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;
      <Text as="span" variant="h6" textColor="pulse-red">
        &quot;Translate to Spanish...&quot;
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      ]
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="mt-4 md:mt-6 leading-7"
    >
      responses = client.batch.create(
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;model=
      <Text
        as="span"
        variant="h6"
        textColor="pulse-red"
        className="mr-0 md:mr-0"
      >
        &apos;kimi-k2-instruct&apos;
      </Text>
      ,
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;requests=[
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;
      {`{`}
      <Text
        as="span"
        variant="h6"
        textColor="pulse-red"
        className="mx-0 md:mx-0"
      >
        {`'messages'`}
      </Text>
      {`: [{`}
      <Text
        as="span"
        variant="h6"
        textColor="pulse-red"
        className="mx-0 md:mx-0"
      >
        {`'role'`}
      </Text>
      {`: `}
      <Text
        as="span"
        variant="h6"
        textColor="pulse-red"
        className="mx-0 md:mx-0"
      >
        {`'user'`}
      </Text>
      {`, `}
      <Text
        as="span"
        variant="h6"
        textColor="pulse-red"
        className="mx-0 md:mx-0"
      >
        {`'content'`}
      </Text>
      {`: prompt}]}`}
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;for
      <Text as="span" variant="h6" textColor="white">
        prompt
      </Text>
      in
      <Text as="span" variant="h6" textColor="white">
        batch_prompts
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;]
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      )
    </Text>
  </>
);

export default BatchProcessingContent;
