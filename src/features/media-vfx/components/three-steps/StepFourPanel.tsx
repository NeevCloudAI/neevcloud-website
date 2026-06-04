import RenderInfoCard from "../renderinfo/RenderInfoCard";
import { STEP_FOUR_ROWS } from "../../data/four-steps-section.data";

const StepFourPanel = () => {
  return <RenderInfoCard rows={STEP_FOUR_ROWS} variant="download" />;
};

export default StepFourPanel;
