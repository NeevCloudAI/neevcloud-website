import { buildPageMetadata } from "@/lib/seo";
import { Text } from "@/shared/ui-lib";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/design-system",
  title: "Design System | NeevCloud",
  description:
    "Internal typography and component reference for the NeevCloud design system.",
  robots: {
    index: false,
    follow: false,
  },
});

const DesignSystemPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Text as="h1" className="border">
        Design System for h1: Loreml lipsuml dolor sital
        <Text as="span" variant="h1" textColor="primary">
          lconsectetur adipisicing elit. Quisquam, quos.
        </Text>
      </Text>
      <Text as="h2" className="border">
        Design System for h2: Loreml lipsuml ldolorl
        <Text as="span" variant="h2" textColor="primary">
          lsit amet consectetur adipisicing
        </Text>
        elit. Quisquam, quos.
      </Text>
      <Text as="h3" className="border">
        Design System for h3: Lorem ipsum dolor sit amet consecteturl
        ladipisicingl
        <Text as="span" variant="h3" textColor="primary">
          Design System for h3: Lorem ipsum dolor sit amet
        </Text>
        consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
        consectetur adipisicing
      </Text>
      <Text as="h4" className="border">
        Design System for h4: Lorem ipsum dolor sit amet consecteturl
        ladipisicingl
        <Text as="span" variant="h4" textColor="primary">
          lelit. Quisquam, quos. Lorem ipsum dolor sit amet
        </Text>
        consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, quos.
      </Text>
      <Text as="h5" className="border">
        Design System for h5: Lorem ipsum dolor sit amet consecteturl
        ladipisicingl
        <Text as="span" variant={"h5"} textColor={"primary"}>
          lelit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
          adipisicing
        </Text>
        elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
      </Text>
      <Text as="h6" className="border">
        Design System for h6: Quisquam, quos. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
        consectetur adipisicing
      </Text>
      <Text className="border">
        Design System for p: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam, quos.
      </Text>
      <Text as="small" className="border">
        Design System for small: consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet
      </Text>
    </div>
  );
};

export default DesignSystemPage;
