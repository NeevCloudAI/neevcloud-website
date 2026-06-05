import { Text } from "@/shared/ui-lib";

const StatePersistenceContent = () => (
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
        Agent
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
        neevcloud.state
      </Text>
      import
      <Text as="span" variant="h6" textColor="white">
        RedisCheckpoint
      </Text>
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
      &nbsp;&nbsp;checkpoint=RedisCheckpoint(
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;url=
      <Text as="span" variant="h6" textColor="red-50">
        &quot;redis://neevcloud-state:6379&quot;
      </Text>
      ,
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;&nbsp;&nbsp;namespace=
      <Text as="span" variant="h6" textColor="red-50">
        &quot;research-agent&quot;
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;)
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
      # Resume long-running workflow after restart
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      state = agent.load_checkpoint(session_id=
      <Text as="span" variant="h6" textColor="red-50">
        &quot;sess_abc123&quot;
      </Text>
      )
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      response = agent.run(
      <Text as="span" variant="h6" textColor="red-50">
        &quot;Continue analysis&quot;
      </Text>
      , state=state)
    </Text>
  </>
);

export default StatePersistenceContent;
