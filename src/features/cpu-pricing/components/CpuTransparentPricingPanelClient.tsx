"use client";

import { useCallback, useMemo, useState } from "react";
import { DEFAULT_CPU_INSTANCE_TYPE } from "../constants/transparent-pricing-section.constants";
import {
  CPU_INSTANCE_TYPE_DESCRIPTIONS,
  CPU_INSTANCE_TYPE_OPTIONS,
  CPU_PRICING_ROWS_BY_INSTANCE_TYPE,
} from "../data/transparent-pricing-section.data";
import type { CpuInstanceTypeId } from "../types/transparent-pricing-section.types";
import CpuTransparentPricingInstanceTypeSidebar from "./CpuTransparentPricingInstanceTypeSidebar";
import CpuTransparentPricingTable from "./CpuTransparentPricingTable";
import CpuTransparentPricingTerminalHeader from "./CpuTransparentPricingTerminalHeader";
import { Divider } from "@/shared/ui-lib";

const CpuTransparentPricingPanelClient = () => {
  const [activeType, setActiveType] = useState<CpuInstanceTypeId>(
    DEFAULT_CPU_INSTANCE_TYPE,
  );

  const activeOption =
    CPU_INSTANCE_TYPE_OPTIONS.find((option) => option.id === activeType) ??
    CPU_INSTANCE_TYPE_OPTIONS[0];

  const activeDescription =
    CPU_INSTANCE_TYPE_DESCRIPTIONS[activeType] ??
    CPU_INSTANCE_TYPE_DESCRIPTIONS[DEFAULT_CPU_INSTANCE_TYPE];

  const rows = useMemo(
    () => CPU_PRICING_ROWS_BY_INSTANCE_TYPE[activeType],
    [activeType],
  );

  const handleTypeSelect = useCallback((id: CpuInstanceTypeId) => {
    setActiveType(id);
  }, []);

  return (
    <>
      <CpuTransparentPricingTerminalHeader activeLabel={activeOption.label} />

      <div className="flex flex-col md:flex-row w-full p-4 md:p-5 gap-4">
        <CpuTransparentPricingInstanceTypeSidebar
          activeType={activeType}
          onTypeSelect={handleTypeSelect}
        />

        <Divider
          orientation="vertical"
          className="bg-white-10 hidden md:block"
        />

        <Divider
          orientation="horizontal"
          className="bg-white-10 block md:hidden"
        />

        <CpuTransparentPricingTable
          activeType={activeType}
          activeLabel={activeOption.label}
          activeDescription={activeDescription}
          rows={rows}
        />
      </div>
    </>
  );
};

export default CpuTransparentPricingPanelClient;
