import { Button, Text } from "../ui-lib";

interface FooterCardProps {
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  button1Text: string;
  button2Text?: string;
}

const FooterCard = ({
  title1,
  title2,
  description1,
  description2,
  button1Text,
  button2Text,
}: FooterCardProps) => {
  return (
    <div className="relative w-full rounded-md bg-primary-100 py-[2vh] md:py-[10vh] px-4 md:px-8 flex flex-col gap-1 overflow-hidden">
      <Text as="h2" weight={"medium"}>
        {title1}
      </Text>
      <Text as="h2" weight={"medium"}>
        {title2}
      </Text>
      <Text className="z-2">{description1}</Text>
      <Text>{description2}</Text>
      <div className="mt-2 md:mt-6 flex gap-4 z-1">
        <Button
          variant="outline-primary"
          textColor="black"
          spacing="md"
          weight="semibold"
        >
          {button1Text}
        </Button>
        {button2Text && (
          <Button variant={"black"} spacing="md">
            {button2Text}
          </Button>
        )}
      </div>
      <div className=" absolute w-[40%] h-full top-10 right-[-5%] bg-[url('/icons/logo-large.svg')] bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default FooterCard;
