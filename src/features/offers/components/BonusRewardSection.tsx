import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { BONUS_REWARD_SECTION } from "../data/bonus-reward-section.data";

const BonusRewardSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="bonus-reward-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="small"
          textColor="primary-90"
          className="bg-primary-90/6 p-1 rounded-md border border-primary-160"
        >
          {BONUS_REWARD_SECTION.badgeText}
        </Text>

        <Text
          id="bonus-reward-section-heading"
          as="h2"
          align="center"
          textColor="primary"
          className="max-w-3xl mt-5"
        >
          {BONUS_REWARD_SECTION.headline}
        </Text>

        <Text
          as="h6"
          align="center"
          textColor="black/60"
          className="max-w-3xl mt-2.5"
        >
          {BONUS_REWARD_SECTION.description}
        </Text>

        <Text
          as="small"
          textColor="black/60"
          className="mt-4 md:mt-12.5"
          weight={"bold"}
        >
          {BONUS_REWARD_SECTION.footnote}
        </Text>
      </Container>
    </section>
  );
};

export default BonusRewardSection;
