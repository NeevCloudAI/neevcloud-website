import { Text } from "@/shared/ui-lib";
import {
  GPU_PRICING_TABLE_ROWS,
  type GpuPricingRow,
} from "@/features/gpu-cluster/data/gpu-pricing-table-data";

const TABLE_HEADERS = [
  "sku",
  "vram",
  "cpu",
  "ram",
  "hourly",
  "3-months commitment",
  "6-months commitment",
  "1-year commitment",
  "Status",
] as const;

const CELL_CLASS =
  "px-3 py-2.5 text-left align-top whitespace-nowrap first:pl-5";

function PricingRow({ row }: { row: GpuPricingRow }) {
  return (
    <tr className="border-b border-black-7">
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="primary-105">
          {row.sku}
        </Text>
      </td>
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
          {row.vram}
        </Text>
      </td>
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
          {row.cpu}
        </Text>
      </td>
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
          {row.ram}
        </Text>
      </td>
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.hourly}
        </Text>
      </td>
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.threeMonths.price}
          <Text
            as="span"
            fontFamily="spaceMono"
            variant="small"
            textColor="primary-105"
            className="ml-2 md:ml-5"
          >
            {`save upto ${row.threeMonths.savePercent}%`}
          </Text>
        </Text>
      </td>
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.sixMonths.price}
          <Text
            as="span"
            fontFamily="spaceMono"
            variant="small"
            textColor="primary-105"
            className="ml-2 md:ml-5"
          >
            {`save upto ${row.sixMonths.savePercent}%`}
          </Text>
        </Text>
      </td>
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.oneYear.price}
          <Text
            as="span"
            fontFamily="spaceMono"
            variant="small"
            textColor="primary-105"
            className="ml-2 md:ml-5"
          >
            {`save upto ${row.oneYear.savePercent}%`}
          </Text>
        </Text>
      </td>
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor={row.status.textVariant}>
          {row.status.text}
        </Text>
      </td>
    </tr>
  );
}

export default function GpuPricingTable() {
  return (
    <div className="mt-7.5 overflow-x-auto">
      <table className="min-w-6xl w-full border-collapse font-space-mono text-xs md:text-sm">
        <thead>
          <tr className="border-b border-black-30">
            {TABLE_HEADERS.map((header) => (
              <th
                key={header}
                scope="col"
                className={`${CELL_CLASS} font-normal`}
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
            <PricingRow key={row.sku} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
