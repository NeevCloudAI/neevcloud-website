export type DeployInstanceImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type DeployInstanceSectionProps = {
  showBGImage?: boolean;
  showLogo?: boolean;
  showBlur?: boolean;
  title: React.ReactNode;
  description: string;
  image: DeployInstanceImage;
  buttonText1?: string;
  buttonText2?: string;
};
