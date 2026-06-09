"use client";

import { useCallback, useMemo, useState } from "react";
import LinkComponent from "@/shared/ui-lib/link";
import { Text } from "@/shared/ui-lib";
import {
  DATA_TRANSFER_MAX_GB,
  DEFAULT_COMMITMENT_ID,
  DEFAULT_DATA_TRANSFER_GB,
  DEFAULT_GPU_COUNT,
  DEFAULT_GPU_TYPE_ID,
  DEFAULT_HOURS_PER_MONTH,
  DEFAULT_INFERENCE_TOKENS_MN,
  DEFAULT_LOCAL_NVME_GB,
  DEFAULT_NETWORK_STORAGE_GB,
  DEFAULT_OBJECT_STORAGE_GB,
  GPU_COUNT_MAX,
  GPU_COUNT_MIN,
  HOURS_MAX,
  HOURS_MIN,
  INFERENCE_TOKENS_MAX_MN,
  LOCAL_NVME_MAX_GB,
  NETWORK_STORAGE_MAX_GB,
  OBJECT_STORAGE_MAX_GB,
  PROVIDER_COMPARISON_SECTION_ID,
} from "../../constants/calculator-section.constants";
import { TCO_CALCULATOR_SECTION } from "../../data/calculator-section.data";
import type {
  TcoCalculatorCommitmentId,
  TcoCalculatorGpuTypeId,
} from "../../types/calculator-section.types";
import {
  calculateTcoBreakdown,
  formatInferenceTokens,
  formatStorageGb,
} from "../../utils/tco-calculator-utils";
import TcoCalculatorCommitmentSelector from "./TcoCalculatorCommitmentSelector";
import TcoCalculatorFormSection from "./TcoCalculatorFormSection";
import TcoCalculatorGpuTypeGrid from "./TcoCalculatorGpuTypeGrid";
import TcoCalculatorSliderField from "./TcoCalculatorSliderField";
import TcoCalculatorSummaryPanel from "./TcoCalculatorSummaryPanel";

