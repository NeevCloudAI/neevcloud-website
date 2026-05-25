import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";

const DeployStorageSection = () => {
  return (
    <section className="relative bg-gray-10 py-8 md:py-16 2xl:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="black" className="max-w-4xl" align="center">
          How to Deploy
          <Text as="span" variant="h2" textColor="primary">
            NVMe Storage
          </Text>
        </Text>
        <Text className="max-w-2xl" align="center" textColor="gray-90">
          Choose your deployment mode, automatic provisioning at launch or
          custom capacity. Generate your exact CLI command instantly.
        </Text>

        <div className="w-full flex gap-4 mt-4 md:mt-12.5">
          <article className="flex-1 flex w-full flex-col rounded-xl bg-white p-4 md:p-7.5">
            <Text as="h3" weight="semibold">
              Automatic
            </Text>
            <Text as="h6" textColor="gray-90" className="mt-2.5">
              Every GPU instance includes 25GB of local NVMe storage
              automatically. No configuration required.
            </Text>
            <ul className="mt-2 md:mt-7.5 flex list-none flex-col gap-1.5">
              <li className="flex gap-2 rounded-md bg-gray-10 px-3.75 py-2.5">
                <Text as="h6" textColor="primary" className="shrink-0">
                  •
                </Text>
                <Text as="h6">25GB NVMe attached at instance launch</Text>
              </li>
              <li className="flex gap-2 rounded-md bg-gray-10 px-3.75 py-2.5">
                <Text as="h6" textColor="primary" className="shrink-0">
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
                <Text as="h6" textColor="primary" className="shrink-0">
                  •
                </Text>
                <Text as="h6">Pre-formatted and ready to use</Text>
              </li>
              <li className="flex gap-2 rounded-md bg-gray-10 px-3.75 py-2.5">
                <Text as="h6" textColor="primary" className="shrink-0">
                  •
                </Text>
                <Text as="h6">Zero setup time</Text>
              </li>
            </ul>
          </article>
          <div className="flex-2 bg-black rounded-xl overflow-hidden w-full shadow-sm font-mono">
            <div className="flex items-center justify-between gap-2 p-2.5 border-b border-black-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <Text textColor="white" fontFamily="spaceMono" className="ml-4">
                  Custom Capacity
                </Text>
              </div>
              <Text textColor="gray-75" fontFamily="spaceMono">
                ~/create.sh ·
                <Text as="span" variant="p" textColor="primary">
                  ready to copy
                </Text>
              </Text>
            </div>

            {/* Code */}
            <div className="px-2 md:px-7.5 py-2 md:py-10">
              <Text as="h6" fontFamily="spaceMono" textColor="gray-75">
                Provision additional NVMe storage when launching GPU instances
                or add capacity to running instances.
              </Text>

              <pre>
                <code>
                  <Text textColor="white" className="mt-4.25">
                    bash
                  </Text>
                  <Text
                    fontFamily="spaceMono"
                    textColor="gray-75"
                    className="leading-6"
                  >
                    # Launch GPU with 500GB local NVMe
                  </Text>
                  <Text
                    fontFamily="spaceMono"
                    textColor="white"
                    className="leading-6"
                  >
                    Neevcloud gpu create \
                  </Text>
                  <Text
                    fontFamily="spaceMono"
                    textColor="white"
                    className="leading-6"
                  >
                    &nbsp; &nbsp; &nbsp; {`--gpu`}
                    <Text as="span" textColor="red-50" variant="p">
                      h100
                    </Text>
                    <Text as="span" variant="p" className="mx-0 md:mx-0">
                      \
                    </Text>
                  </Text>
                  <Text
                    fontFamily="spaceMono"
                    textColor="white"
                    className="leading-6"
                  >
                    &nbsp; &nbsp; &nbsp; {`- - local storage`}
                    <Text as="span" textColor="primary" variant="p">
                      500gb
                    </Text>
                  </Text>
                  <Text
                    fontFamily="spaceMono"
                    textColor="gray-75"
                    className="leading-6"
                  >
                    # Add storage to running instance
                  </Text>
                  <Text
                    fontFamily="spaceMono"
                    textColor="white"
                    className="leading-6"
                  >
                    neevcloud storage attach \
                  </Text>
                  <Text
                    fontFamily="spaceMono"
                    textColor="white"
                    className="leading-6"
                  >
                    &nbsp; &nbsp; &nbsp; {`- instance - id `}
                    <Text
                      as="span"
                      textColor="red-50"
                      variant="p"
                      className="mr-0 md:mr-0"
                    >
                      gpu-abc123
                    </Text>
                    \
                  </Text>
                  <Text
                    fontFamily="spaceMono"
                    textColor="white"
                    className="leading-6"
                  >
                    &nbsp; &nbsp; &nbsp; {`- - local - storage`}
                    <Text as="span" textColor="primary" variant="p">
                      lib
                    </Text>
                  </Text>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DeployStorageSection;
