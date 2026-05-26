import type { FlowDirection } from "../../types/private-network-section.types";

type FlowArrowIconProps = {
  direction: FlowDirection;
  className?: string;
};

const FlowArrowIcon = ({ direction, className }: FlowArrowIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`z-2 h-3 w-3 origin-center md:h-5 md:w-5 ${className ?? ""}`}
      aria-hidden="true"
    >
      {direction === "forward" ? (
        <>
          <path
            d="M9.10742 10.7144L12.3217 7.50007L9.10742 4.28578"
            stroke="#00A78B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.67871 7.5H12.3216"
            stroke="#00A78B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <path
            d="M5.89258 10.7144L2.67829 7.50007L5.89258 4.28578"
            stroke="#FF4D48"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.3213 7.5H2.67843"
            stroke="#FF4D48"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
};

export default FlowArrowIcon;
