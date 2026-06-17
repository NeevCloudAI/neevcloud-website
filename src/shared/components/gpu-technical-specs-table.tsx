import { cn } from "@/lib/utils";
import { GPU_TECHNICAL_SPECS_TABLE_HEADERS } from "@/shared/constants/gpu-technical-specs-section.constants";
import type { GpuTechnicalSpecsRow } from "@/shared/types/gpu-technical-specs-section.types";
import { Text } from "@/shared/ui-lib";

type GpuTechnicalSpecsTableProps = {
  rows: readonly GpuTechnicalSpecsRow[];
};

const GpuTechnicalSpecsTable = ({ rows }: GpuTechnicalSpecsTableProps) => {
  return (
    <div className="w-full overflow-x-auto rounded-md bg-white">
      <table className="w-full border-collapse">
        <caption className="sr-only">
          {GPU_TECHNICAL_SPECS_TABLE_HEADERS.feature} and{" "}
          {GPU_TECHNICAL_SPECS_TABLE_HEADERS.specification}
        </caption>
        <thead>
          <tr>
            <th className="p-5 border-b border-gray-01 text-left">
              <Text as="h4" weight="semibold" textColor="black">
                {GPU_TECHNICAL_SPECS_TABLE_HEADERS.feature}
              </Text>
            </th>
            <th className="border-b border-gray-01 bg-primary p-5 text-center">
              <Text as="h4" weight="semibold" textColor="white">
                {GPU_TECHNICAL_SPECS_TABLE_HEADERS.specification}
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.id}
              className={cn(
                "border-b border-gray-01 last:border-b-0",
                index % 2 === 1 && "bg-cloud-gray",
              )}
            >
              <th
                scope="row"
                className="text-left px-5 py-2.5 border-r border-gray-01"
              >
                <Text as="h6" weight="normal" textColor="black">
                  {row.feature}
                </Text>
              </th>
              <td className="px-4 py-3 text-center align-middle md:px-6 md:py-3.5">
                <Text as="h6" weight="normal" textColor="black">
                  {row.specification}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GpuTechnicalSpecsTable;
