"use client";

import { useCallback, useState } from "react";
import { Divider } from "@/shared/ui-lib";
import { DEFAULT_GPU_MODEL_FAMILY } from "../constants/model-transparent-pricing-section.constants";
import { GPU_MODEL_FAMILY_BY_ID } from "../data/model-transparent-pricing-section.data";
import type { GpuModelFamilyId } from "../types/model-transparent-pricing-section.types";
import GpuModelTransparentPricingContent from "./GpuModelTransparentPricingContent";
import GpuModelTransparentPricingSidebar from "./GpuModelTransparentPricingSidebar";
import GpuTransparentPricingTerminalHeader from "./GpuTransparentPricingTerminalHeader";

const GpuModelTransparentPricingPanelClient = () => {
  const [activeFamily, setActiveFamily] = useState<GpuModelFamilyId>(
    DEFAULT_GPU_MODEL_FAMILY,
  );

  const family =
    GPU_MODEL_FAMILY_BY_ID[activeFamily] ??
    GPU_MODEL_FAMILY_BY_ID[DEFAULT_GPU_MODEL_FAMILY];

  const handleFamilySelect = useCallback((id: GpuModelFamilyId) => {
    setActiveFamily(id);
  }, []);

  return (
    <>
      <GpuTransparentPricingTerminalHeader />

      <div className="flex w-full flex-col gap-4 p-4 md:flex-row md:p-5">
        <GpuModelTransparentPricingSidebar
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

        <GpuModelTransparentPricingContent family={family} />
      </div>
    </>
  );
};

export default GpuModelTransparentPricingPanelClient;
