"use client";

import { useCallback, useState } from "react";
import { Button, Text } from "@/shared/ui-lib";
import CPUConfigurationTable from "./CPUConfigurationTable";
import { DEFAULT_CPU_INSTANCE_FAMILY } from "../constants/cpu-configuration.constants";
import {
  CPU_INSTANCE_FAMILIES,
  CPU_INSTANCE_FAMILY_BY_ID,
} from "../data/cpu-configuration.data";
import type { CpuInstanceFamilyId } from "../types/cpu-configuration.types";

const CPUConfigurationPanelClient = () => {
  const [activeFamilyId, setActiveFamilyId] = useState<CpuInstanceFamilyId>(
    DEFAULT_CPU_INSTANCE_FAMILY
  );

  const activeFamily = CPU_INSTANCE_FAMILY_BY_ID[activeFamilyId];

  const handleFamilySelect = useCallback((id: CpuInstanceFamilyId) => {
    setActiveFamilyId(id);
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <aside
        className="md:border-r md:border-gray-95 md:pr-10 pb-5 md:pb-0 mb-5 md:mb-0 border-b md:border-b-0 border-gray-95"
        aria-label="Instance families"
      >
        <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
          Instance Families
        </Text>
        <div
          className="mt-2.5 flex flex-col gap-1.25"
          role="tablist"
          aria-orientation="vertical"
          aria-label="CPU instance families"
        >
          {CPU_INSTANCE_FAMILIES.map((family) => {
            const isActive = family.id === activeFamilyId;
            return (
              <Button
                variant="ghost"
                key={family.id}
                role="tab"
                type="button"
                size="full"
                aria-selected={isActive}
                aria-controls={`cpu-config-panel-${family.id}`}
                id={`cpu-config-tab-${family.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => handleFamilySelect(family.id)}
                className="rounded-md border border-gray-97 px-5 py-2.5 text-left bg-black-25"
              >
                <Text as="h6" fontFamily="spaceMono" textColor="white">
                  <Text
                    as="span"
                    fontFamily="spaceMono"
                    textColor={isActive ? "primary-105" : "gray-80"}
                  >
                    {family.number}
                  </Text>
                  <Text
                    as="span"
                    fontFamily="spaceMono"
                    textColor="white"
                    className="ml-2"
                  >
                    {family.sidebarLabel}
                  </Text>
                </Text>
              </Button>
            );
          })}
        </div>
      </aside>

      <div
        className="flex-1 md:pl-10 min-w-0"
        role="tabpanel"
        id={`cpu-config-panel-${activeFamily.id}`}
        aria-labelledby={`cpu-config-tab-${activeFamily.id}`}
      >
        <CPUConfigurationTable family={activeFamily} />
      </div>
    </div>
  );
};

export default CPUConfigurationPanelClient;
