import { Text } from "@/shared/ui-lib";
import type { PathsStepPanel } from "../../types/three-paths-section.types";

type PathsStepPanelProps = {
  panel: PathsStepPanel;
};

const PathsStepPanel = ({ panel }: PathsStepPanelProps) => {
  return (
    <div className="flex h-full w-full flex-col rounded-md bg-primary-20 p-4 md:p-6.25">
      <Text as="h5" weight="semibold">
        {panel.listHeading}
      </Text>

      <ul className="mt-4 flex list-none flex-col gap-2.5 md:mt-7.5">
        {panel.items.map((item) => (
          <li key={item.type === "simple" ? item.text : item.industry}>
            {item.type === "simple" ? (
              <div className="flex gap-2.5">
                <Text as="h6" textColor="primary">
                  •
                </Text>
                <Text as="h6">{item.text}</Text>
              </div>
            ) : (
              <div className="flex gap-2.5">
                <Text as="h6" textColor="primary">
                  •
                </Text>
                <Text as="h6">
                  <Text
                    as="span"
                    variant="h6"
                    weight="semibold"
                    className="ml-0 md:ml-0"
                  >
                    {item.industry}
                  </Text>
                  {"- "}
                  {item.detail}
                </Text>
              </div>
            )}
          </li>
        ))}
      </ul>

      {panel.highlightHeading && panel.highlightText ? (
        <div className="mt-4 rounded-md bg-primary-30 p-4 md:mt-7.5 md:p-5">
          <Text as="h5" weight="semibold">
            {panel.highlightHeading}
          </Text>
          <Text fontFamily="spaceMono" textColor="gray-90" className="mt-1.25">
            {panel.highlightText}
          </Text>
        </div>
      ) : null}
    </div>
  );
};

export default PathsStepPanel;
