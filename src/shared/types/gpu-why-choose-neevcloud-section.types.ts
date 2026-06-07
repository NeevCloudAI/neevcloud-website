export type GpuWhyChooseNeevcloudCard = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type GpuWhyChooseNeevcloudCardProps = {
  title: string;
  description: string;
  icon: string;
  className?: string;
};

export type GpuWhyChooseNeevcloudSubsection = {
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  description?: string;
  cards: readonly GpuWhyChooseNeevcloudCard[];
};

export type GpuWhyChooseNeevcloudSectionContent = {
  whyChoose: GpuWhyChooseNeevcloudSubsection;
  roi: GpuWhyChooseNeevcloudSubsection;
  buttonText: string;
};

export type GpuWhyChooseNeevcloudSectionProps = GpuWhyChooseNeevcloudSectionContent & {
  className?: string;
};
