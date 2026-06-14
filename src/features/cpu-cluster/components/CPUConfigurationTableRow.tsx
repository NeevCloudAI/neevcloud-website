import { Text } from "@/shared/ui-lib";
import { CpuConfigurationRow } from "../types/cpu-configuration.types";
import { CPU_CONFIG_CELL_CLASS } from "../constants/cpu-configuration.constants";

type CPUConfigurationTableRowProps = {
  row: CpuConfigurationRow;
};

const CPUConfigurationTableRow = ({ row }: CPUConfigurationTableRowProps) => {
  return (
    <tr className="border-b border-white/6">
      <td className={CPU_CONFIG_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="primary-105">
          {row.configuration}
        </Text>
      </td>
      <td className={CPU_CONFIG_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
          {row.vcpu}
        </Text>
      </td>
      <td className={CPU_CONFIG_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
          {row.ram}
        </Text>
      </td>
      <td className={CPU_CONFIG_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
          {row.storage}
        </Text>
      </td>
      <td className={CPU_CONFIG_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.bestFor}
        </Text>
      </td>
    </tr>
  );
};

export default CPUConfigurationTableRow;
