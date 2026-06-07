import type { GpuModelFamily } from "../types/model-transparent-pricing-section.types";
import GpuModelTransparentPricingAnnualSavingsCard from "./GpuModelTransparentPricingAnnualSavingsCard";
import GpuModelTransparentPricingCommitmentCard from "./GpuModelTransparentPricingCommitmentCard";
import GpuModelTransparentPricingConfigurationCard from "./GpuModelTransparentPricingConfigurationCard";

type GpuModelTransparentPricingContentProps = {
  family: GpuModelFamily;
};

const GpuModelTransparentPricingContent = ({
  family,
}: GpuModelTransparentPricingContentProps) => {
  return (
    <div
      id={`${family.id}-model-panel`}
      role="tabpanel"
      aria-labelledby={`${family.id}-model-tab`}
      className="flex min-w-0 flex-1 flex-col gap-4"
    >
      <GpuModelTransparentPricingConfigurationCard family={family} />
      <GpuModelTransparentPricingCommitmentCard family={family} />
      <GpuModelTransparentPricingAnnualSavingsCard family={family} />
    </div>
  );
};

export default GpuModelTransparentPricingContent;
