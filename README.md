•·Neevcloud website

SEO: add seo object in every page

Pending:

<!-- 1. On clicking header menu, it should close -->

   <!-- 1.1
   section: OneVertical Stack. Silicon to endpoint.
   pending: replace center image, also left and right items should be clickable -->

   <!-- 1.2
   section: Why theworldNeeds NeevCloud?.
   Pending: Replace this complete section -->

<!-- 1.3
section: The AI cloud built forFrontiermodel builders.
pending: Add correct Code for python, go, Rust, Terraform
pending: add good scrollbar in other tabs. -->

   <!-- 1.4
   section: From manual toil toAI-scale leverage
   pending: content for without neevcloud -->

   <!-- 1.5
   section: PoweringAI BreakthroughsAcross Industries
   pending: user's image is missing in reviews -->

<!-- route: /gpu-pricing
1.1
section: Two Ways to DeployGPUs
pending: add icon's bg color
1.2
section: Deployment Modes Comparison
pending: Missing -->

route: /AI supercloud pages
1.1
section: Hero section
pending: Replace hero image

route: /about-us
1.1
section: Hero section
pending: complete hero image

route: /leadership
1.1
section: Hero section
pending: hero section gradient

<!--  -->
   <!-- 1. Change without neevcloud section -->
   <!-- 2. one dropdown should open at a time -->
   <!-- 2. section: See Models in Action,Not Just in Theory -->
   <!-- pending: in Learn without indra: arrows should be consistent -->
   <!-- 3. Built for experimentation figma icon -->
   <!-- 5.route: model-api, section: Pay for what you use.Nothing more. red text alignment -->
   <!-- 3. route: why-ai-supercloud, section: Traditional Cloud vsAI Supercloud. change content -->
   <!-- 3. route: neevcloud-arena, section: SEE AI, align INDUSTRY EXAMPLES -->
   <!-- 7.route: cpu-cluster, section: Where CPU Fits in anAI Stack. add icons -->
   <!-- 9. route: leadership, Narendra section needs to be weighted and add linkedin section instead of read more -->
   <!-- 3. route: about-use. hero sections image -->
   <!-- 2. route: gpu-cluster, section: Every WorkloadFlat rate.Unmetered. Add pricing from sheet -->
<!--  -->

<!--  -->

<!-- 2. Refactor colors according to figma colors -->

<!--  -->

Gaps keeping it from "max"

1. Massive source images (highest impact). public/ is 71 MB. Examples:

gallery-1.webp → 4.0 MB, gallery-5.webp → 3.0 MB
satelite.png → 2.3 MB, media.png → 2.1 MB, defence.png → 1.8 MB
51 PNGs in public/images that should be WebP/AVIF.
next/image resizes at runtime, but multi-MB originals still hurt build/cache and any full-bleed hero LCP. These should be compressed (a 4 MB gallery image is unjustifiable).

2. No sitemap.ts or robots.ts. For a 49-page marketing site this is a real SEO miss — no app/sitemap.ts, app/robots.ts, or manifest exist. The README even lists "SEO" as a TODO.

3. Analytics isn't actually wired. GTM, GA4 (gtag), and Clarity exist only as raw HTML in README.md — they are not in the app. When added, use next/script with strategy="afterInteractive" (GTM/GA) and lazyOnload (Clarity), not raw <script>.

4. next.config.ts image formats not tuned. No images: { formats: ["image/avif", "image/webp"] }. Enabling AVIF cuts payload further. (Next 16 also needs an explicit qualities array if you use non-default quality.)

5. No loading.tsx / error.tsx / not-found.tsx anywhere in app/ → no custom 404 and no streaming fallbacks.

6. Minimal lazy-loading. next/dynamic is used only in mega-menu-loaders.tsx. Heavy below-the-fold client widgets (cost calculators, carousels, playground) are good dynamic() candidates.

7. SEO metadata is missing OG/Twitter images and per-page canonicals. summary_large_image is set but there's no default og:image, and no alternates.canonical.
<!--  -->

8. announcement component needs to be responsive for mobile screen
9. Header needs to be responsive for mobile screen and add scrollbar
10. Missing redirection link for view status in AI Supercloud mega menu
<!-- 5. Pending page: Object storage -->

<!-- 1. route: / section: OneVertical Stack. Silicon to endpoint.
   issue: On clicking Heading, it should open -->

2. Aisupercloud image
<!-- 3. Press & Newsroom dropdown and page -->
3. Add new UI in AI supercloud mega menu
<!-- 5. Add copyright icon in footer -->
4. route: /events, section: ALL Events
   issue: 1. change kubecon data, month to 18-19june 2.India AI Impact location feb 2026 delhi. 3. Remove all the links expect Kubecon 4.replace kubecon link
5. route: /life-at-neevcloud
   issue: replace hero image, remove space below and no curve
6. route: /a100 add form's bg gradient
7. route: /nvme. section: Storage That Matches YourGPU Performance
   issue: add icons
