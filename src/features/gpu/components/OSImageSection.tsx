"use client";
import { cn } from "@/lib/utils";
import Container from "@/shared/components/container";
import { Button, Divider, Text } from "@/shared/ui-lib";
import Image from "next/image";
import { useMemo, useState } from "react";

const OSImageCard = ({
  title,
  description,
  image,
  cards,
  isSelected,
  onSelect,
}: {
  title: string;
  description: string;
  image: string;
  cards: { name: string; isActive: boolean }[];
  isSelected: boolean;
  onSelect: () => void;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-xl px-4 py-8 flex flex-col overflow-hidden cursor-pointer transition-colors",
        isSelected ? "bg-primary text-white" : "bg-gray-10"
      )}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      aria-pressed={isSelected}
      aria-label={`Select ${title}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 p-2 bg-white rounded-md flex items-center justify-center">
          <Image src={image} alt={title} width={35} height={35} />
        </div>
        <div>
          <Text as="h3" weight="semibold">
            {title}
          </Text>
          <Text as="h6">{description}</Text>
        </div>
      </div>
      <Divider
        orientation="horizontal"
        className="my-4 bg-gray-60 rounded-md"
      />
      <div className="flex items-center gap-2">
        {cards.map((card) => (
          <Text
            as="small"
            key={card.name}
            className={cn(
              card.isActive
                ? "bg-primary text-white px-3 py-1 rounded-full"
                : isSelected
                  ? "bg-white/20 text-white px-3 py-1 rounded-full"
                  : "bg-gray-60 px-3 py-1 rounded-full"
            )}
          >
            {card.name}
          </Text>
        ))}
      </div>
      <div className="absolute bottom-0 right-0 opacity-80">
        <Image
          src="/icons/green-logo.svg"
          alt="Arrow Right"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

const BASE_OPERATING_SYSTEMS = [
  {
    title: "Ubuntu",
    description: "LTS & Latest",
    image: "/icons/ubuntu.svg",
    cards: [
      { name: "LTS", isActive: true },
      { name: "Popular", isActive: false },
    ],
  },
  {
    title: "CentOS",
    description: "Stream 9",
    image: "/icons/centos.svg",
    cards: [
      { name: "LTS", isActive: true },
      { name: "Linux", isActive: false },
    ],
  },
  {
    title: "Windows",
    description: "Server & Desktop",
    image: "/icons/windows.svg",
    cards: [
      { name: "Microsoft", isActive: false },
      { name: "RDP-ready", isActive: false },
    ],
  },
  {
    title: "AlmaLinux",
    description: "Open Enterprise",
    image: "/icons/alma-linux.svg",
    cards: [
      { name: "RHEL-compat", isActive: false },
      { name: "Free", isActive: true },
    ],
  },
  {
    title: "Cloud Linux",
    description: "Hosting-optimized",
    image: "/icons/cloud-linux.svg",
    cards: [
      { name: "Hosting", isActive: false },
      { name: "Multi-tenant", isActive: false },
    ],
  },
  {
    title: "OpenSUSE",
    description: "Leap & Tumbleweed",
    image: "/icons/open-suse.svg",
    cards: [
      { name: "Stable", isActive: false },
      { name: "SUSE", isActive: false },
    ],
  },
  {
    title: "Fedora",
    description: "Cutting-Edge",
    image: "/icons/fedora.svg",
    cards: [
      { name: "Bleeding-Edge", isActive: false },
      { name: "Linux", isActive: false },
    ],
  },
  {
    title: "Debian",
    description: "Rock-Solid",
    image: "/icons/debian.svg",
    cards: [
      { name: "Stable", isActive: false },
      { name: "Linux", isActive: false },
    ],
  },
  {
    title: "Red Hat",
    description: "Enterprise Linux",
    image: "/icons/redhat.svg",
    cards: [
      { name: "BYOL", isActive: false },
      { name: "Enterprise", isActive: false },
    ],
  },
  {
    title: "Rocky Linux",
    description: "RHEL drop-in",
    image: "/icons/rocky-linux.svg",
    cards: [
      { name: "RHEL-compat", isActive: false },
      { name: "Enterprise", isActive: false },
    ],
  },
  {
    title: "Oracle Linux",
    description: "UEK-Ready",
    image: "/icons/oracle.svg",
    cards: [
      { name: "Enterprise", isActive: false },
      { name: "UEK", isActive: false },
    ],
  },
  {
    title: "Custom ISO",
    description: "Bring your own",
    image: "/icons/plus.svg",
    cards: [
      { name: "Upload Any OS", isActive: false },
      { name: "Any Distro", isActive: false },
    ],
  },
];

const PRE_CONFIGURED_IMAGES = [
  {
    title: "Plesk",
    description: "Alma 9",
    image: "/icons/plesk.svg",
    cards: [{ name: "Hosting Panel", isActive: false }],
  },
  {
    title: "Zabbix",
    description: "6.4",
    image: "/icons/zabbix.svg",
    cards: [{ name: "Monitoring", isActive: false }],
  },
  {
    title: "PostgreSQL",
    description: "14.0",
    image: "/icons/postgresql.svg",
    cards: [{ name: "SQL Database", isActive: false }],
  },
  {
    title: "MariaDB",
    description: "10.6",
    image: "/icons/mariadb.svg",
    cards: [{ name: "SQL Database", isActive: false }],
  },
  {
    title: "Docker",
    description: "26.1.4",
    image: "/icons/docker.svg",
    cards: [{ name: "Container", isActive: false }],
  },
  {
    title: "ClickHouse DB",
    description: "24.6",
    image: "/icons/clickhouse.svg",
    cards: [
      { name: "Database", isActive: false },
      { name: "OLAP", isActive: false },
    ],
  },
  {
    title: "OpenClaw",
    description: "2026.3.11",
    image: "/icons/openclaw.svg",
    cards: [{ name: "Game Engine", isActive: false }],
  },
  {
    title: "CloudPanel",
    description: "2.4.2",
    image: "/icons/cloudpanel.svg",
    cards: [{ name: "Hosting Panel", isActive: false }],
  },
  {
    title: "GitLab",
    description: "17.0",
    image: "/icons/gitlab.svg",
    cards: [
      { name: "DevOps", isActive: false },
      { name: "CI/CD", isActive: false },
    ],
  },
  {
    title: "Ubuntu RDP",
    description: "22.04",
    image: "/icons/ubuntu.svg",
    cards: [
      { name: "Remote Desktop", isActive: false },
      { name: "XRDP", isActive: false },
    ],
  },
  {
    title: "Visual Studio",
    description: "Ubuntu Desktop",
    image: "/icons/visual-studio.svg",
    cards: [{ name: "IDE", isActive: false }],
  },
  {
    title: "Wordpress",
    description: "Website Builder",
    image: "/icons/wordpress.svg",
    cards: [{ name: "CMS", isActive: false }],
  },
  {
    title: "Nginx",
    description: "1.18.0",
    image: "/icons/nginx.svg",
    cards: [
      { name: "Web Server", isActive: false },
      { name: "Proxy", isActive: false },
    ],
  },
  {
    title: "Tally",
    description: "Tally Prime",
    image: "/icons/tally.svg",
    cards: [
      { name: "ERP", isActive: false },
      { name: "Accounting", isActive: false },
    ],
  },
  {
    title: "OpenLiteSpeed",
    description: "1.7.19",
    image: "/icons/litespeed.svg",
    cards: [{ name: "Web Server", isActive: false }],
  },
  {
    title: "NodeJS",
    description: "20.14.0",
    image: "/icons/nodejs.svg",
    cards: [
      { name: "Runtime", isActive: false },
      { name: "Javascript", isActive: false },
    ],
  },
  {
    title: "Sophos-XG",
    description: "21.0",
    image: "/icons/sophos-xg.svg",
    cards: [
      { name: "Firewall", isActive: false },
      { name: "Security", isActive: false },
    ],
  },
  {
    title: "FortiGate",
    description: "7.6.2",
    image: "/icons/fortigate.svg",
    cards: [
      { name: "Firewall", isActive: false },
      { name: "Security", isActive: false },
    ],
  },
  {
    title: "OPNsense",
    description: "24.0",
    image: "/icons/opnsense.svg",
    cards: [{ name: "Firewall", isActive: false }],
  },
  {
    title: "Acronis",
    description: "7.0",
    image: "/icons/acronis.svg",
    cards: [
      { name: "Backup", isActive: false },
      { name: "Recovery", isActive: false },
    ],
  },
];

const OSImageSection = () => {
  const [activeSection, setActiveSection] = useState<
    "base-operating-systems" | "pre-configured-images"
  >("base-operating-systems");
  const [selectedImageTitle, setSelectedImageTitle] = useState<string>("");

  const imageList = useMemo(
    () =>
      activeSection === "base-operating-systems"
        ? BASE_OPERATING_SYSTEMS
        : PRE_CONFIGURED_IMAGES,
    [activeSection]
  );
  const selectedImage = useMemo(
    () => imageList.find((item) => item.title === selectedImageTitle),
    [imageList, selectedImageTitle]
  );

  return (
    <Container className="py-[3vh] md:py-[7vh]">
      <Text as="h2" align="center" weight="semibold">
        Pre-built OS, and Images
      </Text>
      <Text as="h2" align="center" weight="semibold" textColor="primary">
        Ready to Deploy
      </Text>
      <Text as="h6" align="center" textColor="black" className="mt-2">
        Boot in seconds with curated stacks, or upload your own ISO.
      </Text>
      <div className="flex items-center justify-center mt-4 md:mt-12 mb-2 md:mb-4">
        <Button
          className="rounded-r-none"
          weight="semibold"
          backgroundColor={
            activeSection === "base-operating-systems"
              ? "primary"
              : "cloud-gray"
          }
          textColor={
            activeSection === "base-operating-systems" ? undefined : "black"
          }
          onClick={() => setActiveSection("base-operating-systems")}
        >
          Base Operating Systems
        </Button>
        <Button
          className="rounded-l-none"
          weight="semibold"
          backgroundColor={
            activeSection === "pre-configured-images" ? "primary" : "cloud-gray"
          }
          textColor={
            activeSection === "pre-configured-images" ? undefined : "black"
          }
          onClick={() => setActiveSection("pre-configured-images")}
        >
          Pre-Configured Images
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {imageList.map((item) => (
          <OSImageCard
            key={item.title}
            {...item}
            isSelected={selectedImageTitle === item.title}
            onSelect={() => setSelectedImageTitle(item.title)}
          />
        ))}
      </div>
      <div className="mt-6 rounded-lg bg-tertiary p-4 md:px-8 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {selectedImage ? (
          <div className="flex items-center gap-1">
            <Text as="h4" textColor="blue-40" weight="normal">
              Selected:
            </Text>
            <Text as="h4" textColor="white" weight="normal">
              {`${selectedImage.title} - ${selectedImage.description}`}
            </Text>
          </div>
        ) : (
          <Text as="h4" textColor="white" weight="normal">
            No Image selected, pick one to continue
          </Text>
        )}
        <Button
          weight="semibold"
          spacing="lg"
          className="w-full md:w-auto"
          disabled={!selectedImage}
          aria-disabled={!selectedImage}
        >
          Continue &nbsp; &rarr;
        </Button>
      </div>
    </Container>
  );
};

export default OSImageSection;
