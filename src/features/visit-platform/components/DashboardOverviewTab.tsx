import {
  DASHBOARD_CONTENT,
  GPU_DEPLOYMENT_CONTENT,
  INFERENCE_MANAGEMENT_CONTENT,
  FLEET_MANAGEMENT_CONTENT,
  STATE_PERSISTENCE_CONTENT,
} from "../data/console-section.data";
import DashboardPanel from "../Dashboardpanel";
import ConsolePanelLayout from "./Consolepanellayout";
import GpuDeploymentPanel from "./Gpudeploymentpanel";
import InferenceManagementPanel from "../Inferencemanagementpanel";
import FleetManagementPanel from "./Fleetmanagementpanel";
import StatePersistencePanel from "./Statepersistencepanel";

export const DashboardOverviewTab = () => (
  <ConsolePanelLayout {...DASHBOARD_CONTENT} rightPanel={<DashboardPanel />} />
);

export const GpuDeploymentTab = () => (
  <ConsolePanelLayout
    {...GPU_DEPLOYMENT_CONTENT}
    rightPanel={<GpuDeploymentPanel />}
  />
);

export const InferenceManagementTab = () => (
  <ConsolePanelLayout
    {...INFERENCE_MANAGEMENT_CONTENT}
    rightPanel={<InferenceManagementPanel />}
  />
);

export const FleetManagementTab = () => (
  <ConsolePanelLayout
    {...FLEET_MANAGEMENT_CONTENT}
    rightPanel={<FleetManagementPanel />}
  />
);

export const StatePersistenceTab = () => (
  <ConsolePanelLayout
    {...STATE_PERSISTENCE_CONTENT}
    rightPanel={<StatePersistencePanel />}
  />
);
