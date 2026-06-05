import ConsolePanelLayout from "../components/console/Consolepanellayout";
import DashboardPanel from "../components/console/Dashboardpanel";
import GpuDeploymentPanel from "../components/console/Gpudeploymentpanel";
import InferenceManagementPanel from "../components/console/Inferencemanagementpanel";
import FleetManagementPanel from "../components/console/Fleetmanagementpanel";
import StatePersistencePanel from "../components/console/Statepersistencepanel";
import {
  DASHBOARD_CONTENT,
  GPU_DEPLOYMENT_CONTENT,
  INFERENCE_MANAGEMENT_CONTENT,
  FLEET_MANAGEMENT_CONTENT,
  STATE_PERSISTENCE_CONTENT,
} from "../data/console-section.data";

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
