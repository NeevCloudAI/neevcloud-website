import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import type { ComparisonTableSectionProps } from "@/shared/types/comparison-table-section.types";
import { Text } from "@/shared/ui-lib";

const ComparisonTableSection = ({
  sectionId,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  description,
  traditionalColumnLabel,
  supercloudColumnLabel,
  rows,
  className,
}: ComparisonTableSectionProps) => {
  return (
    <section
      className={cn("relative bg-white py-8 md:py-16 2xl:py-25", className)}
      aria-labelledby={`${sectionId}-heading`}
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id={`${sectionId}-heading`}
          align="center"
          className="max-w-4xl"
        >
          {titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {titleHighlight}
          </Text>
          {titleSuffix}
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-3xl"
        >
          {description}
        </Text>

        <div className="mt-4 w-full overflow-x-auto rounded-md bg-black md:mt-12.5">
          <table className="w-full border-collapse">
            <caption className="sr-only">
              {titlePrefix}
              {titleHighlight}
              {titleSuffix}
            </caption>
            <thead>
              <tr>
                <th className="p-4 md:px-7.5 md:py-6.25 border border-white-10">
                  <Text
                    as="h6"
                    textColor="blue-40"
                    weight="semibold"
                    align="left"
                  >
                    Aspect
                  </Text>
                </th>
                <th className="p-4 md:px-7.5 md:py-6.25 border border-white-10">
                  <Text
                    as="h6"
                    textColor="blue-40"
                    weight="semibold"
                    align="left"
                  >
                    {traditionalColumnLabel}
                  </Text>
                </th>
                <th className="p-4 md:px-7.5 md:py-6.25 border border-white-10">
                  <Text
                    as="h6"
                    textColor="primary"
                    weight="semibold"
                    align="left"
                  >
                    {supercloudColumnLabel}
                  </Text>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.id}
                  className="border border-white-10 last:border-b-0"
                >
                  <th className="p-4 md:px-7.5 md:py-3.75 border border-white-10">
                    <Text
                      as="h6"
                      textColor="white"
                      weight="semibold"
                      align="left"
                    >
                      {row.aspect}
                    </Text>
                  </th>
                  <td className="p-4 md:px-7.5 md:py-3.75 border border-white-10">
                    <Text as="h6" textColor="gray-75" align="left">
                      {row.traditional}
                    </Text>
                  </td>
                  <td className="p-4 md:px-7.5 md:py-3.75 border border-white-10">
                    <Text as="h6" textColor="primary" align="left">
                      {row.traditional}
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default ComparisonTableSection;
