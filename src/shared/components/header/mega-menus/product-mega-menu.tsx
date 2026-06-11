import { cn } from "@/lib/utils";
import { Divider, Text } from "@/shared/ui-lib";
import Link from "next/link";
import MegaMenuLinkRow, {
  type MegaMenuLinkRowProps,
} from "./mega-menu-link-row";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

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
];

const PRODUCT_MEGA_MENU_GPU_LINKS = [
  { label: "H100", href: "/nvidia-h100" },
  { label: "H200", href: "/nvidia-h200" },
  { label: "B200", href: "/nvidia-b200" },
  { label: "B300", href: "/nvidia-b300" },
  { label: "A30", href: "/nvidia-a30" },
  { label: "MI300X", href: "/nvidia-mi300x" },
] as const;

const gpuLinkClassName = cn(
  "outline-offset-2 transition-colors hover:text-primary",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary",
);

export default function ProductMegaMenu() {
  return (
    <div className="flex w-full flex-col gap-4 p-4 md:p-7.5 shadow-sm">
      <div className="flex flex-col gap-x-6 gap-y-8 md:flex-row md:gap-8">
        {PRODUCT_MEGA_MENU_COLUMNS.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="min-w-0 w-full md:min-w-[280px] lg:min-w-[350px]"
          >
            {column.sections.map((section, sectionIndex) => (
              <div key={section.heading}>
                <Text
                  textColor="blue-40"
                  className={sectionIndex > 0 ? "mt-4 md:mt-8" : undefined}
                >
                  {section.heading}
                </Text>
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
      <Divider orientation="horizontal" />
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <nav aria-label="Available GPUs">
          <ul className="m-0 flex list-none flex-wrap items-center p-0">
            {PRODUCT_MEGA_MENU_GPU_LINKS.map((link, index) => (
              <li key={link.label} className="flex items-center">
                {index > 0 ? (
                  <Text textColor="blue-40" aria-hidden="true">
                    &nbsp; · &nbsp;
                  </Text>
                ) : null}
                <Link href={link.href} className={gpuLinkClassName}>
                  <Text textColor="blue-40">{link.label}</Text>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href={EXTERNAL_LINKS.aiSupercloudConsole} target="_blank">
          <Text textColor="gray-75">Compare GPUs -&gt;</Text>
        </Link>
      </div>
    </div>
  );
}
