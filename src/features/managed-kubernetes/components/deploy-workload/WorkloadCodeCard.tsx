import type { ReactNode } from "react";
import WorkloadCodeCardFooter from "@/features/managed-kubernetes/components/deploy-workload/WorkloadCodeCardFooter";
import WorkloadCodeCardHeader from "@/features/managed-kubernetes/components/deploy-workload/WorkloadCodeCardHeader";

type WorkloadCodeCardProps = {
  children: ReactNode;
  panelId: string;
  labelledBy: string;
};

const WorkloadCodeCard = ({
  children,
  panelId,
  labelledBy,
}: WorkloadCodeCardProps) => {
  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={labelledBy}
      className="bg-black rounded-md w-full font-mono mt-4 md:mt-7.5 h-88 overflow-auto"
    >
      <WorkloadCodeCardHeader />
      <div className="px-2 md:px-5 py-2 md:py-8">{children}</div>
      <WorkloadCodeCardFooter />
    </div>
  );
};

export default WorkloadCodeCard;
