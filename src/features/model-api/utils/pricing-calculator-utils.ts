import {
  MAX_REQUESTS,
  MIN_REQUESTS,
  PRICE_PER_REQUEST,
  type WorkloadCategoryId,
  type WorkloadMix,
} from "@/features/model-api/data/pricing-calculator-data";

export function formatRequests(value: number): string {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    return Number.isInteger(millions)
      ? `${millions}M`
      : `${millions.toFixed(1).replace(/\.0$/, "")}M`;
  }

  if (value >= 1_000) {
    const thousands = value / 1_000;
    return Number.isInteger(thousands)
      ? `${thousands}K`
      : `${thousands.toFixed(1).replace(/\.0$/, "")}K`;
  }

  return value.toLocaleString("en-IN");
}

export function formatCurrency(value: number): string {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export function requestsToSlider(requests: number): number {
  const minLog = Math.log10(MIN_REQUESTS);
  const maxLog = Math.log10(MAX_REQUESTS);
  const valueLog = Math.log10(requests);
  return ((valueLog - minLog) / (maxLog - minLog)) * 100;
}

export function sliderToRequests(sliderValue: number): number {
  const minLog = Math.log10(MIN_REQUESTS);
  const maxLog = Math.log10(MAX_REQUESTS);
  const valueLog = minLog + (sliderValue / 100) * (maxLog - minLog);
  return Math.round(Math.pow(10, valueLog));
}

export function updateWorkloadMix(
  mix: WorkloadMix,
  category: WorkloadCategoryId,
  nextValue: number,
): WorkloadMix {
  const clamped = Math.max(0, Math.min(100, Math.round(nextValue)));
  const delta = clamped - mix[category];

  if (delta === 0) {
    return mix;
  }

  const next: WorkloadMix = { ...mix, [category]: clamped };
  const others = (Object.keys(mix) as WorkloadCategoryId[]).filter(
    (key) => key !== category,
  );
  const othersTotal = others.reduce((sum, key) => sum + mix[key], 0);

  if (othersTotal === 0) {
    return next;
  }

  let distributed = 0;
  for (const key of others) {
    const adjustment = Math.round((mix[key] / othersTotal) * -delta);
    next[key] = Math.max(0, mix[key] + adjustment);
    distributed += next[key] - mix[key];
  }

  const remainder = -delta - distributed;
  if (remainder !== 0) {
    const adjustable = others.find((key) => next[key] > 0) ?? others[0];
    next[adjustable] = Math.max(0, next[adjustable] + remainder);
  }

  const total = Object.values(next).reduce((sum, value) => sum + value, 0);
  if (total !== 100) {
    const adjustable =
      others.find((key) => key !== category && next[key] > 0) ?? others[0];
    next[adjustable] = Math.max(0, next[adjustable] + (100 - total));
  }

  return next;
}

export function calculateCategoryCost(
  totalRequests: number,
  percentage: number,
  category: WorkloadCategoryId,
): number {
  const requests = totalRequests * (percentage / 100);
  return requests * PRICE_PER_REQUEST[category];
}

export function calculateMonthlyCost(
  totalRequests: number,
  mix: WorkloadMix,
): number {
  return (Object.keys(mix) as WorkloadCategoryId[]).reduce(
    (sum, category) =>
      sum + calculateCategoryCost(totalRequests, mix[category], category),
    0,
  );
}
