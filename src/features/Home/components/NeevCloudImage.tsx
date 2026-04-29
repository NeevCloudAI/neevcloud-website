import Image from "next/image";

const NeevCloudImage = () => {
  return (
    <Image
      src="/images/server.png"
      alt="Server"
      width={500}
      height={500}
      className="w-32 sm:w-48 md:w-full md:h-full"
    />
  );
};

export default NeevCloudImage;
