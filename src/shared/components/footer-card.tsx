import { Button, Text } from "../ui-lib";

interface FooterCardProps {
  title: string;
  description: string;
  button1Text: string;
  button2Text?: string;
}

const FooterCard = ({
  title,
  description,
  button1Text,
  button2Text,
}: FooterCardProps) => {
  return (
    <section className="relative w-full rounded-md bg-primary-100 py-[2vh] md:py-[10vh] px-4 md:px-12 flex flex-col  overflow-hidden">
      <Text as="h1" weight="medium" className="max-w-2xl">
        {title}
      </Text>
      <Text className="z-2 mt-2 max-w-lg">{description}</Text>
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
    </section>
  );
};

export default FooterCard;
