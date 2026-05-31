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

const SOLUTIONS_MEGA_MENU_COLUMNS: MegaMenuColumn[] = [
  {
    sections: [
      {
        heading: "BY INDUSTRY",
        links: [
          {
            iconSrc: "/icons/public-sector.svg",
            iconAlt: "Public sector",
            title: "Public Sector",
            href: "/public-sector",
            description: "Sovereign AI for Government",
          },
          {
            iconSrc: "",
            iconAlt: "BFSI",
            title: "BFSI",
            href: "/bfsi",
            description: "Compliance-Ready AI Infra",
          },
          {
            iconSrc: "/icons/media-vfx.svg",
            iconAlt: "Media and VFX",
            title: "Media & VFX",
            href: "/media-vfx",
            description: "Render Farms & Pipelines",
          },
          {
            iconSrc: "/icons/healthcare.svg",
            iconAlt: "Healthcare",
            title: "Healthcare",
            href: "/healthcare",
            description: "Clinical-Grade Compliance",
          },
          {
            iconSrc: "/icons/flag.svg",
            iconAlt: "Defence",
            title: "Defence",
            href: "/defence",
            description: "Sovereign Strategic AI",
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
            iconSrc: "/icons/llm-fine-tuning.svg",
            iconAlt: "LLM fine-tuning",
            title: "LLM Fine-Tuning",
            // href: "/llm-training",
            description: "LoRA · QLoRA · full fine-tune",
          },
          {
            iconSrc: "/icons/object-storage.svg",
            iconAlt: "Generative AI",
            title: "Generative AI",
            // href: "/generative-ai",
            description: "SDXL · FLUX · video models",
          },
          {
            iconSrc: "/icons/agentic-workflows.svg",
            iconAlt: "Agentic workflows",
            title: "Agentic Workflows",
            // href: "/agentic-workflow",
            description: "Multi-Step AI Pipelines",
          },
        ],
      },
    ],
  },
];

export default function SolutionsMegaMenu() {
  return (
    <div className="flex w-full flex-col gap-4 p-4 md:p-7.5 shadow-sm">
      <div className="flex flex-col gap-x-6 gap-y-8 md:flex-row md:gap-8">
        {SOLUTIONS_MEGA_MENU_COLUMNS.map((column, columnIndex) => (
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
