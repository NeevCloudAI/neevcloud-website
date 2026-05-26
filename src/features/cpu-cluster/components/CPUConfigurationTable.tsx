import { Text } from "@/shared/ui-lib";
import {
  CPU_CONFIG_CELL_CLASS,
  CPU_CONFIG_TABLE_HEADERS,
} from "@/features/cpu-cluster/constants/cpu-configuration.constants";
import CPUConfigurationTableRow from "@/features/cpu-cluster/components/CPUConfigurationTableRow";
import type { CpuInstanceFamily } from "@/features/cpu-cluster/types/cpu-configuration.types";

type CPUConfigurationTableProps = {
  family: CpuInstanceFamily;
};

const CPUConfigurationTable = ({ family }: CPUConfigurationTableProps) => {
  return (
    <>
      <Text as="h6" fontFamily="spaceMono" textColor="white">
        <Text as="span" fontFamily="spaceMono" textColor="primary-105">
          →
        </Text>
        {` configuration: ${family.titleName}`}
      </Text>
      <Text
        as="h6"
        textColor="gray-80"
        className="mt-1"
        fontFamily="spaceMono"
      >
        {family.subtitle}
      </Text>

      <div className="mt-7.5 overflow-x-auto">
        <table
          className="w-full font-space-mono"
          aria-label={`${family.titleName} configuration options`}
        >
          <caption className="sr-only">
            CPU instance configurations for {family.titleName}
          </caption>
          <thead>
            <tr className="border-b border-black-30">
              {CPU_CONFIG_TABLE_HEADERS.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className={`${CPU_CONFIG_CELL_CLASS} font-normal`}
                >
                  <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
                    {header}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {family.rows.map((row) => (
              <CPUConfigurationTableRow
                key={`${family.id}-${row.configuration}`}
                row={row}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Text
        as="h6"
        textColor="gray-80"
        className="mt-7.5"
        fontFamily="spaceMono"
      >
        {family.footer}
      </Text>
    </>
  );
};

export default CPUConfigurationTable;
