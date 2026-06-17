import { Text } from "@/shared/ui-lib";

const GettingStartedSuccessBanner = () => {
  return (
    <div className="mt-4 md:mt-5 rounded-md border border-primary/30 bg-primary/10 p-4 md:p-5">
      <Text as="h6" fontFamily="spaceMono" textColor="primary">
        You&apos;re all set.
        <Text as="span" variant="h6" textColor="white">
          Bucket created, data uploaded, GPU access configured, and lifecycle
          policies active. Your ML pipeline is running on NeevCloud object
          storage.
        </Text>
      </Text>
    </div>
  );
};

export default GettingStartedSuccessBanner;
