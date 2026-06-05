import { Button, Text } from "@/shared/ui-lib";
import { CPU_INSTANCE_TYPE_OPTIONS } from "../data/transparent-pricing-section.data";
import type { CpuTransparentPricingInstanceTypeSidebarProps } from "../types/transparent-pricing-section.types";
import { cn } from "@/lib/utils";

const CpuTransparentPricingInstanceTypeSidebar = ({
  activeType,
  onTypeSelect,
}: CpuTransparentPricingInstanceTypeSidebarProps) => {
  return (
    <div className="">
      <Text as="h6" textColor="gray-75" fontFamily="spaceMono">
        Instance Type
      </Text>
      <div role="tablist" aria-label="CPU instance type tabs" className="mt-4">
        <ul className="flex list-none flex-col gap-1.5">
          {CPU_INSTANCE_TYPE_OPTIONS.map((option) => {
            const isActive = option.id === activeType;
            return (
              <Button
                variant="ghost"
                size="none"
                spacing="none"
                key={option.id}
                onClick={() => onTypeSelect(option.id)}
                className={cn(
                  "w-full flex items-center gap-3 border bg-black-25/60 p-3 md:w-70",
                  isActive ? "border-primary-105" : "border-gray-97"
                )}
              >
                <option.icon
                  size={18}
                  className={cn(isActive ? "text-primary" : "text-gray-75")}
                />
                <Text
                  as="h6"
                  textColor={isActive ? "white" : "gray-106"}
                  fontFamily="spaceMono"
                >
                  {option.label}
                </Text>
              </Button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CpuTransparentPricingInstanceTypeSidebar;
