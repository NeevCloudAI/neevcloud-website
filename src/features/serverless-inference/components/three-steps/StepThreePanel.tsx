import Image from "next/image";
import { Text } from "@/shared/ui-lib";
import { STEP_THREE_BILLING } from "../../data/three-steps-section.data";

const StepThreePanel = () => {
  const { title, subtitle, rows, total, totalLabel, totalSub } =
    STEP_THREE_BILLING;

  return (
    <div className="relative bg-white rounded-xl w-full shadow-sm overflow-hidden h-125">
      <div className="z-0 absolute bottom-0 right-0 pointer-events-none select-none opacity-15">
        <Image
          src="/icons/logo.svg"
          alt=""
          aria-hidden="true"
          width={170}
          height={170}
        />
      </div>
      <div className="p-4 md:p-6.25 border-b border-gray-01">
        <Text as="h4" weight="semibold">
          {title}
        </Text>
        <Text textColor="gray-03" className="my-1.25">
          {subtitle}
        </Text>
      </div>

      <div className="flex flex-col px-4 md:px-7.25 mb-3.75">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-3.75 border-b border-gray-01"
          >
            <div>
              <Text as="h6" weight="semibold">
                {row.label}
              </Text>
              <Text textColor="gray-03" as="small">
                {row.sub}
              </Text>
            </div>
            <Text as="h6" textColor={row.neg ? "primary" : "black"}>
              {row.value}
            </Text>
          </div>
        ))}
      </div>

      <div className="mx-4 md:mx-5 mb-5 bg-primary/10 z-1 relative border border-primary/18 rounded-xl p-3.75 text-center">
        <Text as="small" weight="semibold">
          {totalLabel}
        </Text>
        <Text as="h4" weight="semibold">
          {total}
        </Text>
        <Text textColor="gray-03" as="small">
          {totalSub}
        </Text>
      </div>
    </div>
  );
};

export default StepThreePanel;
