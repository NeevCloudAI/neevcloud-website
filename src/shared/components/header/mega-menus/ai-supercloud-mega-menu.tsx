import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import { Button, Divider, Text, LinkComponent } from "@/shared/ui-lib";
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
            href: "/visit-platform",
          },
          {
            iconSrc: "/icons/question-mark.svg",
            iconAlt: "Why AI SuperCloud?",
            title: "Why AI SuperCloud",
            description: "Soverian Infrastructure for India",
            href: "/why-ai-supercloud",
          },
          {
            iconSrc: "/icons/neevcloud-arena.svg",
            iconAlt: "NeevCloud Arena",
            title: "NeevCloud Arena",
            description: "Benchmarks & Head-to-Head Testing",
            href: "/neevcloud-arena",
          },
          {
            iconSrc: "/icons/trust-center.svg",
            iconAlt: "Trust Center",
            title: "Trust Center",
            description: "Compliances ,Certifications, SLAs",
            href: "/trust-center",
          },
        ],
      },
    ],
  },
];

export default function AiSupercloudMegaMenu() {
  return (
    <div className="flex w-full flex-col gap-4 p-4 md:p-7.5 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {AI_SUPERCLOUD_MEGA_MENU_COLUMNS.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="min-w-0 w-full md:min-w-[280px] lg:min-w-[350px]"
            >
              {column.sections.map((section) => (
                <div key={section.heading}>
                  <Text textColor="gray-02">{section.heading}</Text>
                  <Divider
                    orientation="horizontal"
                    className="my-2.5 bg-gray-01"
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
        <div className="grid gap-2.5 grid-rows-1 md:grid-cols-2 justify-between w-full flex-col md:min-w-[280px]">
          <div className="relative border p-4 md:p-5">
            <div
              className="pointer-events-none absolute inset-0 bg-[url('/images/webp/satelite-bg.webp')] bg-cover bg-center bg-position-center bg-no-repeat z-0"
              aria-hidden
            />
            <div className="relative flex flex-col justify-between z-1 h-full">
              <div>
                <Text
                  as="small"
                  textColor="white"
                  className="w-fit rounded-full bg-primary px-3.5 py-1.5"
                >
                  PROJECT NOUN
                </Text>
                <Text
                  as="h6"
                  weight="semibold"
                  textColor="white"
                  className="mt-2.5"
                >
                  AI Infrastructure Without Limits
                </Text>
              </div>
              <LinkComponent
                href={EXTERNAL_LINKS.projectOrion}
                variant="ghost"
                target="_blank"
                spacing="none"
                size="xs"
                textColor="pulse-red"
              >
                Explore Project Noun -&gt;
              </LinkComponent>
            </div>
          </div>
          <div className="relative border p-4 md:p-5">
            <div
              className="pointer-events-none absolute inset-0 bg-[url('/images/webp/varuna.webp')] bg-cover bg-center bg-position-center bg-no-repeat z-0"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-b from-black via-black/50 to-transparent z-0"
              aria-hidden
            />
            <div className="relative flex flex-col justify-between z-1 h-full">
              <div>
                <Text
                  as="small"
                  textColor="white"
                  className="w-fit rounded-full bg-primary px-3.5 py-1.5"
                >
                  VARUNA
                </Text>
                <Text
                  as="h6"
                  weight="semibold"
                  textColor="white"
                  className="mt-2.5"
                >
                  The Ultimate Data Machine for Next-Gen AI
                </Text>
              </div>
              <LinkComponent
                href={EXTERNAL_LINKS.varuna}
                variant="ghost"
                target="_blank"
                spacing="none"
                size="xs"
                textColor="pulse-red"
              >
                Know About Varuna -&gt;
              </LinkComponent>
            </div>
          </div>
        </div>
      </div>
      <Divider orientation="horizontal" />
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-1">
          <Text textColor="gray-02">All Systems Normal · </Text>
          <Text textColor="gray-04">in-ind-1</Text>
        </div>
        <Button variant="ghost" className="text-gray-04" spacing="none">
          View Status -&gt;
        </Button>
      </div>
    </div>
  );
}
