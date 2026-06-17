import { Divider, Text } from "@/shared/ui-lib";

type TransparentPricingRowProps = {
  label: string;
  value: string;
};

const TransparentPricingRow = ({
  label,
  value,
}: TransparentPricingRowProps) => {
  return (
    <>
      <div className="flex items-center justify-between gap-2 px-4.75">
        <Text fontFamily="spaceMono" textColor="gray-02" as="h6">
          {label}
        </Text>
        <Text fontFamily="spaceMono" textColor="white" as="h6">
          {value}
        </Text>
      </div>
      <Divider orientation="horizontal" className="bg-white/12 my-5" />
    </>
  );
};

export default TransparentPricingRow;
