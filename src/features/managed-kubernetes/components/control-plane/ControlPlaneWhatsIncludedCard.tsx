import { Divider, Text } from "@/shared/ui-lib";
import ControlPlaneIncludedRow from "./ControlPlaneIncludedRow";

const INCLUDED_ITEMS = [
  { label: "Control plane (API/scheduler/etcd)", price: "₹0" },
  { label: "GPU device plugins", price: "₹0" },
  { label: "Autoscaling + Prometheus + Grafana", price: "₹0" },
  { label: "Private registry", price: "₹0" },
] as const;

const ControlPlaneWhatsIncludedCard = () => {
  return (
    <div className="bg-white rounded-xl w-full border border-black/82 p-4 md:p-10 md:pb-6">
      <Text
        textColor="black"
        as="h3"
        weight="semibold"
      >{`What’s Included`}</Text>

      <div className="flex items-center justify-between gap-2 mt-7.5">
        <Text textColor="gray-04" as="h6">
          {INCLUDED_ITEMS[0].label}
        </Text>
        <Text fontFamily="spaceMono" textColor="primary" as="h6">
          {INCLUDED_ITEMS[0].price}
        </Text>
      </div>
      <Divider orientation="horizontal" className="my-5 bg-gray-01" />

      {INCLUDED_ITEMS.slice(1).map((item) => (
        <ControlPlaneIncludedRow
          key={item.label}
          label={item.label}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ControlPlaneWhatsIncludedCard;
