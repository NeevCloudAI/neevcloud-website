export type SecurityByDesignFeature = {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
};

export type SecurityByDesignCardItem = {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  features: readonly SecurityByDesignFeature[];
};

export type SecurityByDesignCardProps = {
  item: SecurityByDesignCardItem;
  className?: string;
};
