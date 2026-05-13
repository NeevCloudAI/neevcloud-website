import { Button, Divider, Text } from "@/shared/ui-lib";
import MegaMenuLinkRow, {
  type MegaMenuLinkRowProps,
} from "./mega-menu-link-row";
import Image from "next/image";

type MegaMenuSectionBlock = {
  heading: string;
  links: MegaMenuLinkRowProps[];
};

type MegaMenuColumn = {
  sections: MegaMenuSectionBlock[];
};

const INFERENCE_MEGA_MENU_COLUMNS: MegaMenuColumn[] = [
  {
    sections: [
      {
        heading: "INFERENCE HUB",
        links: [
          {
            iconSrc: "/icons/serverless-api.svg",
            iconAlt: "Serverless inference",
            title: "Serverless inference",
            description: "Pay-per-Token Endpoints, Autoscale",
            href: "/serverless-inference",
          },
          {
            iconSrc: "/icons/model-playground.svg",
            iconAlt: "Model playground",
            title: "Model playground",
            description: "Test Prompts in your Browser",
            href: "/model-playground",
          },
          {
            iconSrc: "/icons/code.svg",
            iconAlt: "Model APIs",
            title: "Model APIs",
            description: "REST & OpenAI-compatible",
          },
          {
            iconSrc: "/icons/model-catalog.svg",
            iconAlt: "Model catalog",
            title: "Model Catalog",
            description: "gpt-oss · Kimi · GLM · Hermes",
          },
        ],
      },
    ],
  },
];

export default function InferenceMegaMenu() {
  return (
    <div className="flex w-full flex-col gap-4 p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {INFERENCE_MEGA_MENU_COLUMNS.map((column, columnIndex) => (
            <div key={columnIndex} className="min-w-0 w-full md:min-w-[280px] lg:min-w-[350px]">
              {column.sections.map((section, sectionIndex) => (
                <div key={section.heading}>
                  <Text
                    textColor="blue-40"
                    className={sectionIndex > 0 ? "mt-4 md:mt-10" : undefined}
                  >
                    {section.heading}
                  </Text>
                  <Divider
                    orientation="horizontal"
                    className="my-2 bg-gray-60"
                  />
                  {section.links.map((link) => (
                    <MegaMenuLinkRow
                      key={`${section.heading}-${link.title}`}
                      {...link}
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex min-w-0 w-full flex-col rounded-md bg-gray-10 p-4 md:min-w-[280px] md:p-6 lg:min-w-[350px]">
          <Text
            as="small"
            textColor="white"
            className="bg-primary rounded-full px-3.5 py-1.5 w-fit"
          >
            FEATURED MODEL
          </Text>
          <Text as="h6" weight="semibold" className="mt-3">
            Hermes-4-405B is Live
          </Text>
          <Text as="small" className="">
            Try our highest-throughput open-weight model on serverless
            infrastructure.
          </Text>
          <Image
            src="/icons/playground.svg"
            alt="Hermes-4-405b"
            width={300}
            height={300}
            className="mt-4"
          />
          <Text as="small" textColor="red-50" className="mt-4">
            Open Playground -&gt;
          </Text>
        </div>
      </div>
      <Divider orientation="horizontal" />
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Text textColor="blue-40">
          All endpoints hosted in India · DPDP-aligned
        </Text>
        <Button variant="ghost" className="text-gray-75" spacing="none">
          View ALL Models -&gt;
        </Button>
      </div>
    </div>
  );
}
