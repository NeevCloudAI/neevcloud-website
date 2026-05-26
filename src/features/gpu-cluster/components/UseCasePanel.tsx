import Image from "next/image";
import { Text } from "@/shared/ui-lib";
import UseCaseSummaryCard from "./UseCaseSummaryCard";
import UseCaseTag from "./UseCaseTag";
import type { UseCaseDefinition } from "../types/use-cases-section.types";

type UseCasePanelProps = {
  useCase: UseCaseDefinition;
  panelId: string;
  labelledBy: string;
  hidden: boolean;
};

const UseCasePanel = ({
  useCase,
  panelId,
  labelledBy,
  hidden,
}: UseCasePanelProps) => {
  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={labelledBy}
      hidden={hidden}
      className="relative bg-gray-10 w-full p-4 md:p-12.5 flex flex-col md:flex-row gap-5 overflow-hidden"
    >
      <div>
        <div className="absolute bottom-[-40%] left-0">
          <Image
            src="/icons/logo.svg"
            alt={useCase.logoAlt}
            width={500}
            height={500}
          />
        </div>
        <div
          className="w-15 h-15 bg-white rounded-sm border border-gray-60"
          aria-hidden="true"
        />
        <Text as="h2" className="mt-4 md:mt-10">
          {useCase.heading}
        </Text>
        <Text as="h4" className="mt-2.5">
          {useCase.description}
        </Text>
        <ul className="flex flex-wrap items-center gap-2.5 mt-4 md:mt-10 list-none p-0 m-0">
          {useCase.tags.map((tag) => (
            <li key={tag.text}>
              <UseCaseTag tag={tag} />
            </li>
          ))}
        </ul>
      </div>
      <aside className="bg-primary p-5 rounded-lg md:w-[30%] flex flex-col gap-5 shrink-0">
        {useCase.summary.map((block) => (
          <UseCaseSummaryCard key={block.label} block={block} />
        ))}
      </aside>
    </div>
  );
};

export default UseCasePanel;
