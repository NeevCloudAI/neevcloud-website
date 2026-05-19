import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { stats } from "../data/performance";



const PerformanceSection = () => {
  return (
    <section className='relative bg-[url("/images/bg-home.png")] bg-cover bg-center bg-no-repeat bg-black py-[3vh] md:py-[7vh]'>
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-[50%] md:w-[30%] h-[75%] md:h-full top-5 md:top-10 right-[-5%] opacity-50 md:opacity-100" />
      <div className="pointer-events-none absolute inset-0 z-1 bg-radial from-teal-300/30 via-transparent to-transparent blur-xl" />

      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          textColor="white"
          weight="semibold"
          align="center"
          className="max-w-2xl"
        >
          Performance that
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            financial
          </Text>
        </Text>
        <Text
          as="h2"
          textColor="primary"
          weight="semibold"
          align="center"
          className="max-w-2xl"
        >
          services
          <Text as="span" variant="h2" textColor="white" weight="semibold">
            depends on
          </Text>
        </Text>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-6xl mt-16">
          {stats.map((stat) => (
            <div
              key={stat.label} 
              className="bg-white/5 border h-54.75 border-white/10 backdrop-blur-sm rounded-xl p-5 md:p-7 flex flex-col gap-1"
            >
              <div className="flex items-baseline gap-1">
                <Text as="span" className="text-primary text-4xl md:text-5xl font-semibold leading-none ">
                  {stat.value}
                </Text>
                {stat.unit && (
                  <Text as="span" className="text-white text-base md:text-lg font-medium">
                    {stat.unit}
                  </Text>
                )}
              </div>
              <Text className="text-white font-semibold text-sm md:text-2xl mt-6">
                {stat.label}
              </Text>
              <Text className="text-gray-75 text-base font-mono tracking-wide">
                {stat.sub}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PerformanceSection;
