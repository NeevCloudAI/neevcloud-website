import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

export const THE_OFFER_SECTION = {
  badgeText: "The Offer",
  description:
    "Independence Day is about the freedom to build on your own terms. So we are giving you ₹15,000 in CPU Cloud credits to spend across any instance family, valid for 10 days from sign-up, on infrastructure that keeps your data resident in India from end to end.",
  howToClaim: [
    "Sign up and complete KYC verification.",
    "Credits are applied to your account automatically.",
    "Deploy CPU instances and build. The clock starts on your first sign-up.",
  ],
  primaryCta: "Sign Up Today and Get ₹15,000 Free",
  primaryCtaRoute: EXTERNAL_LINKS.signup,
  primaryCtaTarget: "_blank",
} as const;
