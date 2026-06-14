import type { PaySectionPricingRow as PaySectionPricingRowData } from "../../types/pay-section.types";
import { Divider, Text } from "@/shared/ui-lib";

type PaySectionPricingRowProps = {
  row: PaySectionPricingRowData;
};

const PaySectionPricingRow = ({ row }: PaySectionPricingRowProps) => {
  return (
    <>
      <div className="grid grid-cols-3 items-center gap-2 py-5">
        <Text fontFamily="spaceMono" textColor="primary" as="h6" align="left">
          {row.category}
        </Text>
        <Text fontFamily="spaceMono" textColor="pulse-red" as="h6" align="left">
          {row.price}
        </Text>
        <Text fontFamily="spaceMono" textColor="gray-04" as="h6" align="right">
          {row.pricing}
        </Text>
      </div>
      <Divider orientation="horizontal" className="bg-black/8" />
    </>
  );
};

export default PaySectionPricingRow;
