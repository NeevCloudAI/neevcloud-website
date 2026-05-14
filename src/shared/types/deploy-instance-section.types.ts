export type DeployInstanceImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type DeployInstanceSectionProps = {
  title: React.ReactNode;
  description1: string;
  description2?: string;
  description3?: string;
  image: DeployInstanceImage;
  buttonText1: string;
  buttonText2?: string;
};
