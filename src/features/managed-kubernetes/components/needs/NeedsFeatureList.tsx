type NeedsFeatureListProps = {
  items: readonly string[];
};

const NeedsFeatureList = ({ items }: NeedsFeatureListProps) => {
  return (
    <ul className="mt-4 list-inside list-disc space-y-2.5 marker:text-primary">
      {items.map((item) => (
        <li key={item} className="text-sm text-gray-90">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default NeedsFeatureList;
