export type AiSuperclustersComplianceTile = {
  title: string;
  description: string;
};

export const AI_SUPERCLUSTERS_COMPLIANCE_TILES: readonly AiSuperclustersComplianceTile[] =
  [
    { title: "SOC 2 Type II", description: "Audited annually" },
    { title: "ISO 27001:2022", description: "Information security" },
    { title: "DPDP 2023", description: "India data residency" },
    { title: "PCI DSS Ready", description: "Payment-grade security" },
  ] as const;
