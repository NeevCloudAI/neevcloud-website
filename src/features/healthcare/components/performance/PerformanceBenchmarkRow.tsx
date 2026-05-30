import { Text } from "@/shared/ui-lib";
import { PERFORMANCE_BENCHMARK_TABLE_CELL_CLASS } from "../../constants/performance-section.constants";
import { PerformanceBenchmarkRow as PerformanceBenchmarkRowData } from "../../types/performance-section.types";

type PerformanceBenchmarkRowProps = {
  row: PerformanceBenchmarkRowData;
  workloadTitle: string;
  workloadDetail: string;
};

const PerformanceBenchmarkRow = ({
  row,
  workloadTitle,
  workloadDetail,
}: PerformanceBenchmarkRowProps) => {
  return (
    <tr className="border-b border-white-10 last:border-b-0">
      <td className={`${PERFORMANCE_BENCHMARK_TABLE_CELL_CLASS} `}>
        <Text as="h6" textColor="white" fontFamily="spaceMono">
          {workloadTitle}
        </Text>
        <Text
          as="small"
          textColor="gray-75"
          fontFamily="spaceMono"
          weight="medium"
        >
          {workloadDetail}
        </Text>
      </td>
      <td
        className={`${PERFORMANCE_BENCHMARK_TABLE_CELL_CLASS} whitespace-nowrap`}
      >
        <Text as="h6" fontFamily="spaceMono" textColor="primary">
          {row.gpu}
        </Text>
      </td>
      <td
        className={`${PERFORMANCE_BENCHMARK_TABLE_CELL_CLASS} min-w-35 md:min-w-45`}
      >
        <div
          role="progressbar"
          aria-valuenow={row.relativeTimePercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Relative time for ${row.gpu}`}
          className="relative h-2.75 w-full overflow-hidden rounded-full bg-white-10"
        >
          <div
            className={`absolute inset-y-0 left-0 rounded-full ${row.isBaseline ? "bg-gray-75" : "bg-primary"}`}
            style={{ width: `${row.relativeTimePercent}%` }}
          />
        </div>
      </td>
      <td
        className={`${PERFORMANCE_BENCHMARK_TABLE_CELL_CLASS} whitespace-nowrap`}
      >
        <Text
          as="h6"
          fontFamily="spaceMono"
          textColor={row.isBaseline ? "white" : "primary"}
        >
          {row.processingTime}
        </Text>
      </td>
    </tr>
  );
};

export default PerformanceBenchmarkRow;
