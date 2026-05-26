import DeployStorageCliCode from "./DeployStorageCliCode";
import DeployStorageCustomTerminalHeader from "./DeployStorageCustomTerminalHeader";

const DeployStorageCustomTerminal = () => {
  return (
    <div
      className="flex-2 bg-black rounded-xl overflow-hidden w-full shadow-sm font-mono"
      role="region"
      aria-label="Custom NVMe storage CLI examples"
    >
      <DeployStorageCustomTerminalHeader />
      <DeployStorageCliCode />
    </div>
  );
};

export default DeployStorageCustomTerminal;
