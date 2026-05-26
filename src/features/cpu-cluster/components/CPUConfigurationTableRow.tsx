import { Text } from "@/shared/ui-lib";
import { CPU_CONFIG_CELL_CLASS } from "@/features/cpu-cluster/constants/cpu-configuration.constants";
import type { CpuConfigurationRow } from "@/features/cpu-cluster/types/cpu-configuration.types";

type CPUConfigurationTableRowProps = {
  row: CpuConfigurationRow;
};

const CPUConfigurationTableRow = ({ row }: CPUConfigurationTableRowProps) => {
  return (
    <tr className="border-b border-black-7">
      <td className={CPU_CONFIG_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="primary-105">
          {row.configuration}
        </Text>
      </td>
      <td className={CPU_CONFIG_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.vcpu}
        </Text>
      </td>
      <td className={CPU_CONFIG_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.ram}
        </Text>
      </td>
      <td className={CPU_CONFIG_CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
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
