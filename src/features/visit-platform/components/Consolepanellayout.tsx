import { Text } from "@/shared/ui-lib";

type Bullet = {
  label: string;
  text: string;
};

type ConsolePanelLayoutProps = {
  number: string;
  heading: string;
  description: string;
  bullets: Bullet[];
  rightPanel: React.ReactNode;
};

const ConsolePanelLayout = ({
  number,
  heading,
  description,
  bullets,
  rightPanel,
}: ConsolePanelLayoutProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-25 items-center w-full mt-10 md:px-10">
      <div>
        <Text
          as="h1"
          weight="semibold"
          textColor="gray-01"
          className="text-[3rem] md:text-[5rem] leading-none"
          aria-hidden="true"
        >
          {number}
        </Text>

        <Text as="h3" weight="semibold" className="mt-4 text-30px">
          {heading}
        </Text>

        <Text as="h6" className="mt-2.5">
          {description}
        </Text>

        <ul className="mt-7.5 flex flex-col gap-1">
          {bullets.map((bullet) => (
            <li
              key={bullet.label}
              className="flex items-start gap-1 bg-white py-2.5 pl-3.5 max-w-md rounded-md"
            >
              <Text as="span" textColor="primary">
                •
              </Text>
              <Text as="span" className="text-base">
                <Text
                  as="span"
                  textColor="primary"
                  className="text-sm uppercase mx-2.5"
                >
                  {bullet.label}
                </Text>
                {bullet.text}
              </Text>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full">{rightPanel}</div>
    </div>
  );
};

export default ConsolePanelLayout;
