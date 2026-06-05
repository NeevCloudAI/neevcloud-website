import {
  BILLING_ROWS,
  BILLING_TOTAL,
  BILLING_SUBTITLE,
} from "../../data/console-section.data";
import { Text } from "@/shared/ui-lib";

/**
 * Right-panel mockup for the "State Persistence" tab.
 * Shows December usage billing breakdown with total.
 * Note: No ConsoleMockupCard wrapper — this card has its own distinct header style.
 */
const StatePersistencePanel = () => {
  return (
    <div className="max-w-2xl rounded-xl bg-white p-7.5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-4 border-b border-gray-60 pb-4">
        <Text as="h5" className="font-semibold uppercase">
          December usage
        </Text>
      <Text  textColor="gray-85">
          Billing period · May 1 to May 31
        </Text>
      </div>

      {/* Billing rows */}
      <div className="flex flex-col divide-y divide-gray-60">
        {BILLING_ROWS.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-3.5"
          >
            <Text as="h6" className="font-semibold">{row.label}</Text>
            <Text className="text-sm font-medium text-gray-90">
              {row.value}
            </Text>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-3 rounded-lg bg-primary/10 px-4 py-3 text-center border border-primary-70">
        <Text as="small" className="font-semibold uppercase tracking-widest mb-1">
          TOTAL
        </Text>
        <Text as="h4" className="font-semibold text-[22px] md:text-[24px]">{BILLING_TOTAL}</Text>
        <Text className="mt-0.5 md:text-[10px] text-8px" textColor="gray-85">{BILLING_SUBTITLE}</Text>
      </div>
    </div>
  );
};

export default StatePersistencePanel;
