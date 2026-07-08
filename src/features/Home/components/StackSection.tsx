import Container from "@/shared/components/container";
import StackInteractiveClient from "./StackInteractiveClient";
import { STACK_SECTION } from "../data/stack-accordion.data";

export default function StackSection() {
  return (
    <section
      aria-labelledby="stack-heading"
      className="bg-white py-16 md:py-24"
    >
      <Container className="flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            id="stack-heading"
            className="max-w-3xl text-[28px] font-normal capitalize leading-[120%] tracking-[-0.01em] text-black sm:text-[36px] md:text-[44px]"
          >
            {STACK_SECTION.title}
          </h2>
          <p className="max-w-2xl text-[16px] leading-[132%] tracking-[-0.02em] text-gray-04">
            {STACK_SECTION.subtitle}
          </p>
        </div>

        <StackInteractiveClient />
      </Container>
    </section>
  );
}
