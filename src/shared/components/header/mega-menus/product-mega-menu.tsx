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

const PRODUCT_MEGA_MENU_COLUMNS: MegaMenuColumn[] = [
  {
    sections: [
      {
        heading: "COMPUTE",
        links: [
          {
            iconSrc: "/icons/cpu-instance.svg",
            iconAlt: "CPU instance",
            title: "CPU Instance",
            description: "Burstable & Dedicated Nodes",
            href: "/cpu-cluster",
          },
          {
            iconSrc: "/icons/gpu-instance.svg",
            iconAlt: "GPU instance",
            title: "GPU Instance",
            description: "Burstable & Dedicated Nodes",
            href: "/gpu-cluster",
          },
        ],
      },
      {
        heading: "ORCHESTRATION",
        links: [
          {
            iconSrc: "/icons/managed-k8s.svg",
            iconAlt: "Managed Kubernetes",
            title: "Managed Kubernetes",
            description: "NKE · GPU-aware scheduling",
            href: "/managed-kubernetes",
          },
        ],
      },
    ],
  },
  {
    sections: [
      {
        heading: "STORAGE",
        links: [
          {
            iconSrc: "/icons/nvme.svg",
            iconAlt: "NVMe storage",
            title: "High-Performance NVMe",
            href: "/nvme",
            description: "Sub-Millisecond Latency",
          },
          {
            iconSrc: "/icons/object-storage.svg",
            iconAlt: "Object storage",
            title: "Object Storage",
            description: "S3-compatible . India-resident",
          },
        ],
      },
      {
        heading: "AI SERVICES",
        links: [
          {
            iconSrc: "/icons/serverless-api.svg",
            iconAlt: "Serverless APIs",
            title: "Serverless APIs",
            description: "Inference Without Infra",
            href: "/serverless-inference",
          },
          {
            iconSrc: "/icons/model-playground.svg",
            iconAlt: "Model Playground",
            title: "Model Playground",
            description: "Browser-Based Testing",
            href: "/model-playground",
          },
        ],
      },
    ],
  },
];

export default function ProductMegaMenu() {
  return (
    <div className="flex w-full flex-col gap-4 p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        {PRODUCT_MEGA_MENU_COLUMNS.map((column, columnIndex) => (
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
      <Divider orientation="horizontal" />
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Text textColor="blue-40">
          H100 &nbsp; · &nbsp; H200 &nbsp; · &nbsp; B200 &nbsp; · &nbsp; B300
          &nbsp; · &nbsp; A30 &nbsp; · &nbsp; MI300X
        </Text>
        <Button variant="ghost" className="text-gray-75" spacing="none">
          Compare GPUs -&gt;
        </Button>
      </div>
    </div>
  );
}
