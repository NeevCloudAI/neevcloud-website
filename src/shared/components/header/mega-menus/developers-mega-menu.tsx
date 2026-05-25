import { Divider, Text } from "@/shared/ui-lib";
import MegaMenuLinkRow, {
  type MegaMenuLinkRowProps,
} from "./mega-menu-link-row";

type MegaMenuSectionBlock = {
  heading: string;
  links: MegaMenuLinkRowProps[];
};

type MegaMenuColumn = {
  sections: MegaMenuSectionBlock[];
};

const DEVELOPERS_MEGA_MENU_COLUMNS: MegaMenuColumn[] = [
  {
    sections: [
      {
        heading: "BUILD",
        links: [
          {
            iconSrc: "",
            iconAlt: "Documentation",
            title: "Documentation",
            description: "Setup, Concepts, Tutorials",
          },
          {
            iconSrc: "",
            iconAlt: "API reference",
            title: "API Reference",
            description: "Every Endpoint, Every Parameter",
          },
          {
            iconSrc: "",
            iconAlt: "Quick start guides",
            title: "Quick Start Guides",
            description: "From Zero to First Call in 5 Min",
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        heading: "BY TECH",
        links: [
          {
            iconSrc: "",
            iconAlt: "Examples and templates",
            title: "Examples & Templates",
            description: "Copy-Paste Starter Projects",
          },
          {
            iconSrc: "",
            iconAlt: "Status page",
            title: "Status Page",
            description: "Live regional Health",
          },
        ],
      },
    ],
  },
];

export default function DevelopersMegaMenu() {
  return (
    <div className="flex w-full flex-col gap-4 p-4 md:p-7.5 shadow-sm">
      <div className="flex flex-col gap-x-6 gap-y-8 md:flex-row md:gap-8">
        {DEVELOPERS_MEGA_MENU_COLUMNS.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="min-w-0 w-full md:min-w-[280px] lg:min-w-[350px]"
          >
            {column.sections.map((section) => (
              <div key={section.heading}>
                <Text textColor="blue-40">{section.heading}</Text>
                <Divider
                  orientation="horizontal"
                  className="my-2.5 bg-gray-60"
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
    </div>
  );
}
