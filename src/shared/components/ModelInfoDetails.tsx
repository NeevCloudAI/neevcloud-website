"use client";

import { useId, useState } from "react";
import { Divider, Text } from "@/shared/ui-lib";

type ModelInfoDetailsProps = {
  capabilities: readonly string[];
  useCases: readonly string[];
};

const ModelInfoDetails = ({
  capabilities,
  useCases,
}: ModelInfoDetailsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  return (
    <div className="mt-5">
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="cursor-pointer text-left"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
      >
        <Text textColor="primary" variant="link" className="no-underline">
          {isExpanded ? "- Hide details" : "+ Show capabilities & use cases"}
        </Text>
      </button>

      {isExpanded ? (
        <div id={detailsId}>
          <Divider
            className="bg-gray-60 mt-7.5 mb-5"
            orientation="horizontal"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <div>
              <Text as="small" textColor="gray-85">
                Capabilities
              </Text>
              <div className="mt-3.75 space-y-1">
                {capabilities.map((item) => (
                  <Text as="small" textColor="black" key={item}>
                    • {item}
                  </Text>
                ))}
              </div>
            </div>

            <div>
              <Text as="small" textColor="gray-85">
                Use Cases
              </Text>
              <div className="mt-3.75 space-y-1">
                {useCases.map((item) => (
                  <Text as="small" textColor="black" key={item}>
                    • {item}
                  </Text>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ModelInfoDetails;
