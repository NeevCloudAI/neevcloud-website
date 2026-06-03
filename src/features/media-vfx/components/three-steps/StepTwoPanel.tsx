import RenderInfoCard from "../renderinfo/RenderInfoCard";
import { STEP_TWO_ROWS } from "../../data/four-steps-section.data";

const StepTwoPanel = () => {
  return (
    <RenderInfoCard
      rows={STEP_TWO_ROWS}
      variant="config"
      leftColumnWidth="w-32"
    />
  );
};

export default StepTwoPanel;
