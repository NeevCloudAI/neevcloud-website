import type { AmbitionDetailItem } from "@/shared/components/ambition-detail-card";

export const HEALTHCARE_AMBITION_ITEMS: readonly AmbitionDetailItem[] = [
  {
    id: "drug-discovery",
    label: "01",
    iconSrc: "/icons/shield.svg",
    iconAlt: "Drug discovery and research",
    title: "Drug Discovery & Research",
    description:
      "Accelerate molecular modeling, protein folding simulations, and drug candidate screening with multi-GPU clusters.",
    bullets: [
      { id: 1, title: "Molecular dynamics simulations" },
      { id: 2, title: "Protein structure prediction" },
      { id: 3, title: "Compound screening" },
      { id: 4, title: "Clinical trial data analysis" },
    ],
  },
  {
    id: "genomics",
    label: "02 · FLEXIBILITY",
    iconSrc: "/icons/bank.svg",
    iconAlt: "Genomics and bioinformatics",
    title: "Genomics & Bioinformatics",
    description:
      "Process genomic sequencing data, variant calling, and population-scale genomic studies with scalable GPU and CPU infrastructure.",
    bullets: [
      { id: 1, title: "Whole genome sequencing analysis" },
      { id: 2, title: "Variant annotation" },
      { id: 3, title: "Gene expression analysis" },
      { id: 4, title: "Population genomics studies" },
    ],
  },
  {
    id: "healthcare-analytics",
    label: "03",
    iconSrc: "/icons/file.svg",
    iconAlt: "Healthcare data analytics",
    title: "Healthcare Data Analytics",
    description:
      "Analyze electronic health records, patient outcomes, and clinical data with machine learning models.",
    bullets: [
      { id: 1, title: "Predictive patient outcomes" },
      { id: 2, title: "Clinical decision support" },
      { id: 3, title: "Population health analytics" },
      { id: 4, title: "Treatment optimization" },
    ],
  },
] as const;
