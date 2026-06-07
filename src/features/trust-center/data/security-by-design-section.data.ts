import type { SecurityByDesignCardItem } from "../types/security-by-design-section.types";

export const SECURITY_BY_DESIGN_SECTION = {
  titlePrefix: "Security by",
  titleHighlight: "Design",
  description:
    "Security isn't added later. It's built into every layer of NeevCloud infrastructure from the ground up.",
} as const;

export const SECURITY_BY_DESIGN_ITEMS: readonly SecurityByDesignCardItem[] = [
  {
    id: "infrastructure-security",
    title: "Infrastructure Security",
    imageSrc: "/images/infrastructure-security.png",
    imageAlt: "Server room with secure infrastructure",
    features: [
      {
        id: "physical-security",
        title: "Physical Security",
        description:
          "24x7 monitoring, biometric access controls, and redundant power and cooling systems. Uptime Institute Tier III certified facilities.",
        iconSrc: "/icons/security.svg",
        iconAlt: "Physical security",
      },
      {
        id: "network-security",
        title: "Network Security",
        description:
          "Private networking with firewall controls, DDoS protection, and network isolation. Traffic encryption.",
        iconSrc: "/icons/wifi.svg",
        iconAlt: "Network security",
      },
      {
        id: "data-security",
        title: "Data Security",
        description:
          "Encryption at rest and in transit. Multi-zone redundancy. Automated backup and recovery.",
        iconSrc: "/icons/data-security.svg",
        iconAlt: "Data security",
      },
    ],
  },
  {
    id: "platform-security",
    title: "Platform Security",
    imageSrc: "/images/platform-security.png",
    imageAlt: "Digital shield representing platform security",
    features: [
      {
        id: "identity-and-access",
        title: "Identity and Access",
        description:
          "Multi-factor authentication, role-based access controls, and API key management. Granular permissions at resource level.",
        iconSrc: "/icons/access.svg",
        iconAlt: "Identity and access",
      },
      {
        id: "monitoring-and-logging",
        title: "Monitoring and Logging",
        description:
          "Real-time security monitoring, audit logging, and intrusion detection, alerts for suspicious activity.",
        iconSrc: "/icons/monitoring.svg",
        iconAlt: "Monitoring and logging",
      },
      {
        id: "vulnerability-management",
        title: "Vulnerability Management",
        description:
          "Regular security assessments, penetration testing, and patch management.",
        iconSrc: "/icons/vulnerability.svg",
        iconAlt: "Vulnerability management",
      },
    ],
  },
  {
    id: "operational-security",
    title: "Operational Security",
    imageSrc: "/images/operational-security.png",
    imageAlt: "Security operations monitoring dashboard",
    features: [
      {
        id: "security-updates",
        title: "Security Updates",
        description:
          "Regular system updates, security patches applied automatically, and transparent communication about security events.",
        iconSrc: "/icons/security-updates.svg",
        iconAlt: "Security updates",
      },
      {
        id: "data-residency",
        title: "Data Residency",
        description:
          "Infrastructure operates within India. Complete control over data location and jurisdiction.",
        iconSrc: "/icons/hard-disk.svg",
        iconAlt: "Data residency",
      },
      {
        id: "incident-response",
        title: "Incident Response",
        description:
          "Dedicated security team with 24×7 monitoring and documented incident response procedures.",
        iconSrc: "/icons/incident.svg",
        iconAlt: "Incident response",
      },
    ],
  },
] as const;
