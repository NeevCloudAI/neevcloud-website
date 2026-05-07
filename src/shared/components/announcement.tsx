import { Text } from "@/shared/ui-lib";

const AnnouncementSection = () => {
  return (
    <div className="bg-tertiary py-2.5 text-center text-white">
      <Text as="span">
        Reserve the NVIDIA B200 at lowest price for steady throughput,  lower
        TCO, and reliable production workloads.
      </Text>
      <Text as="span" variant="link" className="ml-2">
        Click to Reserve Now
      </Text>
    </div>
  );
};

export default AnnouncementSection;
