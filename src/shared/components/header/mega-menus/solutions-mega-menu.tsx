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
            description: "Sovereign AI for Government",
          },
          {
            iconSrc: "",
            iconAlt: "BFSI",
            title: "BFSI",
            description: "Compliance-Ready AI Infra",
          },
          {
            iconSrc: "/icons/media-vfx.svg",
            iconAlt: "Media and VFX",
            title: "Media & VFX",
            description: "Render Farms & Pipelines",
          },
          {
            iconSrc: "/icons/healthcare.svg",
            iconAlt: "Healthcare",
            title: "Healthcare",
            description: "Clinical-Grade Compliance",
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
            description: "LoRA · QLoRA · full fine-tune",
          },
          {
            iconSrc: "/icons/object-storage.svg",
            iconAlt: "Generative AI",
            title: "Generative AI",
            description: "SDXL · FLUX · video models",
          },
          {
            iconSrc: "/icons/agentic-workflows.svg",
            iconAlt: "Agentic workflows",
            title: "Agentic Workflows",
            description: "Multi-Step AI Pipelines",
          },
        ],
      },
    ],
  },
];

export default function SolutionsMegaMenu() {
  return (
    <div className="flex w-full flex-col gap-4 p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        {SOLUTIONS_MEGA_MENU_COLUMNS.map((column, columnIndex) => (
          <div key={columnIndex} className="min-w-0 w-full md:min-w-[280px] lg:min-w-[350px]">
            {column.sections.map((section, sectionIndex) => (
              <div key={section.heading}>
                <Text
                  textColor="blue-40"
                  className={sectionIndex > 0 ? "mt-4 md:mt-10" : undefined}
                >
                  {section.heading}
                </Text>
                <Divider orientation="horizontal" className="my-2 bg-gray-60" />
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
