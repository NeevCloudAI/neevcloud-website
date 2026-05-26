import PurposeFeatureItem from "@/features/managed-kubernetes/components/purpose/PurposeFeatureItem";
import { PURPOSE_FEATURES } from "@/features/managed-kubernetes/data/purpose-section.data";

const PurposeFeaturesGrid = () => {
  return (
    <div className="mt-6 w-full rounded-lg bg-white md:mt-10 grid grid-cols-1 md:grid-cols-5">
      {PURPOSE_FEATURES.map((feature, index) => (
        <PurposeFeatureItem
          key={feature.number}
          feature={feature}
          showDivider={index > 0}
        />
      ))}
    </div>
  );
};

export default PurposeFeaturesGrid;
