import { Text } from "@/shared/ui-lib";

const MultiStepPipelineContent = () => (
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
        Pipeline, Step
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="mt-4 md:mt-6 leading-7"
    >
      pipeline = Pipeline([
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;Step(
      <Text as="span" variant="h6" textColor="red-50">
        &quot;plan&quot;
      </Text>
      , agent=planner, prompt=
      <Text as="span" variant="h6" textColor="red-50">
        &quot;{"{"}task{"}"}&quot;
      </Text>
      ),
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;Step(
      <Text as="span" variant="h6" textColor="red-50">
        &quot;research&quot;
      </Text>
      , agent=researcher, depends_on=[
      <Text as="span" variant="h6" textColor="red-50">
        &quot;plan&quot;
      </Text>
      ]),
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      &nbsp;&nbsp;Step(
      <Text as="span" variant="h6" textColor="red-50">
        &quot;summarize&quot;
      </Text>
      , agent=writer, depends_on=[
      <Text as="span" variant="h6" textColor="red-50">
        &quot;research&quot;
      </Text>
      ]),
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="leading-7"
    >
      ])
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="white"
      as="h6"
      className="mt-4 md:mt-6 leading-7"
    >
      result = pipeline.execute(task=
      <Text as="span" variant="h6" textColor="red-50">
        &quot;Market analysis for Q2&quot;
      </Text>
      )
    </Text>
  </>
);

export default MultiStepPipelineContent;
