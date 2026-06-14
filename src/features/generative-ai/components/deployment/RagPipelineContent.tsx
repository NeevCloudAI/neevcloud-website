import { Text } from "@/shared/ui-lib";

const RagPipelineContent = () => (
  <>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      from
      <Text as="span" variant="h6" textColor="white">
        neevcloud
      </Text>
      import
      <Text as="span" variant="h6" textColor="white">
        NeevCloud
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      from
      <Text as="span" variant="h6" textColor="white">
        langchain.vectorstores
      </Text>
      import
      <Text as="span" variant="h6" textColor="white">
        Chroma
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      from
      <Text as="span" variant="h6" textColor="white">
        langchain.embeddings
      </Text>
      import
      <Text as="span" variant="h6" textColor="white">
        NeevCloudEmbeddings
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-04"
      className="mt-4 md:mt-6 leading-7"
    >
      # Initialize NeevCloud client
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      client = NeevCloud(api_key=
      <Text as="span" variant="h6" textColor="pulse-red">
        &apos;nc-...&apos;
      </Text>
      )
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-04"
      className="mt-4 md:mt-6 leading-7"
    >
      # Create embeddings endpoint
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      embeddings = NeevCloudEmbeddings(model=
      <Text as="span" variant="h6" textColor="pulse-red">
        &quot;text-embedding-3&quot;
      </Text>
      , api_key=
      <Text as="span" variant="h6" textColor="pulse-red">
        &apos;nc-...&apos;
      </Text>
      )
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-04"
      className="mt-4 md:mt-6 leading-7"
    >
      # Build vector store
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      vectorstore = Chroma.from_documents(documents=docs, embedding=embeddings)
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-04"
      className="mt-4 md:mt-6 leading-7"
    >
      # Query with LLM
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      retriever = vectorstore.as_retriever()
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      response = client.chat.completions.create(
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
        className="mx-0 md:mx-0"
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
      &nbsp;&nbsp;messages=[
      {`{`}
      <Text
        as="span"
        variant="h6"
        textColor="pulse-red"
        className="mx-0 md:mx-0"
      >
        {`'role'`}
      </Text>
      :
      <Text
        as="span"
        variant="h6"
        textColor="pulse-red"
        className="mr-0 md:mr-0"
      >
        {`'user'`}
      </Text>
      ,
      <Text
        as="span"
        variant="h6"
        textColor="pulse-red"
        className="mr-0 md:mr-0"
      >
        {`'content'`}
      </Text>
      :
      <Text
        as="span"
        variant="h6"
        textColor="pulse-red"
        className="mr-0 md:mr-0"
      >
        {`f'Answer based on: {retriever.get_relevant_documents(query)}'`}
      </Text>
      {`}]`}
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

export default RagPipelineContent;
