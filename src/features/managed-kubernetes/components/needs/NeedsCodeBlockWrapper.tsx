import type { ReactNode } from "react";

type NeedsCodeBlockWrapperProps = {
  children: ReactNode;
};

const NeedsCodeBlockWrapper = ({ children }: NeedsCodeBlockWrapperProps) => {
  return (
    <div className="mt-4 rounded-xl bg-black p-4 md:mt-9 md:px-7.5 md:py-5">
      {children}
    </div>
  );
};

export default NeedsCodeBlockWrapper;
