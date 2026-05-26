import { Text } from "@/shared/ui-lib";

type NeedsFeatureTagsProps = {
  items: readonly string[];
};

const NeedsFeatureTags = ({ items }: NeedsFeatureTagsProps) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <Text
          key={item}
          fontFamily="spaceMono"
          as="small"
          textColor="white"
          className="rounded-xl bg-primary px-2.5 py-0.75"
        >
          {item}
        </Text>
      ))}
    </div>
  );
};

export default NeedsFeatureTags;
