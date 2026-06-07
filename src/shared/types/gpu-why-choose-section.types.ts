export type GpuWhyChooseFeature = {
  id: string;
  title: string;
  description: string;
};

export type GpuWhyChooseSectionContent = {
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  features: readonly GpuWhyChooseFeature[];
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
};

export type GpuWhyChooseSectionProps = GpuWhyChooseSectionContent & {
  className?: string;
};
