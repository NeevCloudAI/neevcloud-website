"use client";

import { useCallback, useState } from "react";
import { Divider } from "@/shared/ui-lib";
import { DEFAULT_GPU_INSTANCE_FAMILY } from "../constants/transparent-pricing-section.constants";
import { GPU_INSTANCE_FAMILY_BY_ID } from "../data/transparent-pricing-section.data";
import type { GpuInstanceFamilyId } from "../types/transparent-pricing-section.types";
import GpuTransparentPricingModelFamilySidebar from "./GpuTransparentPricingModelFamilySidebar";
import GpuTransparentPricingTable from "./GpuTransparentPricingTable";
import GpuTransparentPricingTerminalHeader from "./GpuTransparentPricingTerminalHeader";

const GpuTransparentPricingPanelClient = () => {
  const [activeFamily, setActiveFamily] = useState<GpuInstanceFamilyId>(
    DEFAULT_GPU_INSTANCE_FAMILY,
  );

  const family =
    GPU_INSTANCE_FAMILY_BY_ID[activeFamily] ??
    GPU_INSTANCE_FAMILY_BY_ID[DEFAULT_GPU_INSTANCE_FAMILY];

  const handleFamilySelect = useCallback((id: GpuInstanceFamilyId) => {
    setActiveFamily(id);
  }, []);

  return (
    <>
      <GpuTransparentPricingTerminalHeader />

      <div className="flex w-full flex-col gap-4 p-4 md:flex-row md:p-5">
        <GpuTransparentPricingModelFamilySidebar
          activeFamily={activeFamily}
          onFamilySelect={handleFamilySelect}
        />

        <Divider
          orientation="vertical"
          className="hidden bg-white/12 md:block"
        />

        <Divider
          orientation="horizontal"
          className="block bg-white/12 md:hidden"
        />

        <GpuTransparentPricingTable family={family} />
      </div>
    </>
  );
};

export default GpuTransparentPricingPanelClient;
