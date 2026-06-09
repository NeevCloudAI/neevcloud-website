import { Text } from "@/shared/ui-lib";
import type { CelebrateStatCardProps } from "../../types/celebrate-section.types";

const CelebrateStatCard = ({ item }: CelebrateStatCardProps) => {
  const { stat, statColor, label } = item;

  return (
    <article className="flex h-full flex-col rounded-md bg-tertiary p-4 md:px-7.5 md:py-10">
      <Text as="h1" textColor={statColor}>
        {stat}
      </Text>
      <Text as="h6" textColor="gray-10" className="mt-2.5">
        {label}
      </Text>
    </article>
  );
};

export default CelebrateStatCard;
