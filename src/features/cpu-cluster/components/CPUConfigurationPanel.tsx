"use client";

import { useCallback, useState } from "react";
import { Button, Text } from "@/shared/ui-lib";
import {
  CPU_INSTANCE_FAMILIES,
  CPU_INSTANCE_FAMILY_BY_ID,
  type CpuConfigurationRow,
  type CpuInstanceFamilyId,
} from "@/features/cpu-cluster/data/cpu-configuration-data";

const TABLE_HEADERS = [
  "configuration",
  "vcpu",
  "ram",
  "storage",
  "best for",
] as const;

const CELL_CLASS =
  "px-3 py-2.5 text-left align-top whitespace-nowrap first:pl-0 last:pr-0";

const INITIAL_FAMILY: CpuInstanceFamilyId = "general-purpose";

function ConfigurationRow({ row }: { row: CpuConfigurationRow }) {
  return (
    <tr className="border-b border-black-7">
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="primary-105">
          {row.configuration}
        </Text>
      </td>
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.vcpu}
        </Text>
      </td>
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.ram}
        </Text>
      </td>
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.storage}
        </Text>
      </td>
      <td className={CELL_CLASS}>
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          {row.bestFor}
        </Text>
      </td>
    </tr>
  );
}

export default function CPUConfigurationPanel() {
  const [activeFamilyId, setActiveFamilyId] =
    useState<CpuInstanceFamilyId>(INITIAL_FAMILY);

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
        >
          {CPU_INSTANCE_FAMILIES.map((family) => {
            const isActive = family.id === activeFamilyId;
            return (
              <Button
                variant="ghost"
                key={family.id}
                role="tab"
                size="full"
                aria-selected={isActive}
                aria-controls={`cpu-config-panel-${family.id}`}
                id={`cpu-config-tab-${family.id}`}
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
        <Text as="h6" fontFamily="spaceMono" textColor="white">
          <Text as="span" fontFamily="spaceMono" textColor="primary-105">
            →
          </Text>
          {` configuration: ${activeFamily.titleName}`}
        </Text>
        <Text
          as="h6"
          textColor="gray-80"
          className="mt-1"
          fontFamily="spaceMono"
        >
          {activeFamily.subtitle}
        </Text>

        <div className="mt-7.5 overflow-x-auto">
          <table className="w-full font-space-mono">
            <thead>
              <tr className="border-b border-black-30">
                {TABLE_HEADERS.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className={`${CELL_CLASS} font-normal`}
                  >
                    <Text as="h6" fontFamily="spaceMono" textColor="gray-80">
                      {header}
                    </Text>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {activeFamily.rows.map((row) => (
                <ConfigurationRow
                  key={`${activeFamily.id}-${row.configuration}`}
                  row={row}
                />
              ))}
            </tbody>
          </table>
        </div>

        <Text
          as="h6"
          textColor="gray-80"
          className="mt-7.5"
          fontFamily="spaceMono"
        >
          {activeFamily.footer}
        </Text>
      </div>
    </div>
  );
}
