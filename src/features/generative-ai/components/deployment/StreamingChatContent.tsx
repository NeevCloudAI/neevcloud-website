import { Text } from "@/shared/ui-lib";

const StreamingChatContent = () => (
  <>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      stream = client.chat.completions.create(
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;model=
      <Text as="span" variant="h6" textColor="red-50">
        &apos;llama-3.1-70b-instruct&apos;
      </Text>
      ,
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;messages=[
      {`{`}
      <Text as="span" variant="h6" textColor="red-50" className="mx-0 md:mx-0">
        {`'role'`}
      </Text>
      :
      <Text as="span" variant="h6" textColor="red-50" className="mr-0 md:mr-0">
        {`'user'`}
      </Text>
      ,
      <Text as="span" variant="h6" textColor="red-50" className="mr-0 md:mr-0">
        {`'content'`}
      </Text>
      :
      <Text as="span" variant="h6" textColor="red-50" className="mr-0 md:mr-0">
        {`'Explain quantum computing'`}
      </Text>
      {`}],`}
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;stream=
      <Text as="span" variant="h6" textColor="primary">
        True
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
      textColor="gray-75"
      className="mt-4 md:mt-6 leading-7"
    >
      # Stream tokens to user
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      for
      <Text as="span" variant="h6" textColor="white">
        chunk
      </Text>
      in
      <Text as="span" variant="h6" textColor="white">
        stream:
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp; if
      <Text as="span" variant="h6" textColor="white" className="mx-0 md:mx-0">
        chunk.choices[
      </Text>
      0
      <Text as="span" variant="h6" textColor="white" className="mx-0 md:mx-0">
        ].delta.content:
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;print(chunk.choices[
      <Text as="span" variant="h6" textColor="primary" className="mx-0 md:mx-0">
        0
      </Text>
      ].delta.content, end=
      <Text as="span" variant="h6" textColor="primary" className="mx-0 md:mx-0">
        &apos;&apos;
      </Text>
      , flush=
      <Text as="span" variant="h6" textColor="primary" className="mx-0 md:mx-0">
        True
      </Text>
      )
    </Text>
  </>
);

export default StreamingChatContent;
