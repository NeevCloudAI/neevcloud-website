import { Text } from "@/shared/ui-lib";

const DeployStorageAutomaticCard = () => {
  return (
    <article className="flex-1 flex w-full flex-col rounded-xl bg-white p-4 md:p-7.5">
      <Text as="h3" weight="semibold">
        Automatic
      </Text>
      <Text as="h6" textColor="gray-90" className="mt-2.5">
        Every GPU instance includes 25GB of local NVMe storage automatically.
        No configuration required.
      </Text>
      <ul className="mt-2 md:mt-7.5 flex list-none flex-col gap-1.5 p-0 m-0">
        <li className="flex gap-2 rounded-md bg-gray-10 px-3.75 py-2.5">
          <Text as="h6" textColor="primary" className="shrink-0" aria-hidden="true">
            •
          </Text>
          <Text as="h6">25GB NVMe attached at instance launch</Text>
        </li>
        <li className="flex gap-2 rounded-md bg-gray-10 px-3.75 py-2.5">
          <Text as="h6" textColor="primary" className="shrink-0" aria-hidden="true">
            •
          </Text>
          <Text as="h6">
            Mounted at
            <Text as="span" variant="h6" textColor="primary">
              /mnt/local-storage
            </Text>
          </Text>
        </li>
        <li className="flex gap-2 rounded-md bg-gray-10 px-3.75 py-2.5">
          <Text as="h6" textColor="primary" className="shrink-0" aria-hidden="true">
            •
          </Text>
          <Text as="h6">Pre-formatted and ready to use</Text>
        </li>
        <li className="flex gap-2 rounded-md bg-gray-10 px-3.75 py-2.5">
          <Text as="h6" textColor="primary" className="shrink-0" aria-hidden="true">
            •
          </Text>
          <Text as="h6">Zero setup time</Text>
        </li>
      </ul>
    </article>
  );
};

export default DeployStorageAutomaticCard;
