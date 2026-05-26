import { Divider, Text } from "@/shared/ui-lib";

type ControlPlaneIncludedRowProps = {
  label: string;
  price: string;
  showDivider?: boolean;
};

const ControlPlaneIncludedRow = ({
  label,
  price,
  showDivider = true,
}: ControlPlaneIncludedRowProps) => {
  return (
    <>
      <div className="flex items-center justify-between gap-2 mt-4">
        <Text textColor="gray-75" as="h6">
          {label}
        </Text>
        <Text fontFamily="spaceMono" textColor="primary" as="h6">
          {price}
        </Text>
      </div>
      {showDivider ? (
        <Divider orientation="horizontal" className="my-5 bg-gray-60" />
      ) : null}
    </>
  );
};

export default ControlPlaneIncludedRow;
