import { Divider, Text } from "@/shared/ui-lib";
import MegaMenuLinkRow, {
  type MegaMenuLinkRowProps,
} from "./mega-menu-link-row";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

const COMPANY_SECTION_HEADING = "COMPANY";

const COMPANY_COLUMN_LEFT: MegaMenuLinkRowProps[] = [
  {
    iconSrc: "/icons/info.svg",
    iconAlt: "About us",
    title: "About Us",
    description: "Our Story & Vision and Mission",
    href: "/about-us",
  },
  {
    iconSrc: "/icons/leadership.svg",
    iconAlt: "Leadership",
    title: "Leadership",
    description: "Meet the Team",
    href: "/leadership",
  },
  {
    iconSrc: "/icons/career.svg",
    iconAlt: "Career",
    title: "Career",
    description: "Build the Sovereign Cloud",
    href: "/careers",
  },
  {
    iconSrc: "/icons/newsroom.svg",
    iconAlt: "Newsroom",
    title: "Newsroom",
    description: "NeevCloud - Beyond the Headlines",
    href: "/newsroom",
  },
];

const COMPANY_COLUMN_RIGHT: MegaMenuLinkRowProps[] = [
  {
    iconSrc: "/icons/life.svg",
    iconAlt: "Life at NeevCloud",
    title: "Life at NeevCloud",
    description: "Culture, benefits, and how we work",
    href: "/life-at-neevcloud",
  },
  {
    iconSrc: "/icons/event.svg",
    iconAlt: "Event",
    title: "Events",
    description: "Webinars, meetups, and announcements",
    href: "/events",
  },
  {
    iconSrc: "/icons/contact-us.svg",
    iconAlt: "Contact us",
    title: "Contact Us",
    description: "Talk to Sales or Support",
    href: "/contact-neevcloud#contact-form",
  },
  {
    iconSrc: "/icons/blogs.svg",
    iconAlt: "Blogs",
    title: "Blogs",
    description: "Discover AIML, cloud in or blogs.",
    href: EXTERNAL_LINKS.blogs,
    target: "_blank",
  },
];

export default function CompanyMegaMenu() {
  return (
    <div className="flex w-full flex-col p-4 md:p-7.5 shadow-sm">
      <Text textColor="gray-02">{COMPANY_SECTION_HEADING}</Text>
      <Divider orientation="horizontal" className="mt-3 bg-gray-01" />
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="min-w-0 w-full md:min-w-[280px] lg:min-w-[350px]">
          {COMPANY_COLUMN_LEFT.map((link) => (
            <MegaMenuLinkRow key={link.title} {...link} />
          ))}
        </div>
        <div className="min-w-0 w-full md:min-w-[280px] lg:min-w-[350px]">
          {COMPANY_COLUMN_RIGHT.map((link) => (
            <MegaMenuLinkRow key={link.title} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}
