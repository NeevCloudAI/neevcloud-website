import { Text } from "@/shared/ui-lib";

type ReservedNodePricingTierProps = {
  term: string;
  discount: string;
  description: string;
};

const ReservedNodePricingTier = ({
  term,
  discount,
  description,
}: ReservedNodePricingTierProps) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-8 w-full">
      <Text textColor="gray-75">{term}</Text>
      <Text as="h2" textColor="primary">
        {discount}
        <Text as="span" textColor="gray-75" variant="h6">
          off
        </Text>
      </Text>
      <Text textColor="gray-75" align="center">
        {description}
      </Text>
    </div>
  );
};

export default ReservedNodePricingTier;
