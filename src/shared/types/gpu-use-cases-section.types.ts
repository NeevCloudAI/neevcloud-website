export type GpuUseCasesCard = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type GpuUseCasesSectionContent = {
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  cards: readonly GpuUseCasesCard[];
};

export type GpuUseCasesCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
};

export type GpuUseCasesSectionProps = GpuUseCasesSectionContent & {
  className?: string;
};