const TcoCalculatorConfigClient = () => {
  const [gpuTypeId, setGpuTypeId] =
    useState<TcoCalculatorGpuTypeId>(DEFAULT_GPU_TYPE_ID);
  const [gpuCount, setGpuCount] = useState(DEFAULT_GPU_COUNT);
  const [hoursPerMonth, setHoursPerMonth] = useState(DEFAULT_HOURS_PER_MONTH);
  const [commitmentId, setCommitmentId] =
    useState<TcoCalculatorCommitmentId>(DEFAULT_COMMITMENT_ID);
  const [localNvmeGb, setLocalNvmeGb] = useState(DEFAULT_LOCAL_NVME_GB);
  const [networkStorageGb, setNetworkStorageGb] = useState(
    DEFAULT_NETWORK_STORAGE_GB,
  );
  const [objectStorageGb, setObjectStorageGb] = useState(
    DEFAULT_OBJECT_STORAGE_GB,
  );
  const [dataTransferGb, setDataTransferGb] = useState(
    DEFAULT_DATA_TRANSFER_GB,
  );
  const [inferenceTokensMn, setInferenceTokensMn] = useState(
    DEFAULT_INFERENCE_TOKENS_MN,
  );

  const breakdown = useMemo(
    () =>
      calculateTcoBreakdown({
        gpuTypeId,
        gpuCount,
        hoursPerMonth,
        commitmentId,
        localNvmeGb,
        networkStorageGb,
        objectStorageGb,
        dataTransferGb,
        inferenceTokensMn,
      }),
    [
      gpuTypeId,
      gpuCount,
      hoursPerMonth,
      commitmentId,
      localNvmeGb,
      networkStorageGb,
      objectStorageGb,
      dataTransferGb,
      inferenceTokensMn,
    ],
  );

  const scrollToBreakdown = useCallback(() => {
    document
      .getElementById(PROVIDER_COMPARISON_SECTION_ID)
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-5">
        <div className="flex flex-1 flex-col rounded-xl border border-white-10 bg-white-5 p-4 md:p-6 lg:p-8">
          <TcoCalculatorFormSection step={1} title="GPU Configuration">
            <TcoCalculatorGpuTypeGrid
              activeGpuTypeId={gpuTypeId}
              onGpuTypeSelect={setGpuTypeId}
            />

            <TcoCalculatorSliderField
              label="Number of GPUs"
              value={gpuCount}
              min={GPU_COUNT_MIN}
              max={GPU_COUNT_MAX}
              valueLabel={`${gpuCount} GPUs`}
              minLabel="1"
              maxLabel="64"
              ariaLabel="Number of GPUs"
              onChange={setGpuCount}
            />

            <TcoCalculatorSliderField
              label="Hours per Month"
              value={hoursPerMonth}
              min={HOURS_MIN}
              max={HOURS_MAX}
              valueLabel={`${hoursPerMonth} hrs`}
              minLabel="50"
              maxLabel="744 (full)"
              ariaLabel="Hours per month"
              onChange={setHoursPerMonth}
            />

            <div>
              <Text as="h6" textColor="white" className="mb-3">
                Commitment Period
              </Text>
              <TcoCalculatorCommitmentSelector
                activeCommitmentId={commitmentId}
                onCommitmentSelect={setCommitmentId}
              />
            </div>
          </TcoCalculatorFormSection>

          <div className="mt-8">
            <TcoCalculatorFormSection step={2} title="Storage Requirements">
              <TcoCalculatorSliderField
                label="Local NVMe"
                value={localNvmeGb}
                min={0}
                max={LOCAL_NVME_MAX_GB}
                valueLabel={formatStorageGb(localNvmeGb)}
                minLabel="0TB"
                maxLabel="20TB"
                ariaLabel="Local NVMe storage"
                onChange={setLocalNvmeGb}
              />

              <TcoCalculatorSliderField
                label="Network Storage"
                value={networkStorageGb}
                min={0}
                max={NETWORK_STORAGE_MAX_GB}
                valueLabel={formatStorageGb(networkStorageGb)}
                minLabel="0TB"
                maxLabel="50TB"
                ariaLabel="Network storage"
                onChange={setNetworkStorageGb}
              />

              <TcoCalculatorSliderField
                label="Object Storage"
                value={objectStorageGb}
                min={0}
                max={OBJECT_STORAGE_MAX_GB}
                valueLabel={formatStorageGb(objectStorageGb)}
                minLabel="0TB"
                maxLabel="100TB"
                ariaLabel="Object storage"
                onChange={setObjectStorageGb}
              />
            </TcoCalculatorFormSection>
          </div>

          <div className="mt-8">
            <TcoCalculatorFormSection step={3} title="Additional Services">
              <TcoCalculatorSliderField
                label="Data Transfer"
                value={dataTransferGb}
                min={0}
                max={DATA_TRANSFER_MAX_GB}
                valueLabel={`${formatStorageGb(dataTransferGb)}/mo`}
                minLabel="0TB"
                maxLabel="50TB"
                ariaLabel="Data transfer per month"
                onChange={setDataTransferGb}
              />

              <TcoCalculatorSliderField
                label="Inference Tokens"
                value={inferenceTokensMn}
                min={0}
                max={INFERENCE_TOKENS_MAX_MN}
                valueLabel={formatInferenceTokens(inferenceTokensMn)}
                minLabel="0"
                maxLabel="10B"
                ariaLabel="Inference tokens per month"
                onChange={setInferenceTokensMn}
              />
            </TcoCalculatorFormSection>
          </div>

          <div className="mt-8">
            <LinkComponent
              href={`#${PROVIDER_COMPARISON_SECTION_ID}`}
              className="w-full"
              onClick={(event) => {
                event.preventDefault();
                scrollToBreakdown();
              }}
            >
              {TCO_CALCULATOR_SECTION.calculateCta}
            </LinkComponent>
          </div>
        </div>

        <div className="w-full lg:sticky lg:top-24 lg:w-[38%] lg:shrink-0">
          <TcoCalculatorSummaryPanel breakdown={breakdown} />
        </div>
      </div>
    </div>
  );
};

export default TcoCalculatorConfigClient;
