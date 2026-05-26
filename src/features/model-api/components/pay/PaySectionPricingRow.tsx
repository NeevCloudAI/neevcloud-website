import type { PaySectionPricingRow as PaySectionPricingRowData } from "@/features/model-api/types/pay-section.types";
import { Divider, Text } from "@/shared/ui-lib";

type PaySectionPricingRowProps = {
  row: PaySectionPricingRowData;
};

const PaySectionPricingRow = ({ row }: PaySectionPricingRowProps) => {
  return (
    <>
      <div className="flex items-center justify-between gap-2 py-5">
        <Text fontFamily="spaceMono" textColor="primary" as="h6">
          {row.category}
        </Text>
        <Text fontFamily="spaceMono" textColor="red-50" as="h6">
          {row.price}
        </Text>
        <Text fontFamily="spaceMono" textColor="gray-75" as="h6">
          {row.pricing}
        </Text>
      </div>
      <Divider orientation="horizontal" className="bg-black-5" />
    </>
  );
};

export default PaySectionPricingRow;
