import { Button, Divider, Text } from "@/shared/ui-lib";
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

const PRICING_MEGA_MENU_COLUMNS: MegaMenuColumn[] = [
  {
    sections: [
      {
        heading: "PRICING",
        links: [
          {
            iconSrc: "",
            iconAlt: "GPU Compute",
            title: "GPU Compute",
            description: "On-Demand & Reserved Plans",
            href: "/gpu-pricing",
          },
          {
            iconSrc: "",
            iconAlt: "CPU Compute",
            title: "CPU Compute",
            description: "Per-Second Billing",
            href: "/cpu-pricing",
          },
          {
            iconSrc: "",
            iconAlt: "AI Inference",
            title: "AI Inference",
            description: "Per-Token Serverless Rates",
            href: "/ai-inference",
          },
        ],
      },
    ],
  },
];

export default function PricingMegaMenu() {
  return (
    <div className="flex w-full flex-col gap-4 p-4 md:p-7.5 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {PRICING_MEGA_MENU_COLUMNS.map((column, columnIndex) => (
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
        <div className="flex justify-between min-w-0 w-full flex-col rounded-md bg-gray-10 p-4 md:min-w-[280px] md:p-6 lg:min-w-[350px]">
          <div>
            <Text
              as="small"
              textColor="white"
              className="w-fit rounded-full bg-primary px-3.5 py-1.5"
            >
              NEW
            </Text>
            <Text as="h6" weight="semibold" className="mt-2.5">
              TCO Calculator
            </Text>
            <Text as="small" textColor="black-20">
              Compare us vs Hyperscalers
            </Text>
          </div>
          <Text as="small" textColor="red-50">
            Calculate Now -&gt;
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
