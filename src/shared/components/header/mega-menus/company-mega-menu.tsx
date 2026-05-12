import { Divider, Text } from "@/shared/ui-lib";
import MegaMenuLinkRow, {
  type MegaMenuLinkRowProps,
} from "./mega-menu-link-row";

const COMPANY_SECTION_HEADING = "COMPANY";

const COMPANY_COLUMN_LEFT: MegaMenuLinkRowProps[] = [
  {
    iconSrc: "",
    iconAlt: "About us",
    title: "About Us",
    description: "Our Story & Vision and Mission",
  },
  {
    iconSrc: "",
    iconAlt: "Leadership",
    title: "Leadership",
    description: "Meet the Team",
  },
  {
    iconSrc: "",
    iconAlt: "Career",
    title: "Career",
    description: "Build the Sovereign Cloud",
  },
  {
    iconSrc: "",
    iconAlt: "Press kit",
    title: "Press Kit",
    description: "Build the Sovereign Cloud",
  },
];

const COMPANY_COLUMN_RIGHT: MegaMenuLinkRowProps[] = [
  {
    iconSrc: "",
    iconAlt: "Life at NeevCloud",
    title: "Life at NeevCloud",
    description: "Culture, benefits, and how we work",
  },
  {
    iconSrc: "",
    iconAlt: "Event",
    title: "Event",
    description: "Webinars, meetups, and announcements",
  },
  {
    iconSrc: "",
    iconAlt: "Contact us",
    title: "Contact Us",
    description: "Talk to Sales or Support",
  },
];

export default function CompanyMegaMenu() {
  return (
    <div className="flex w-full flex-col gap-4 p-8 shadow-sm">
      <div>
        <Text textColor="blue-40">{COMPANY_SECTION_HEADING}</Text>
        <Divider orientation="horizontal" className="my-2 bg-gray-60" />
      </div>
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
