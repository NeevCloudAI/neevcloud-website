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

const AI_SUPERCLOUD_MEGA_MENU_COLUMNS: MegaMenuColumn[] = [
  {
    sections: [
      {
        heading: "AI SUPERCLOUD",
        links: [
          {
            iconSrc: "/icons/visit.svg",
            iconAlt: "Visit",
            title: "Visit the Platform",
            description: "Open the AI SuperCloud Console",
          },
          {
            iconSrc: "/icons/question-mark.svg",
            iconAlt: "Why AI SuperCloud?",
            title: "Why AI SuperCloud",
            description: "Soverian Infrastructure for India",
          },
          {
            iconSrc: "/icons/neevcloud-arena.svg",
            iconAlt: "NeevCloud Arena",
            title: "NeevCloud Arena",
            description: "Benchmarks & Head-to-Head Testing",
          },
          {
            iconSrc: "/icons/trust-center.svg",
            iconAlt: "Trust Center",
            title: "Trust Center",
            description: "Compliances ,Certifications, SLAs",
          },
        ],
      },
    ],
  },
];

export default function AiSupercloudMegaMenu() {
  return (
    <div className="flex w-full flex-col gap-4 p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {AI_SUPERCLOUD_MEGA_MENU_COLUMNS.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="min-w-0 w-full md:min-w-[280px] lg:min-w-[350px]"
            >
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
            className="w-fit rounded-full bg-primary px-3.5 py-1.5"
          >
            PROJECT NOUN
          </Text>
          <Text as="h6" weight="semibold" className="mt-3">
            AI Infrastructure Without Limits
          </Text>
          <Text as="small" className="">
            Removing the limits of geography and latency to redefine how AI is
            deployed and scaled.
          </Text>
          <Text as="small" textColor="red-50" className="mt-4">
            Explore Project Noun -&gt;
          </Text>
        </div>
      </div>
      <Divider orientation="horizontal" />
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-1">
          <Text textColor="blue-40">All Systems Normal · </Text>
          <Text textColor="gray-75">in-ind-1</Text>
        </div>
        <Button variant="ghost" className="text-gray-75" spacing="none">
          View Status -&gt;
        </Button>
      </div>
    </div>
  );
}
