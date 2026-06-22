import type { ApplicationCardItem } from "@/shared/types/application-card.types";

export const HEALTHCARE_APPLICATION_CARDS: readonly ApplicationCardItem[] = [
  {
    id: "drug-discovery",
    className: "md:col-span-3 md:row-span-2",
    label: "01 - FEATURED",
    title: "Drug Discovery & Development",
    description:
      "Molecular modeling, protein folding, and compound screening on multi-GPU clusters. Accelerate drug identification and reduce development timelines.",
    icon: "/icons/drug-discovery.svg",
    image: "/images/webp/healthcare-drug-discovery.webp",
    imageSpacing: true,
    theme: "gray",
  },
  {
    id: "medical-imaging",
    className: "md:col-span-3",
    label: "02",
    title: "Medical Imaging Diagnostics",
    description:
      "Train deep learning models for radiology, pathology, and diagnostic imaging. Detect anomalies, classify conditions, and assist clinical decision.",
    icon: "/icons/medical-imaging.svg",
    theme: "gray",
  },
  {
    id: "genomic-sequencing",
    className: "md:col-span-3",
    label: "03",
    title: "Genomic Sequencing Analysis",
    description:
      "Process whole genome sequencing data, variant calling, and genomic studies. Compute for genomic analysis and precision medicine research.",
    icon: "/icons/genomic-analysis.svg",
    theme: "gray",
  },
  {
    id: "medical-research",
    className: "md:col-span-2",
    label: "04",
    title: "Medical Research Computing",
    description:
      "Academic medical centers and research institutions running computational studies, epidemiological models, and clinical trials analysis on compliant infrastructure.",
    icon: "/icons/medical-research.svg",
    theme: "gray",
  },
  {
    id: "startups-innovation",
    className: "md:col-span-2",
    label: "05 - ENTERPRISE",
    title: "Startups & Innovation",
    description:
      "Digital health platforms, telemedicine applications, and health tech startups deploying AI models with compliant, scalable infrastructure.",
    icon: "/icons/startups-innovation.svg",
    theme: "dark",
  },
  {
    id: "clinical-decision-support",
    className: "md:col-span-2",
    label: "06",
    title: "Clinical Decision Support",
    description:
      "ML models analyzing EHR data for treatment recommendations, patient outcome prediction, and clinical pathway optimization with privacy-preserving infrastructure.",
    icon: "/icons/clinical-decision.svg",
    theme: "gray",
  },
] as const;
