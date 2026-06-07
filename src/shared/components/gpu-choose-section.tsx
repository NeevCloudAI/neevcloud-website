import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import { GPU_CHOOSE_SECTION_TABLE_CELL_CLASS } from "@/shared/constants/gpu-choose-section.constants";
import type { GpuChooseSectionProps } from "@/shared/types/gpu-choose-section.types";
import { Text } from "@/shared/ui-lib";

const GpuChooseSection = ({
  titlePrefix,
  titleHighlight,
  description,
  terminalTitle,
  pricingCommand,
  pricingComment,
  tableHeaders,
  rows,
  footerComment,
  terminalAriaLabel,
  className,
}: GpuChooseSectionProps) => {
  return (
    <section
      className={cn("relative bg-gray-10 py-8 md:py-16 2xl:py-25", className)}
    >
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" align="center" className="max-w-5xl mt-4 md:mt-6">
          {titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {titleHighlight}
          </Text>
        </Text>

        <Text as="h6" className="mt-2.5" align="center" textColor="black-5">
          {description}
        </Text>

        <div
          className="mt-4 w-full rounded-lg border border-white-10 bg-black font-mono shadow-sm backdrop-blur-md md:mt-12.5"
          role="region"
          aria-label={terminalAriaLabel}
        >
          <div className="flex items-center border-b border-white-10 p-3.5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <Text textColor="gray-80" fontFamily="spaceMono" className="ml-4.5">
              {terminalTitle}
            </Text>
          </div>

          <div className="overflow-auto min-w-0 flex-1 p-4 md:p-5">
            <Text
              as="h6"
              fontFamily="spaceMono"
              textColor="white"
              className="leading-7"
            >
              {pricingCommand}
            </Text>
            <Text
              as="h6"
              fontFamily="spaceMono"
              textColor="gray-80"
              className="leading-7"
            >
              {pricingComment}
            </Text>

            <div className="my-5">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-black-29">
                    {tableHeaders.map((header) => (
                      <th
                        key={header}
                        className={`${GPU_CHOOSE_SECTION_TABLE_CELL_CLASS} font-normal`}
                      >
                        <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
                          {header}
                        </Text>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id} className="border-b border-black-29">
                      <td className={GPU_CHOOSE_SECTION_TABLE_CELL_CLASS}>
                        <Text as="h6" fontFamily="spaceMono" textColor="primary">
                          {row.sku}
                        </Text>
                        <Text
                          as="small"
                          fontFamily="spaceMono"
                          textColor="gray-80"
                        >
                          {row.skuSubtitle}
                        </Text>
                      </td>
                      <td className={GPU_CHOOSE_SECTION_TABLE_CELL_CLASS}>
                        <Text as="h6" fontFamily="spaceMono" textColor="white">
                          {row.hourly}
                        </Text>
                      </td>
                      <td className={GPU_CHOOSE_SECTION_TABLE_CELL_CLASS}>
                        {row.threeMonthSavings ? (
                          <div className="flex items-center gap-2 md:gap-10">
                            <Text
                              as="h6"
                              fontFamily="spaceMono"
                              textColor="white"
                            >
                              {row.threeMonthPrice}
                            </Text>
                            <Text
                              as="small"
                              fontFamily="spaceMono"
                              textColor="primary-105"
                            >
                              {row.threeMonthSavings}
                            </Text>
                          </div>
                        ) : (
                          <Text as="h6" fontFamily="spaceMono" textColor="white">
                            {row.threeMonthPrice}
                          </Text>
                        )}
                      </td>
                      <td className={GPU_CHOOSE_SECTION_TABLE_CELL_CLASS}>
                        {row.sixMonthSavings ? (
                          <div className="flex items-center gap-2 md:gap-10">
                            <Text
                              as="h6"
                              fontFamily="spaceMono"
                              textColor="white"
                            >
                              {row.sixMonthCommitment}
                            </Text>
                            <Text
                              as="small"
                              fontFamily="spaceMono"
                              textColor="primary-105"
                            >
                              {row.sixMonthSavings}
                            </Text>
                          </div>
                        ) : (
                          <Text as="h6" fontFamily="spaceMono" textColor="white">
                            {row.sixMonthCommitment}
                          </Text>
                        )}
                      </td>
                      <td className={GPU_CHOOSE_SECTION_TABLE_CELL_CLASS}>
                        {row.oneYearSavings ? (
                          <div className="flex items-center gap-2 md:gap-10">
                            <Text
                              as="h6"
                              fontFamily="spaceMono"
                              textColor="white"
                            >
                              {row.oneYearCommitment}
                            </Text>
                            <Text
                              as="small"
                              fontFamily="spaceMono"
                              textColor="primary-105"
                            >
                              {row.oneYearSavings}
                            </Text>
                          </div>
                        ) : (
                          <Text as="h6" fontFamily="spaceMono" textColor="white">
                            {row.oneYearCommitment}
                          </Text>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Text
              as="h6"
              fontFamily="spaceMono"
              textColor="gray-80"
              className="leading-7"
            >
              {footerComment}
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GpuChooseSection;
