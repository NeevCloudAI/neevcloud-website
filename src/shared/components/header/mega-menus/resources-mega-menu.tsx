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

const RESOURCES_MEGA_MENU_COLUMNS: MegaMenuColumn[] = [
  {
    sections: [
      {
        heading: "RESOURCES",
        links: [
          {
            iconSrc: "",
            iconAlt: "Blog",
            title: "Blog",
            description: "Engineering & Product Writing",
          },
          {
            iconSrc: "",
            iconAlt: "Case Studies",
            title: "Case Studies",
            description: "How Customers Ship Faster",
          },
          {
            iconSrc: "",
            iconAlt: "Whitepapers",
            title: "Whitepapers",
            description: "Technical Deep Dives",
          },
          {
            iconSrc: "",
            iconAlt: "Newsroom",
            title: "Newsroom",
            description: "Press & Announcements",
          },
        ],
      },
    ],
  },
];

export default function ResourcesMegaMenu() {
  return (
    <div className="flex w-full flex-col gap-4 p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {RESOURCES_MEGA_MENU_COLUMNS.map((column, columnIndex) => (
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
            className="bg-primary rounded-full px-3.5 py-1.5 w-fit"
          >
            PROJECT TERRA VAULT
          </Text>
          <Text as="h6" weight="semibold" className="mt-3">
            Setting a new standard for secure and efficient AI Infrastructure
            solution
          </Text>
          <Text as="small" className="">
            The demand for data storage is growing exponentially, and
            traditional infrastructure struggles to keep pace.
          </Text>
          <Text as="small" textColor="red-50" className="mt-4">
            Explore Now -&gt;
          </Text>
        </div>
      </div>
    </div>
  );
}
