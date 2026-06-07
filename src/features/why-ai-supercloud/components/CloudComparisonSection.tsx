import ComparisonTableSection from "@/shared/components/comparison-table-section";
import {
  CLOUD_COMPARISON_ROWS,
  CLOUD_COMPARISON_SECTION,
} from "../data/cloud-comparison-section.data";

const CloudComparisonSection = () => {
  return (
    <ComparisonTableSection
      sectionId="cloud-comparison"
      titlePrefix={CLOUD_COMPARISON_SECTION.titlePrefix}
      titleHighlight={CLOUD_COMPARISON_SECTION.titleHighlight}
      description={CLOUD_COMPARISON_SECTION.description}
      traditionalColumnLabel={CLOUD_COMPARISON_SECTION.traditionalColumnLabel}
      supercloudColumnLabel={CLOUD_COMPARISON_SECTION.supercloudColumnLabel}
      rows={CLOUD_COMPARISON_ROWS}
    />
  );
};

export default CloudComparisonSection;
