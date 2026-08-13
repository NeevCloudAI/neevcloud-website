"use client";

import { useCallback, useMemo, useState } from "react";
import { DEFAULT_CPU_INSTANCE_TYPE } from "../constants/transparent-pricing-section.constants";
import {
  CPU_INSTANCE_TYPE_CONFIG,
  CPU_INSTANCE_TYPE_OPTIONS,
  CPU_PRICING_ROWS_BY_INSTANCE_TYPE,
} from "../data/transparent-pricing-section.data";
import type {
  CpuInstanceTypeId,
  CpuTransparentPricingPanelClientProps,
} from "../types/transparent-pricing-section.types";
import CpuTransparentPricingInstanceTypeSidebar from "./CpuTransparentPricingInstanceTypeSidebar";
import CpuTransparentPricingTable from "./CpuTransparentPricingTable";
import CpuTransparentPricingTerminalHeader from "./CpuTransparentPricingTerminalHeader";
import CpuTransparentPricingStorageVolumeSection from "./CpuTransparentPricingStorageVolumeSection";
import { Divider } from "@/shared/ui-lib";

const CpuTransparentPricingPanelClient = ({
  os,
}: CpuTransparentPricingPanelClientProps) => {
  const [activeType, setActiveType] = useState<CpuInstanceTypeId>(
    DEFAULT_CPU_INSTANCE_TYPE,
  );

  const activeOption =
    CPU_INSTANCE_TYPE_OPTIONS.find((option) => option.id === activeType) ??
    CPU_INSTANCE_TYPE_OPTIONS[0];

  const activeConfig = CPU_INSTANCE_TYPE_CONFIG[activeType];

  const rows = useMemo(
    () => CPU_PRICING_ROWS_BY_INSTANCE_TYPE[activeType],
    [activeType],
  );

  const handleTypeSelect = useCallback((id: CpuInstanceTypeId) => {
    setActiveType(id);
  }, []);

  return (
    <>
      <CpuTransparentPricingTerminalHeader />

      <div className="flex flex-col md:flex-row w-full p-4 md:p-5 gap-4">
        <CpuTransparentPricingInstanceTypeSidebar
          activeType={activeType}
          onTypeSelect={handleTypeSelect}
        />

        <Divider
          orientation="vertical"
          className="bg-white/12 hidden md:block"
        />

        <Divider
          orientation="horizontal"
          className="bg-white/12 block md:hidden"
        />

        <CpuTransparentPricingTable
          activeType={activeType}
          activeLabel={activeOption.label}
          activeConfig={activeConfig}
          os={os}
          rows={rows}
        />
      </div>

      <Divider orientation="horizontal" className="bg-white/12" />

      <CpuTransparentPricingStorageVolumeSection />
    </>
  );
};

export default CpuTransparentPricingPanelClient;
