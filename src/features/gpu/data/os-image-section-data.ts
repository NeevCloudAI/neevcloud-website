import type { OsImageCard, OsSectionId } from "@/features/gpu/data/os-image-section-types";

export const OS_IMAGE_SECTIONS: Record<OsSectionId, OsImageCard[]> = {
  "base-operating-systems": [
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
  ],
  "pre-configured-images": [
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
  ],
};

export const OS_IMAGE_SECTION_TABS = [
  { id: "base-operating-systems", label: "Base Operating Systems" },
  { id: "pre-configured-images", label: "Pre-Configured Images" },
] as const satisfies ReadonlyArray<{ id: OsSectionId; label: string }>;

