"use client";

import { useCallback, useState } from "react";
import { Divider } from "@/shared/ui-lib";
import { DEFAULT_AI_INFERENCE_MODEL_FAMILY } from "../constants/transparent-pricing-section.constants";
import { AI_INFERENCE_MODEL_FAMILY_BY_ID } from "../data/transparent-pricing-section.data";
import type { AiInferenceModelFamilyId } from "../types/transparent-pricing-section.types";
import AiInferenceTransparentPricingModelFamilySidebar from "./AiInferenceTransparentPricingModelFamilySidebar";
import AiInferenceTransparentPricingTable from "./AiInferenceTransparentPricingTable";
import AiInferenceTransparentPricingTerminalHeader from "./AiInferenceTransparentPricingTerminalHeader";

const AiInferenceTransparentPricingPanelClient = () => {
  const [activeFamily, setActiveFamily] = useState<AiInferenceModelFamilyId>(
    DEFAULT_AI_INFERENCE_MODEL_FAMILY,
  );

  const family =
    AI_INFERENCE_MODEL_FAMILY_BY_ID[activeFamily] ??
    AI_INFERENCE_MODEL_FAMILY_BY_ID[DEFAULT_AI_INFERENCE_MODEL_FAMILY];

  const handleFamilySelect = useCallback((id: AiInferenceModelFamilyId) => {
    setActiveFamily(id);
  }, []);

  return (
    <>
      <AiInferenceTransparentPricingTerminalHeader />

      <div className="flex w-full flex-col gap-4 p-4 md:flex-row md:p-5">
        <AiInferenceTransparentPricingModelFamilySidebar
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

        <AiInferenceTransparentPricingTable family={family} />
      </div>
    </>
  );
};

export default AiInferenceTransparentPricingPanelClient;
