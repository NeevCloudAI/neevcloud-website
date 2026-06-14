import PurposeConnectorDot from "./PurposeConnectorDot";

const PurposeControlPlaneBranchConnector = () => {
  return (
    <div className="flex w-full flex-col items-center" aria-hidden="true">
      <div className="flex flex-col items-center md:hidden">
        <div className="h-2 w-2 rounded-full bg-primary" />
        <div className="h-5 w-px bg-gray-02" />
        <div className="h-2 w-2 rounded-full bg-primary" />
      </div>

      <div className="relative hidden h-10 w-full md:block md:h-12.5">
        <svg
          className="absolute inset-0 size-full overflow-visible"
          viewBox="0 0 1000 64"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="500"
            y1="0"
            x2="167"
            y2="58"
            stroke="var(--gray-02)"
            strokeWidth="1"
          />
          <line
            x1="500"
            y1="0"
            x2="500"
            y2="58"
            stroke="var(--gray-02)"
            strokeWidth="1"
          />
          <line
            x1="500"
            y1="0"
            x2="833"
            y2="58"
            stroke="var(--gray-02)"
            strokeWidth="1"
          />
        </svg>
        <PurposeConnectorDot className="z-4 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
        <PurposeConnectorDot className="bottom-1 left-[16.67%] -translate-x-1/2 translate-y-1/2" />
        <PurposeConnectorDot className="bottom-1 left-1/2 -translate-x-1/2 translate-y-1/2" />
        <PurposeConnectorDot className="bottom-1 left-[83.33%] -translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
};

export default PurposeControlPlaneBranchConnector;
