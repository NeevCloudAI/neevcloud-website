export type GpuStoragePricingItem = {
  id: string;
  title: string;
  price: string;
  priceUnit?: string;
  footnote: string;
};

export type GpuStoragePricingCardProps = {
  item: GpuStoragePricingItem;
};
