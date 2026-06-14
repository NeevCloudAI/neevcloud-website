import { Fragment } from "react";
import { Text } from "@/shared/ui-lib";
import { PERFORMANCE_BENCHMARK_TABLE_HEADERS } from "../../constants/performance-section.constants";
import {
  HEALTHCARE_PERFORMANCE_BENCHMARKS,
  HEALTHCARE_PERFORMANCE_DISCLAIMER,
} from "../../data/performance-section.data";
import PerformanceBenchmarkRow from "./PerformanceBenchmarkRow";

const PerformanceBenchmarkTable = () => {
  return (
    <div className="mt-4 w-full overflow-x-auto rounded-lg border border-white/12 bg-white/6 backdrop-blur-md md:mt-10">
      <table
        className="min-w-6xl w-full border-collapse font-space-mono text-xs md:text-sm"
        aria-label="Medical AI performance benchmarks comparing H100 and A100 GPUs"
      >
        <caption className="sr-only">
          H100 vs A100 benchmark results for medical image segmentation, protein
          folding, and genomic variant calling workloads
        </caption>
        <thead>
          <tr className="border-b border-white/12">
            {PERFORMANCE_BENCHMARK_TABLE_HEADERS.map((header) => (
              <th
                key={header}
                scope="col"
                className={`p-4 md:px-8.75 align-middle text-left md:py-5 font-normal`}
              >
                <Text as="h6" fontFamily="spaceMono" textColor="gray-04">
                  {header}
                </Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {HEALTHCARE_PERFORMANCE_BENCHMARKS.map((workload) => (
            <Fragment key={workload.id}>
              {workload.rows.map((row) => (
                <PerformanceBenchmarkRow
                  key={row.id}
                  row={row}
                  workloadTitle={workload.title}
                  workloadDetail={workload.detail}
                />
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
      <Text
        as="small"
        textColor="gray-03"
        className="block border-t border-white/12 p-4 md:px-8.75 md:py-5"
      >
        {HEALTHCARE_PERFORMANCE_DISCLAIMER}
      </Text>
    </div>
  );
};

export default PerformanceBenchmarkTable;
