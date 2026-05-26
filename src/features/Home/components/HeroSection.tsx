import HeroRotator from "./HeroRotator";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-44px-80px)] bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat flex-1 flex flex-col items-center gap-2 md:gap-4 pt-[10vh] px-4 sm:px-6 md:px-8">
      <HeroRotator />
    </section>
  );
};

export default HeroSection;
