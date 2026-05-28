import { Text } from "@/shared/ui-lib";

const DeployStorageCliCode = () => {
  return (
    <div className="px-4 md:px-7.5 py-2 md:py-10">
      <Text as="h6" fontFamily="spaceMono" textColor="gray-75">
        Provision additional NVMe storage when launching GPU instances or add
        capacity to running instances.
      </Text>

      <pre>
        <code>
          <Text textColor="white" className="mt-4.25">
            bash
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="gray-75"
            className="leading-6"
          >
            # Launch GPU with 500GB local NVMe
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            Neevcloud gpu create \
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            &nbsp; &nbsp; &nbsp; {`--gpu`}
            <Text as="span" textColor="red-50" variant="p">
              h100
            </Text>
            <Text as="span" variant="p" className="mx-0 md:mx-0">
              \
            </Text>
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            &nbsp; &nbsp; &nbsp; {`- - local storage`}
            <Text as="span" textColor="primary" variant="p">
              500gb
            </Text>
          </Text>
          <Text
            fontFamily="spaceMono"
            textColor="gray-75"
            className="leading-6"
          >
            # Add storage to running instance
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            neevcloud storage attach \
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            &nbsp; &nbsp; &nbsp; {`- instance - id `}
            <Text
              as="span"
              textColor="red-50"
              variant="p"
              className="mr-0 md:mr-0"
            >
              gpu-abc123
            </Text>
            \
          </Text>
          <Text fontFamily="spaceMono" textColor="white" className="leading-6">
            &nbsp; &nbsp; &nbsp; {`- - local - storage`}
            <Text as="span" textColor="primary" variant="p">
              lib
            </Text>
          </Text>
        </code>
      </pre>
    </div>
  );
};

export default DeployStorageCliCode;
