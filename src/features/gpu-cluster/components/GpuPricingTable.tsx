import { Text } from "@/shared/ui-lib";
import {
  GPU_PRICING_TABLE_CELL_CLASS,
  GPU_PRICING_TABLE_HEADERS,
} from "@/features/gpu-cluster/constants/gpu-pricing-table.constants";
import { GPU_PRICING_TABLE_ROWS } from "@/features/gpu-cluster/data/gpu-pricing-table.data";
import GpuPricingTableRow from "@/features/gpu-cluster/components/GpuPricingTableRow";

const GpuPricingTable = () => {
  return (
    <div className="mt-7.5 overflow-x-auto">
      <table
        className="min-w-6xl w-full border-collapse font-space-mono text-xs md:text-sm"
        aria-label="GPU pricing by SKU and commitment term"
      >
        <caption className="sr-only">
          GPU SKUs with VRAM, CPU, RAM, hourly rates, and commitment pricing in
          INR per hour per GPU
        </caption>
        <thead>
          <tr className="border-b border-black-30">
            {GPU_PRICING_TABLE_HEADERS.map((header) => (
              <th
                key={header}
                scope="col"
                className={`${GPU_PRICING_TABLE_CELL_CLASS} font-normal`}
              >
                <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
                  {header}
                </Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {GPU_PRICING_TABLE_ROWS.map((row) => (
            <GpuPricingTableRow key={row.sku} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GpuPricingTable;
