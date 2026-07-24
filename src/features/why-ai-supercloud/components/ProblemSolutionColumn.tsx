import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import type { ProblemSolutionColumnProps } from "../types/problem-solution-section.types";
import Image from "next/image";

const ProblemSolutionColumn = ({
  column,
  theme,
}: ProblemSolutionColumnProps) => {
  return (
    <div
      className={cn(
        "flex h-full flex-col p-4 md:p-10",
        theme === "problem"
          ? "bg-linear-to-r from-[#66747C] via-[#515F66] to-[#3F4B52]"
          : "bg-linear-to-r from-[#03384A] via-[#022C3C] to-[#001F2B]"
      )}
    >
      <Text as="h5" textColor="white">
        {column.label}
      </Text>
      <Text
        as="h3"
        textColor="white"
        weight="semibold"
        className="mt-2.5 md:mt-5 md:text-30px"
      >
        {column.heading}
      </Text>
      <Text as="h6" textColor="white" className="mt-2.5">
        {column.description}
      </Text>

      <ul className="m-0 mt-4 flex list-none flex-col gap-3 p-0 md:mt-7.5 md:gap-5">
        {column.items.map((item) => (
          <li key={item.id}>
            <article className="rounded-md bg-white/12 p-4 md:p-5 flex gap-2.5">
              <Image src={item.icon} alt={item.title} width={77} height={77} />
              <div>
                <Text as="h4" textColor="white" weight="semibold">
                  {item.title}
                </Text>
                <Text as="h6" textColor="white" className="mt-1.25">
                  {item.description}
                </Text>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemSolutionColumn;
