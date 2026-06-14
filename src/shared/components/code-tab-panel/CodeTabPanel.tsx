import type { ReactNode } from "react";
import CodeTabPanelFooter from "./CodeTabPanelFooter";
import CodeTabPanelHeader from "./CodeTabPanelHeader";

type CodeTabPanelProps = {
  children: ReactNode;
  panelId: string;
  labelledBy: string;
};

const CodeTabPanel = ({ children, panelId, labelledBy }: CodeTabPanelProps) => {
  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={labelledBy}
      className="bg-black rounded-md w-full font-mono mt-4 md:mt-7.5 md:h-113 classy overflow-auto"
    >
      <CodeTabPanelHeader />
      <div className="p-4 md:px-5 md:py-8">{children}</div>
      <CodeTabPanelFooter />
    </div>
  );
};

export default CodeTabPanel;
