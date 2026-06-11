import {
  Disc2,
  DollarSign,
  Layers,
  Lock,
  Server,
  Timer,
  TrendingUp,
  Zap,
} from "lucide-react";
import type {
  DeploymentComparisonIconMap,
  DeploymentComparisonIconProps,
} from "../../types/deployment-comparison-section.types";

const DEPLOYMENT_COMPARISON_ICONS: DeploymentComparisonIconMap = {
  zap: Zap,
  server: Server,
  layers: Layers,
  lock: Lock,
  trendingUp: TrendingUp,
  disc2: Disc2,
  dollarSign: DollarSign,
  timer: Timer,
};

const DeploymentComparisonIcon = ({
  name,
  className,
}: DeploymentComparisonIconProps) => {
  const Icon = DEPLOYMENT_COMPARISON_ICONS[name];

  return <Icon aria-hidden="true" className={className} />;
};

export default DeploymentComparisonIcon;
