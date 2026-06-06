import { Text } from "@/shared/ui-lib";
import {
  BILLING_ROWS,
  BILLING_SUBTITLE,
  BILLING_TOTAL,
} from "../data/console-section.data";

const StatePersistencePanel = () => {
  return (
    <div className="max-w-2xl rounded-xl bg-white p-7.5 shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-60 pb-4">
        <Text as="h5" className="font-semibold uppercase">
          December usage
        </Text>
        <Text textColor="gray-85">Billing period · May 1 to May 31</Text>
      </div>

      <div className="flex flex-col">
        {BILLING_ROWS.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-3.5 border-b border-gray-60"
          >
            <Text as="h6" className="font-semibold">
              {row.label}
            </Text>
            <Text className="text-sm font-medium text-gray-90">
              {row.value}
            </Text>
          </div>
        ))}
      </div>

      <div className="mt-4 md:mt-6 rounded-lg bg-primary/10 px-4 py-3 text-center border border-primary-70">
        <Text
          as="small"
          className="font-semibold uppercase tracking-widest mb-1"
        >
          TOTAL
        </Text>
        <Text as="h4" className="font-semibold text-[22px] md:text-[24px]">
          {BILLING_TOTAL}
        </Text>
        <Text
          as="small"
          className="mt-0.5 md:text-[10px] text-8px"
          textColor="gray-85"
        >
          {BILLING_SUBTITLE}
        </Text>
      </div>
    </div>
  );
};

export default StatePersistencePanel;
