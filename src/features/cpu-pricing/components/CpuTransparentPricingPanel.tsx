import CpuTransparentPricingPanelClient from "./CpuTransparentPricingPanelClient";
import type { CpuTransparentPricingPanelProps } from "../types/transparent-pricing-section.types";

const CpuTransparentPricingPanel = ({
  os,
}: CpuTransparentPricingPanelProps) => {
  return <CpuTransparentPricingPanelClient os={os} />;
};

export default CpuTransparentPricingPanel;
