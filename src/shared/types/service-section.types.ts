export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  specs: string;
  description: string;
  highlight: string;
  highlightSubtext: string;
  href: string;
}

export interface ServiceRowProps {
  service: ServiceItem;
  className?: string;
}

export interface ServiceListSectionProps {
  /** Unique id applied to the <h2> and used as aria-labelledby on the <section> */
  sectionId: string;
  /** Plain text part of the heading, e.g. "Complete AI Platform " */
  heading: string;
  /** Highlighted (primary-coloured) part of the heading, e.g. "for government." */
  headingHighlight?: string;
  /** Subtitle / description below the heading */
  description: string;
  /** List of service rows to render */
  services: readonly ServiceItem[];
  /** Accessible label for the <ul>, e.g. "Government AI platform services" */
  ariaLabel: string;
}
