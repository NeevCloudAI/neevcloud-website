"use client";

import { useState } from "react";
import { Button, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/shared/icons/lucide-icon-map";
import { CPU_STORAGE_VOLUME_OPTIONS } from "../data/transparent-pricing-section.data";

const CpuTransparentPricingStorageVolumeSection = () => {
  const [activeStorageId, setActiveStorageId] = useState(
    CPU_STORAGE_VOLUME_OPTIONS[0].id,
  );

  return (
    <div className="p-4 md:p-5">
      <div className="flex items-center gap-3.5">
        <ArrowRight size={18} className="text-primary" />
        <Text as="h6" fontFamily="spaceMono" textColor="white/60">
          Storage Volume
        </Text>
      </div>

      <div
        role="radiogroup"
        aria-label="Storage volume type"
        className="mt-4 grid gap-3 sm:grid-cols-2"
      >
        {CPU_STORAGE_VOLUME_OPTIONS.map((option, index) => {
          const isActive = option.id === activeStorageId;
          return (
            <Button
              key={option.id}
              variant="ghost"
              size="none"
              spacing="none"
              role="radio"
              aria-checked={isActive}
              onClick={() => setActiveStorageId(option.id)}
              className={cn(
                "flex w-full items-center justify-between rounded-md border p-3 text-left",
                isActive
                  ? "bg-primary-210/6 border-primary-210/60"
                  : "bg-white/6 border-white/12",
              )}
            >
              <Text as="h6" fontFamily="spaceMono" textColor="white">
                {`0${index + 1} ${option.label}`}
                <Text
                  as="span"
                  fontFamily="spaceMono"
                  textColor="white/60"
                  className="ml-2"
                >
                  {option.description}
                </Text>
              </Text>
              <Text
                as="h6"
                fontFamily="spaceMono"
                textColor={isActive ? "primary" : "white/60"}
              >
                {`₹${option.pricePerGb}/GB`}
              </Text>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CpuTransparentPricingStorageVolumeSection;
