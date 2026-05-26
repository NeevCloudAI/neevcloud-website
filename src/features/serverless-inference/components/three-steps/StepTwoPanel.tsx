import { Text } from "@/shared/ui-lib";
import { STEP_TWO_TERMINAL_PATH } from "@/features/serverless-inference/data/three-steps-section.data";

const StepTwoPanel = () => {
  return (
    <div className="bg-black rounded-md overflow-hidden w-full shadow-sm h-125">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
        <Text as="small" align="right" textColor="gray-75" className="ml-auto">
          {STEP_TWO_TERMINAL_PATH}
        </Text>
      </div>

      <div className="px-2 md:px-8.75 py-2 md:py-11.5 font-mono">
        <Text fontFamily="spaceMono" textColor="gray-75">
          # Two-line integration
        </Text>
        <pre>
          <code>
            <Text
              fontFamily="spaceMono"
              textColor="red-50"
              className="leading-7"
            >
              from
              <Text
                as="span"
                textColor="white"
                variant="p"
                className="mx-0 ml-1 md:mx-0 md:ml-1.5"
              >
                NeevCloud
              </Text>
              <Text
                as="span"
                variant="p"
                className="mx-0 ml-1 md:mx-0 md:ml-1.5"
              >
                import
              </Text>
              <Text
                as="span"
                textColor="white"
                variant="p"
                className="mx-0 ml-1 md:mx-0 md:ml-1.5"
              >
                NeevCloud
              </Text>
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="white"
              className="leading-6"
            >
              client =
              <Text
                as="span"
                textColor="green-10"
                variant="p"
                className="mx-0 ml-1 md:mx-0 md:ml-1.5 leading-7"
              >
                NeevCloud
              </Text>
              <Text as="span" variant="p" className="mx-0 md:mx-0">
                {`( api_key="sk-neev-...",`}
              </Text>
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="white"
              className="leading-7"
            >
              {`base_url="`}
              <Text
                as="span"
                textColor="blue-40"
                variant="p"
                className="mx-0 md:mx-0"
              >
                https://api.neevcloud.com/v1
              </Text>
              <Text as="span" variant="p" className="mx-0 md:mx-0">
                {`")`}
              </Text>
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="white"
              className="leading-7"
            >
              {`response = client.chat.completion.`}
              <Text
                as="span"
                textColor="green-10"
                variant="p"
                className="mx-0 md:mx-0"
              >
                create
              </Text>
              <Text as="span" variant="p" className="mx-0 md:mx-0">
                {`(`}
              </Text>
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="white"
              className="leading-7"
            >
              &nbsp; {`model=`}
              <Text
                as="span"
                textColor="primary"
                variant="p"
                className="mx-0 md:mx-0"
              >
                {`"meta-llama-3.1-70b-instruct"`}
              </Text>
              <Text as="span" variant="p" className="mx-0 md:mx-0">
                {`,`}
              </Text>
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="white"
              className="leading-7"
            >
              &nbsp; {`messages=[{ `}
              <Text
                as="span"
                variant="p"
                textColor="primary"
                className="mx-0 md:mx-0"
              >
                {`"role"`}
              </Text>
              <Text
                as="span"
                variant="p"
                textColor="white"
                className="mx-0 md:mx-0"
              >
                {`:`}
              </Text>
              <Text
                as="span"
                variant="p"
                textColor="primary"
                className="mr-0 md:mr-0"
              >
                {`"user"`}
              </Text>
              <Text
                as="span"
                variant="p"
                textColor="white"
                className="mx-0 md:mx-0"
              >
                {`,`}
              </Text>
              <Text
                as="span"
                variant="p"
                textColor="primary"
                className="mr-0 md:mr-0"
              >
                {`"content"`}
              </Text>
              <Text
                as="span"
                variant="p"
                textColor="white"
                className="mx-0 md:mx-0"
              >
                {`,`}
              </Text>
              <Text
                as="span"
                variant="p"
                textColor="primary"
                className="mr-0 md:mr-0"
              >
                {`"Explain`}
              </Text>
            </Text>
            <Text textColor="primary" className="mx-0 md:mx-0 leading-7">
              {`serverless inference."`}
              <Text as="span" variant="p" textColor="white">
                {`}] )`}
              </Text>
            </Text>
            <Text
              as="span"
              textColor="green-10"
              variant="p"
              className="mx-0 md:mx-0 leading-7"
            >
              Print
              <Text
                as="span"
                variant="p"
                fontFamily="spaceMono"
                textColor="white"
                className="mx-0 md:mx-0"
              >
                (response.choices[0].message.content)
              </Text>
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="gray-75"
              className="leading-7"
            >
              # ✓ 200 OK · 412ms · 30 tokens # Your existing OpenAI code just
              works.
            </Text>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default StepTwoPanel;
