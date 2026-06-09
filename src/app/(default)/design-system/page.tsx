import type { Metadata } from "next";
import { Text } from "@/shared/ui-lib";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Design System | NeevCloud",
  description:
    "Internal typography and component reference for the NeevCloud design system.",
  robots: {
    index: false,
    follow: false,
  },
};

const DesignSystemPage = () => {
  return (
    <div>
      <Text as="h1" className="bg-red-500">
        Design System for h1:
        <br />
        font-size: 36px, 42px, 48px, 60px
        <br />
        line-height: 44px, 52px, 60px, 72px
      </Text>
      <Text as="h2" className="bg-green-500">
        Design System for h2:
        <br />
        font-size: 28px, 32px, 36px, 40px
        <br />
        line-height: 36px, 40px, 44px, 48px
      </Text>
      <Text as="h3" className="bg-blue-500">
        Design System for h3:
        <br />
        font-size: 16px, 20px, 24px
        <br />
        line-height: 30px
      </Text>
      <Text as="h4" className="bg-yellow-500">
        Design System for h4:
        <br />
        font-size: 14px, 18px, 20px
        <br />
        line-height: 24px
      </Text>
      <Text as="h5" className="bg-purple-500">
        Design System for h5:
        <br />
        font-size: 12px, 16px, 18px
        <br />
        line-height: 22px
      </Text>
      <Text as="h6" className="bg-orange-500">
        Design System for h6:
        <br />
        font-size: 10px, 14px, 16px
        <br />
        line-height: 22px
      </Text>
      <Text className="bg-pink-500">
        Design System for p:
        <br />
        font-size: 14px
        <br />
        line-height: 20px
      </Text>
      <Text as="small" className="bg-gray-500">
        Design System for small:
        <br />
        font-size: 12px
        <br />
        line-height: 20px
      </Text>
    </div>
  );
};

// <Text as="span" className="bg-gray-600">
//   Design System for span:
//   <br />
//   font-size: 12px, 14px, 16px
//   <br />
//   line-height: 22px
// </Text>

export default DesignSystemPage;

// Required font size: 60px, 40px, 30px, 24px, 22px, 20px, 18px, 16px, 14px, 12px, 10px
// h1: 60px -
// h2: 40px -
// h3: 30px
// h4: 24px
// h5: 22px
// h6: 20px
// p: 18px
// small: 16px
// 14: 14
// 12: 12

//

// caption: 14px
// label: 12px
// span: 16px
