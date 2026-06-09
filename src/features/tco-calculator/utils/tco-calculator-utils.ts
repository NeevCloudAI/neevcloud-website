import {
  TCO_CALCULATOR_COMMITMENT_BY_ID,
  TCO_CALCULATOR_GPU_TYPE_BY_ID,
  TCO_CALCULATOR_PROVIDERS,
  TCO_CALCULATOR_STORAGE_RATES,
} from "../data/calculator-section.data";
import type {
  TcoCalculatorBreakdown,
  TcoCalculatorConfig,
  TcoCalculatorProviderId,
} from "../types/calculator-section.types";

export function formatCurrency(value: number): string {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export function formatRatePerHour(value: number): string {
  return `₹${value.toLocaleString("en-IN")}/hr`;
}

export function valueToSlider(value: number, min: number, max: number): number {
  if (max === min) {
    return 0;
  }

  return ((value - min) / (max - min)) * 100;
}

export function sliderToValue(
  sliderValue: number,
  min: number,
  max: number,
): number {
  return Math.round(min + (sliderValue / 100) * (max - min));
}

export function formatStorageGb(valueGb: number): string {
  if (valueGb >= 1024) {
    const tb = valueGb / 1024;
    return `${Number.isInteger(tb) ? tb : tb.toFixed(1)} TB`;
  }

  return `${valueGb.toLocaleString("en-IN")} GB`;
}

export function formatInferenceTokens(mn: number): string {
  if (mn >= 1000) {
    return `${(mn / 1000).toFixed(mn % 1000 === 0 ? 0 : 1)} Bn/mo`;
  }

  return `${mn.toLocaleString("en-IN")} Mn/mo`;
}

export function calculateTcoBreakdown(
  config: TcoCalculatorConfig,
): TcoCalculatorBreakdown {
  const gpuType = TCO_CALCULATOR_GPU_TYPE_BY_ID[config.gpuTypeId];
  const commitment = TCO_CALCULATOR_COMMITMENT_BY_ID[config.commitmentId];
  const rates = TCO_CALCULATOR_STORAGE_RATES;

  const gpuSubtotal =
    config.gpuCount * gpuType.ratePerHour * config.hoursPerMonth;
  const gpuCompute =
    gpuSubtotal * (1 - commitment.discountPercent / 100);

  const storageTotal =
    config.localNvmeGb * rates.localNvmePerGbMonth +
    config.networkStorageGb * rates.networkStoragePerGbMonth +
    config.objectStorageGb * rates.objectStoragePerGbMonth;

  const dataTransferCost =
    config.dataTransferGb * rates.neevcloudDataTransferPerGb;
  const inferenceCost =
    config.inferenceTokensMn * rates.inferencePerMillionTokens;

  const monthlyTotal =
    gpuCompute + storageTotal + dataTransferCost + inferenceCost;

  const providerTotals = TCO_CALCULATOR_PROVIDERS.reduce(
    (acc, provider) => {
      acc[provider.id] = monthlyTotal * provider.costMultiplier;
      return acc;
    },
    {} as Record<TcoCalculatorProviderId, number>,
  );

  const providerSavings = TCO_CALCULATOR_PROVIDERS.reduce(
    (acc, provider) => {
      const competitorTotal = providerTotals[provider.id];
      const amount = Math.max(0, competitorTotal - monthlyTotal);
      const percent =
        competitorTotal > 0
          ? Math.round((amount / competitorTotal) * 100)
          : 0;

      acc[provider.id] = { amount, percent };
      return acc;
    },
    {} as TcoCalculatorBreakdown["providerSavings"],
  );

  return {
    monthlyTotal,
    gpuCompute,
    storageTotal,
    inferenceCost,
    dataTransferCost,
    summaryLabel: `${config.gpuCount}x ${gpuType.label} • ${config.hoursPerMonth}H/MO`,
    providerTotals,
    providerSavings,
  };
}
