export function formatStorageGb(value: number): string {
  return `${value}GB`;
}

export function formatCurrency(value: number): string {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export function calculateMonthlyStorageCost(
  storageGb: number,
  pricePerGbMonth: number,
): number {
  return storageGb * pricePerGbMonth;
}

export function storageToSlider(
  storageGb: number,
  minGb: number,
  maxGb: number,
): number {
  if (maxGb === minGb) {
    return 0;
  }
  return ((storageGb - minGb) / (maxGb - minGb)) * 100;
}

export function sliderToStorage(
  sliderValue: number,
  minGb: number,
  maxGb: number,
): number {
  const storage = minGb + (sliderValue / 100) * (maxGb - minGb);
  return Math.round(storage);
}
