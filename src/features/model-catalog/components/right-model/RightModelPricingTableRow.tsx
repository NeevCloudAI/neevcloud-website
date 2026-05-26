import RightModelRowActions from "@/features/model-catalog/components/right-model/RightModelRowActions";
import { RIGHT_MODEL_TABLE_CELL_CLASS } from "@/features/model-catalog/constants/right-model-section.constants";
import type { ModelPricingRow } from "@/features/model-catalog/types/right-model-section.types";
import { Text } from "@/shared/ui-lib";

type RightModelPricingTableRowProps = {
  row: ModelPricingRow;
};

const RightModelPricingTableRow = ({ row }: RightModelPricingTableRowProps) => {
  return (
    <tr className="border-b border-black-7">
      <td className={`${RIGHT_MODEL_TABLE_CELL_CLASS} min-w-44 whitespace-normal`}>
        <Text as="h6" textColor="primary-105" fontFamily="spaceMono">
          {row.model.title}
        </Text>
        <Text fontFamily="spaceMono" as="small" textColor="gray-80">
          {row.model.description}
        </Text>
      </td>
      <td className={RIGHT_MODEL_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-75">
          {row.provider}
        </Text>
      </td>
      <td className={RIGHT_MODEL_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-75">
          {row.size}
        </Text>
      </td>
      <td className={RIGHT_MODEL_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-75">
          {row.context}
        </Text>
      </td>
      <td className={RIGHT_MODEL_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.inputPrice}
        </Text>
      </td>
      <td className={RIGHT_MODEL_TABLE_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.outputPrice}
        </Text>
      </td>
      <td className={RIGHT_MODEL_TABLE_CELL_CLASS}>
        <RightModelRowActions />
      </td>
    </tr>
  );
};

export default RightModelPricingTableRow;
