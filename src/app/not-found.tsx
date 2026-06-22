import AnnouncementSection from "@/shared/components/AnnouncementSection";
import Container from "@/shared/components/container";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { HOME_FOOTER } from "@/features/Home/constants/home.constants";
import { buildPageMetadata } from "@/lib/seo";
import { Divider, LinkComponent, Text } from "@/shared/ui-lib";

export const metadata = buildPageMetadata({
  title: "Page Not Found | NeevCloud",
  description:
    "The page you are looking for could not be found. Return to NeevCloud to explore India's AI SuperCloud.",
  robots: {
    index: false,
    follow: true,
  },
});

export default function NotFound() {
  return (
    <div className="relative">
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <main>
        <section
          aria-labelledby="not-found-heading"
          className="relative bg-white py-16 md:py-24 2xl:py-32"
        >
          <Container className="flex flex-col items-center justify-center text-center">
            <Text textColor="primary">404</Text>
            <Text
              as="h1"
              id="not-found-heading"
              align="center"
              className="mt-4 max-w-2xl"
            >
              Page not found
            </Text>
            <Text as="h6" align="center" className="mt-2.5 max-w-xl">
              The page you are looking for may have been moved, renamed, or no
              longer exists.
            </Text>
            <div className="mt-7.5 flex flex-wrap items-center justify-center gap-4">
              <LinkComponent href="/" spacing="lg">
                Back to Home
              </LinkComponent>
              <LinkComponent
                href="/contact-neevcloud#contact-form"
                variant="outline"
                spacing="lg"
              >
                Contact Support
              </LinkComponent>
            </div>
          </Container>
        </section>
        <FooterComponent {...HOME_FOOTER} />
      </main>
    </div>
  );
}
