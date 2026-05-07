import { Button, Text } from "@/shared/ui-lib";
import HomeSlideShow from "./HomeSlideShow";

const HeroSection = () => {
  return (
    <div className="relative flex-1 flex flex-col items-center gap-2 md:gap-4 pt-[10vh] px-4 sm:px-6 md:px-8">
      <div className="flex gap-2 md:gap-4  z-10">
        <Text as="h1">Full-Stack</Text>
        <Text as="h1" textColor="primary">
          AI Infrastructure
        </Text>
      </div>
      <Text as="h1" className="z-10 text-center">
        Build to Scale Fearlessly
      </Text>
      <Text as="h6" className="z-10" align="center">
        Run AI workloads with sovereign control, security, and scalability.
      </Text>
      <div className="flex gap-4 mt-4 z-10">
        <Button>Explore Platform</Button>
        <Button variant="outline" textColor="black">
          Contact Sales
        </Button>
      </div>
      <HomeSlideShow />
    </div>
  );
};

export default HeroSection;
