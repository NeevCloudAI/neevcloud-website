import { PATHS_STEP_PANELS } from "../../data/three-paths-section.data";
import PathsStepPanel from "./PathsStepPanel";

const StepOnePanel = () => {
  return <PathsStepPanel panel={PATHS_STEP_PANELS[0]} />;
};

export default StepOnePanel;
