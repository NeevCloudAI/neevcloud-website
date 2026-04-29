# Project Agent Guidelines

You are an AI assistant helping develop and maintain a Next.js 16 landing website.

The project focuses on:

- Performance
- SEO
- Maintainability
- Scalability
- Clean architecture

The website contains multiple static marketing pages.

Follow the rules below strictly.

---

# Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

---

# Core Architecture Rules

## 1. Always Prefer Server Components

Default to **React Server Components**.

Use `"use client"` ONLY when required:

- state
- effects
- browser APIs
- event handlers

Do NOT convert large trees into client components.

---

## 2. Static Generation First

Prefer **static generation** whenever possible.

Use:

export const dynamic = "force-static"

Avoid runtime rendering unless necessary.

---

## 3. SEO First Architecture

Every page must include:

- metadata
- open graph tags
- proper headings
- semantic HTML

Use the Next.js metadata API.

Example:

export const metadata = {
title: "",
description: "",
}

---

## 4. Folder Structure

Folder Structure (Feature-Based Architecture)

Use a feature-based architecture to keep the codebase scalable and maintainable.

Each feature or page owns its components, logic, and types.

app/
(marketing)/
page.tsx
pricing/page.tsx
about/page.tsx
contact/page.tsx

features/
home/
components/
Hero.tsx
Features.tsx
CTA.tsx
data/
types.ts

pricing/
components/
PricingTable.tsx
PricingCard.tsx
data/
types.ts

about/
components/
TeamSection.tsx
StorySection.tsx

components/
ui/
Button.tsx
Container.tsx
Section.tsx
Heading.tsx

lib/
utils/
constants/

public/
styles/
Architecture Principles

1. Feature Isolation

Each feature owns its logic and components.

Example:

features/pricing/components/PricingCard.tsx

Avoid placing feature-specific components in global folders.

2. Global vs Feature Components

Global reusable UI

components/ui/

Examples:

Button

Card

Container

Modal

Input

Feature-specific UI

features/<feature>/components/

Examples:

features/home/components/Hero.tsx
features/pricing/components/PricingTable.tsx 3. Page Files Stay Thin

Pages should only compose sections.

Example:

import Hero from "@/features/home/components/Hero"
import Features from "@/features/home/components/Features"
import CTA from "@/features/home/components/CTA"

export default function Page() {
return (
<>
<Hero />
<Features />
<CTA />
</>
)
}

Pages must not contain large UI logic.

4. Feature Boundaries

Features may include:

components/
hooks/
data/
types.ts
constants.ts

Example:

features/pricing/
components/
hooks/
types.ts
constants.ts 5. Import Rules

Prefer absolute imports.

Example:

@/features/home/components/Hero
@/components/ui/Button
@/lib/utils

Avoid deep relative imports like:

../../../components/Button 6. Prevent Component Bloat

If a component exceeds ~200 lines, split it into smaller components.

---

## 5. Styling

Use **Tailwind CSS**.

Rules:

- Avoid inline styles
- Use utility classes
- Extract repeating patterns into components

---

## 6. Performance

Always optimize for performance.

Use:

- `next/image`
- `next/font`
- lazy loading
- dynamic imports
- build optimization

Example:

const Component = dynamic(() => import("./Component"))

Images must always be optimized.

---

## 7. Accessibility

Ensure accessibility:

- semantic HTML
- alt tags for images
- button vs div usage
- aria labels where necessary
- use proper html tags like heading, article, footer etc

---

## 8. Avoid Overengineering

This is a marketing site.

Do NOT introduce:

- unnecessary global state
- complex abstractions
- heavy libraries

Prefer simple components.

---

## 9. Code Quality

Rules:

- TypeScript strict mode
- no `any`
- descriptive naming
- readable code
- self-contained components

---

# When Generating Code

Always:

1. Prefer server components
2. Keep components very small
3. Optimize for SEO and performance
4. Follow folder conventions
5. Avoid unnecessary client-side JavaScript

---

## 10. Naming Conventions

Consistent naming is critical for scalability and maintainability.

Follow the conventions below strictly.

---

## 10.1 Folder Naming

All folders must use **kebab-case**.

Examples:

features/
home/
pricing/
contact-form/

components/
ui/

lib/
utils/
seo/

data/
constants/

Avoid:

HomePage
homePage
home_page

Always use:

home-page

---

## 10.2 Component Naming

React components must use **PascalCase**.

Examples:

Hero.tsx
PricingCard.tsx
PricingTable.tsx
CTASection.tsx
FeatureGrid.tsx
TeamSection.tsx

Component filenames must match the component name.

Example:

export default function PricingCard()

---

## 10.3 Page Files (Next.js App Router)

Use the standard Next.js reserved filenames.

page.tsx
layout.tsx
loading.tsx
error.tsx
not-found.tsx

Do not rename these files.

---

## 10.4 Function Naming

Functions must use **camelCase**.

Examples:

formatPrice()
generateMetadata()
buildSeoMetadata()
calculateDiscount()
getFeatureList()

---

## 10.5 Hooks

Hooks must:

1. Start with `use`
2. Use **camelCase**

Examples:

usePricingData.ts
useScrollPosition.ts
useWindowSize.ts
useFeatureFlags.ts

Example:

export function usePricingData() {}

---

## 10.6 Type Naming

TypeScript types must use **PascalCase**.

Avoid prefixes like `I` or `T`.

Good:

PricingPlan
FeatureItem
Testimonial
TeamMember
HeroContent

Bad:

IPricingPlan
TUser

Prefer `type` over `interface` unless extension is required.

Example:

export type PricingPlan = {
id: string
name: string
price: number
features: string[]
}

---

## 10.7 Props Naming

Component props types must follow:

ComponentNameProps

Example:

type PricingCardProps = {
plan: PricingPlan
}

export default function PricingCard({ plan }: PricingCardProps)

---

## 10.8 Constants

Constants must use **UPPER_SNAKE_CASE**.

Examples:

SITE_NAME
NAV_LINKS
PRICING_TIERS
DEFAULT_CURRENCY
MAX_FEATURES

Files can be:

constants.ts
site-constants.ts

---

## 10.9 Utility Files

Utility files should use **kebab-case**.

Examples:

format-price.ts
generate-metadata.ts
slugify.ts
date-utils.ts

Functions inside should use camelCase.

---

## 10.10 Data Files

Static data files should use **kebab-case**.

Examples:

pricing-data.ts
faq-data.ts
testimonial-data.ts
feature-list.ts

---

## 10.11 Image Naming

Images must use **kebab-case**.

Examples:

hero-dashboard.png
feature-analytics.webp
team-john-doe.jpg
pricing-background.png

---

## 10.12 Environment Variables

Environment variables must use **UPPER_SNAKE_CASE**.

Examples:

NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_APP_NAME
NEXT_PUBLIC_ANALYTICS_ID

---

## 10.13 SVG Components

SVG components must use **PascalCase**.

Examples:

LogoIcon.tsx
ArrowRightIcon.tsx
CheckIcon.tsx
CloseIcon.tsx

---

## 10.14 Test Files (If Tests Are Added)

Use the pattern:

component-name.test.tsx
hook-name.test.ts

Examples:

pricing-card.test.tsx
use-pricing-data.test.ts

---

## 10.15 Imports

Always prefer **absolute imports**.

Good:

import Hero from "@/features/home/components/Hero"
import PricingCard from "@/features/pricing/components/PricingCard"
import Button from "@/components/ui/Button"

Avoid deep relative imports:

../../../components/Button

---

## 10.16 File Length Rule

If a component exceeds **~200 lines**, split it into smaller components.
