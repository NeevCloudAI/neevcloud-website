import type { EnterpriseSecurityCategory } from "../types/enterprise-section-types";

export const ENTERPRISE_SECURITY_CATEGORIES: readonly EnterpriseSecurityCategory[] =
  [
    {
      icon: "/icons/spark.svg",
      title: "Data Protection",
      description:
        "Military-grade encryption at rest and in transit with full key management controls.",
      features: [
        { id: 1, title: "Encryption at rest", badge: "AES-256" },
        { id: 2, title: "Encryption in transit", badge: "TLS 1.3" },
        { id: 3, title: "Key management controls" },
        { id: 4, title: "Secure data deletion" },
      ],
    },
    {
      icon: "/icons/brain.svg",
      title: "Access Controls",
      description:
        "Granular role-based access with multi-factor authentication and session management.",
      features: [
        { id: 1, title: "Role-based access control", badge: "RBAC" },
        { id: 2, title: "Multi-factor authentication", badge: "MFA" },
        { id: 3, title: "API key scoping" },
        { id: 4, title: "Session management" },
      ],
    },
    {
      icon: "/icons/idea.svg",
      title: "Monitoring & Compliance",
      description:
        "24/7 real-time security monitoring with automated incident response procedures.",
      features: [
        { id: 1, title: "Audit logging for all operations" },
        { id: 2, title: "Real-time security monitoring", badge: "24/7" },
        { id: 3, title: "Intrusion detection" },
        { id: 4, title: "Compliance reporting" },
        { id: 5, title: "Incident response procedures" },
      ],
    },
    {
      icon: "/icons/microscope.svg",
      title: "Compliance Documentation",
      description:
        "SOC 2 reports, ISO certificates, security attestations — available on request for qualified BFSI organizations.",
      features: [
        {
          id: 1,
          title: "SOC 2 Type II reports",
          badge: "Independently audited",
        },
        {
          id: 2,
          title: "ISO 27001 certificates",
          badge: "scope documentation",
        },
        { id: 3, title: "Security attestations", badge: "VAPT reports" },
        {
          id: 4,
          title: "Data processing agreements",
          badge: "Data Residency Terms",
        },
        {
          id: 5,
          title: "Compliance questionnaires",
          badge: "vendor security questionnaires",
        },
      ],
    },
  ] as const;
