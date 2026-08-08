import Container from "@/shared/components/container";
import { Text, LinkComponent } from "@/shared/ui-lib";
import { THE_OFFER_SECTION } from "../data/the-offer-section.data";

const TheOfferSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="the-offer-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="small"
          textColor="primary-90"
          className="bg-primary-90/6 p-1 rounded-md border border-primary-160"
        >
          {THE_OFFER_SECTION.badgeText}
        </Text>

        <Text
          id="the-offer-section-heading"
          as="h2"
          align="center"
          textColor="primary"
          className="mt-5"
        >
          ₹15,000 in Free CPU Cloud Credits.
        </Text>
        <Text as="h2" align="center" textColor="white" className="mt-0.5">
          10 Days.
        </Text>

        <Text
          as="h6"
          align="center"
          textColor="white/62"
          className="max-w-3xl mt-2.5"
        >
          Independence Day is about the <b>freedom to build</b> on your own
          terms. So we are giving you <b>₹15,000</b> in CPU Cloud credits to
          spend across any instance family, valid for 10 days from sign-up, on
          infrastructure that keeps your <b>data resident in India</b> from end
          to end.
        </Text>

        <ul className="mt-4 flex w-full max-w-2xl list-none flex-col gap-3 md:mt-12.5">
          {THE_OFFER_SECTION.howToClaim.map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-4 rounded-full border border-white/12 bg-white/[0.06] px-3 py-2"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-black">
                {`0${index + 1}`}
              </span>
              <Text as="h6" textColor="white/62">
                {step}
              </Text>
            </li>
          ))}
        </ul>

        <LinkComponent
          href={THE_OFFER_SECTION.primaryCtaRoute}
          target={THE_OFFER_SECTION.primaryCtaTarget}
          spacing="lg"
          className="mt-4 w-full md:mt-12.5 md:w-auto"
        >
          {THE_OFFER_SECTION.primaryCta}
        </LinkComponent>

        <Text as="small" textColor="white/60" className="mt-2.5">
          T&C Apply*
        </Text>
      </Container>
    </section>
  );
};

export default TheOfferSection;
