import PurposeConnectorDot from "./PurposeConnectorDot";

const PurposeServiceBranchConnector = () => {
  return (
    <div className="flex w-full flex-col items-center" aria-hidden="true">
      {/* Mobile */}
      <div className="flex flex-col items-center md:hidden">
        <div className="h-2 w-2 rounded-full bg-primary" />
        <div className="h-5 w-px bg-blue-40" />
        <div className="h-2 w-2 rounded-full bg-primary" />
      </div>

      {/* Desktop - 3 lines converging to center */}
      <div className="relative hidden h-10 w-full md:block md:h-12.5">
        <svg
          className="absolute inset-0 size-full overflow-visible"
          viewBox="0 0 1000 64"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Left card → center */}
          <line
            x1="167"
            y1="0"
            x2="500"
            y2="58"
            stroke="var(--blue-40)"
            strokeWidth="1"
          />
          {/* Center card → center */}
          <line
            x1="500"
            y1="0"
            x2="500"
            y2="58"
            stroke="var(--blue-40)"
            strokeWidth="1"
          />
          {/* Right card → center */}
          <line
            x1="833"
            y1="0"
            x2="500"
            y2="58"
            stroke="var(--blue-40)"
            strokeWidth="1"
          />
        </svg>

        {/* Top 3 dots */}
        <PurposeConnectorDot className="top-0 left-[16.67%] -translate-x-1/2 -translate-y-1/2" />
        <PurposeConnectorDot className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <PurposeConnectorDot className="top-0 left-[83.33%] -translate-x-1/2 -translate-y-1/2" />

        {/* Bottom center dot */}
        <PurposeConnectorDot className="bottom-1 left-1/2 -translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
};

export default PurposeServiceBranchConnector;
