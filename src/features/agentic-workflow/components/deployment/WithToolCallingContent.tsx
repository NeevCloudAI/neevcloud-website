import { Text } from "@/shared/ui-lib";

const WithToolCallingContent = () => (
  <>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="mt-1 leading-7"
    >
      from
      <Text as="span" variant="h6" textColor="white">
        neevcloud.agents
      </Text>
      import
      <Text as="span" variant="h6" textColor="white">
        Agent, tool
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-75"
      className="mt-4 md:mt-6 leading-7"
    >
      @tool
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      def search_web(query: str) -&gt; str:
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-75"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&quot;&quot;&quot;Search the web for current information.&quot;&quot;&quot;
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;...
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-75"
      className="mt-4 md:mt-6 leading-7"
    >
      @tool
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      def query_database(sql: str) -&gt; list:
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-75"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&quot;&quot;&quot;Execute SQL against connected data sources.&quot;&quot;&quot;
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;...
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="mt-4 md:mt-6 leading-7"
    >
      agent = Agent(
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;model=
      <Text as="span" variant="h6" textColor="red-50">
        &quot;kimi-k2-instruct&quot;
      </Text>
      ,
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;tools=[search_web, query_database],
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;api_key=
      <Text as="span" variant="h6" textColor="red-50">
        &quot;nc-...&quot;
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
      className="mt-4 md:mt-6 leading-7"
    >
      response = agent.run(
      <Text as="span" variant="h6" textColor="red-50">
        &quot;Research competitors and summarize findings&quot;
      </Text>
      )
    </Text>
  </>
);

export default WithToolCallingContent;
