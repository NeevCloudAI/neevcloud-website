"use client";

import { useCallback, useState } from "react";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { DEFAULT_CPU_OS_TYPE } from "../constants/transparent-pricing-section.constants";
import type { CpuOsType } from "../types/transparent-pricing-section.types";
import CpuTransparentPricingOsToggle from "./CpuTransparentPricingOsToggle";
import CpuTransparentPricingPanel from "./CpuTransparentPricingPanel";

const CpuTransparentPricingSection = () => {
  const [os, setOs] = useState<CpuOsType>(DEFAULT_CPU_OS_TYPE);

  const handleOsSelect = useCallback((nextOs: CpuOsType) => {
    setOs(nextOs);
  }, []);

  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="cpu-transparent-pricing-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="cpu-transparent-pricing-section-heading"
          align="center"
          textColor="white"
          className="max-w-4xl"
        >
          Every Workload
          <Text as="span" variant="h2" textColor="primary">
            Flat rate.
          </Text>
          Unmetered.
        </Text>
        <Text
          as="h6"
          textColor="gray-04"
          align="center"
          className="mt-2.5 max-w-3xl"
        >
          Commit and Save. The Longer the Plan, the Lower the Rate.
        </Text>

        <CpuTransparentPricingOsToggle os={os} onOsSelect={handleOsSelect} />

        <div
          className="mt-4 w-full rounded-lg border border-white/12 bg-white/6 font-mono shadow-sm backdrop-blur-md md:mt-12.5"
          role="region"
          aria-label="Transparent CPU pricing terminal"
        >
          <CpuTransparentPricingPanel os={os} />
        </div>
      </Container>
    </section>
  );
};

export default CpuTransparentPricingSection;
