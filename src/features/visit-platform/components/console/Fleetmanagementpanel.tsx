import ConsoleMockupCard from "../console/Consolemockupcard";
import { FLEET_VOLUMES } from "../../data/console-section.data";
import { Text } from "@/shared/ui-lib";

/**
 * Right-panel mockup for the "Fleet Management" tab.
 * Shows volumes list with type, attachment info, and size.
 */
const FleetManagementPanel = () => {
  return (
    <ConsoleMockupCard title="VOLUMES · 2.4 TB">
      <div className="flex flex-col divide-y divide-gray-100 mt-5 border-t border-gray-60">
        {FLEET_VOLUMES.map((vol, i) => (
          <div
            key={vol.name}
            className={`flex items-center justify-between px-6.25 py-3.75 ${
              i === 0
                ? "border-l-3 border-l-primary [background:linear-gradient(to_right,#e6f7f5,transparent)]"
                : ""
            } ${i < 4 - 1 ? "border-b border-b-gray-60" : ""}`}
          >
            <div>
              <Text as="h4" weight="semibold">
                {vol.name}{" "}
              </Text>
              <Text textColor="black-5" as="h6">
                {vol.type} · {vol.attached}
              </Text>
            </div>
            <Text as="h6" weight="semibold" textColor="primary-70">
              {vol.size}
            </Text>
          </div>
        ))}
      </div>
    </ConsoleMockupCard>
  );
};

export default FleetManagementPanel;
