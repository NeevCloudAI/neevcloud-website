import { Divider, Text } from "@/shared/ui-lib";

type TransparentPricingRowProps = {
  label: string;
  value: string;
  valueColor?: "primary" | "white";
  labelColor?: "gray-02";
};

const TransparentPricingRow = ({
  label,
  value,
  valueColor = "white",
  labelColor = "gray-02",
}: TransparentPricingRowProps) => {
  return (
    <>
      <div className={`flex items-center justify-between gap-2 mt-5.5 mb-5`}>
        <Text fontFamily="spaceMono" textColor={labelColor} as="h6">
          {label}
        </Text>
        <Text fontFamily="spaceMono" textColor={valueColor} as="h6">
          {value}
        </Text>
      </div>
      <Divider orientation="horizontal" className="bg-black/8" />
    </>
  );
};

export default TransparentPricingRow;
