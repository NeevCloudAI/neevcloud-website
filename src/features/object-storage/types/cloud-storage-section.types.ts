export type CloudStorageFeature = {
  text: string;
};

export type CloudStorageCardData = {
  id: string;
  iconSrc: string;
  title: string;
  description: string;
  features: readonly CloudStorageFeature[];
};
