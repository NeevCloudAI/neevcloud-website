export type GovernmentServiceItem = {
  id: string;
  index: string;
  title: string;
  specs: string;
  description: string;
  highlight: string;
  highlightSubtext: string;
  href: string;
};

export type GovernmentServiceRowProps = {
  service: GovernmentServiceItem;
  className?: string;
};
