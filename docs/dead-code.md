# Dead / Unused Code Audit

Generated via [knip](https://github.com/webpro/knip) static analysis and manual review.

**Last updated:** 2026-05-31

---

## Summary

| Category                | Count |
| ----------------------- | ----- |
| Unused files            | 8     |
| Unused dependencies     | 1     |
| Unused exports          | 4     |
| Unused exported types   | 25    |
| Dead data / code smells | 3     |

---

## Unused Files

| #   | File                                                                             | Notes                                                                    |
| --- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1   | `src/shared/components/DeployInstanceSection.tsx`                                | Never imported                                                           |
| 2   | `src/shared/types/deploy-instance-section.types.ts`                              | Only used by #1                                                          |
| 3   | `src/shared/components/faq/FAQ.tsx`                                              | Re-export wrapper; pages import `faq-section` directly                   |
| 4   | `src/shared/components/index.tsx`                                                | Barrel export; nothing imports `@/shared/components`                     |
| 5   | `src/features/cpu-cluster/components/private-network/index.ts`                   | Barrel export; `CpuClusterPage` imports `PrivateNetworkSection` directly |
| 6   | `src/features/public-sector/components/government/GovernmentServiceRow.tsx`      | Duplicate of `src/shared/components/government/GovernmentServiceRow.tsx` |
| 7   | `src/features/public-sector/components/government/GovernmentServiceRowArrow.tsx` | Duplicate of shared version                                              |
| 8   | `src/shared/components/header/mega-menus/resources-mega-menu.tsx`                | Not wired in `mega-menu-loaders.tsx`                                     |

---

## Unused Dependencies

| Package  | Location       | Notes                         |
| -------- | -------------- | ----------------------------- |
| `sonner` | `package.json` | No imports anywhere in `src/` |

---

## Unused Exports

These symbols are exported but never imported elsewhere. They are used internally within their own file — remove `export` or delete if the symbol itself is unused.

| Export                | File                                                 |
| --------------------- | ---------------------------------------------------- |
| `MEGA_MENUS`          | `src/shared/components/header/mega-menu-loaders.tsx` |
| `RUNTIME_TAB_ENTRIES` | `src/shared/data/model-builder/runtime-tabs-data.ts` |
| `LUCIDE_ICONS`        | `src/shared/icons/lucide-icon-map.ts`                |
| `resolveLucideIcon()` | `src/shared/icons/lucide-icon-map.ts`                |

---

## Unused Exported Types

Exported but never imported outside their defining file. Safe to un-export; parent types in the same file still use them.

| Type                        | File                                                                     |
| --------------------------- | ------------------------------------------------------------------------ |
| `EnterpriseSecurityFeature` | `src/features/bfsi/types/enterprise-section.types.ts`                    |
| `GpuPricingCommitment`      | `src/features/gpu-cluster/types/gpu-pricing-table.types.ts`              |
| `GpuPricingStatus`          | `src/features/gpu-cluster/types/gpu-pricing-table.types.ts`              |
| `UseCaseTagVariant`         | `src/features/gpu-cluster/types/use-cases-section.types.ts`              |
| `ReviewStatsCard`           | `src/features/Home/types/reviews-section.types.ts`                       |
| `ReviewTestimonialCard`     | `src/features/Home/types/reviews-section.types.ts`                       |
| `ReviewRatingCard`          | `src/features/Home/types/reviews-section.types.ts`                       |
| `StackSectionListItem`      | `src/features/Home/types/stack-section.types.ts`                         |
| `DeploymentOptionId`        | `src/features/llm-training/types/deployment-section.types.ts`            |
| `WorkloadOptionId`          | `src/features/managed-kubernetes/types/deploy-workload-section.types.ts` |
| `PurposeNodeVariant`        | `src/features/managed-kubernetes/types/purpose-section.types.ts`         |
| `ModelsSectionCheckItem`    | `src/features/model-playground/types/models-section.types.ts`            |
| `GovernmentServiceRowProps` | `src/features/public-sector/types/government-section.types.ts`           |
| `ModelTag`                  | `src/features/serverless-inference/types/models-section.types.ts`        |
| `CheckItem`                 | `src/features/serverless-inference/types/three-steps-section.types.ts`   |
| `StepThreeBillingRow`       | `src/features/serverless-inference/types/three-steps-section.types.ts`   |
| `AmbitionDetailBullet`      | `src/shared/components/ambition-detail-card.tsx`                         |
| `StorageComparisonBarProps` | `src/shared/components/StorageComparisonBar.tsx`                         |
| `FooterLink`                | `src/shared/data/footer-types.ts`                                        |
| `ApplicationCardTheme`      | `src/shared/types/application-card.types.ts`                             |
| `GridTabItem`               | `src/shared/types/grid-tabs-section.types.ts`                            |
| `ModelMetric`               | `src/shared/types/model-info-card.types.ts`                              |
| `StepsTabsSectionStep`      | `src/shared/types/steps-tabs-section.types.ts`                           |
| `UseModelFeature`           | `src/shared/types/use-model-card.types.ts`                               |
| `UseModelCardVariant`       | `src/shared/types/use-model-card.types.ts`                               |

---

## Dead Data / Code Smells

Not unused files, but worth cleaning up.

| Item                                      | Location                                                       | Notes                                                                             |
| ----------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `icon` field on storage performance cards | `src/features/nvme/data/storage-performance-section.data.ts`   | Defined in data/types but never rendered in `StoragePerformanceCard.tsx`          |
| `GovernmentServiceItem`                   | `src/features/public-sector/types/government-section.types.ts` | Same shape as `ServiceItem` in `src/shared/types/service-section.types.ts`        |
| `rendering-section.data copy.ts`          | `src/features/media-vfx/data/`                                 | In use by `DefenceSovereignSection`, but misnamed and in the wrong feature folder |

---

## Not Dead (Keep)

| Item           | Notes                                                                                  |
| -------------- | -------------------------------------------------------------------------------------- |
| `src/proxy.ts` | Next.js 16 request proxy (replaces `middleware.ts`); no-op pass-through is intentional |

---

## Recommended Cleanup Order

1. Delete the 8 unused files listed above.
2. Remove `sonner` from `package.json`.
3. Un-export the 4 unused exports (or keep `MEGA_MENUS` internal-only).
4. Un-export the 25 unused types (optional, low risk).
5. Wire up NVMe storage card icons or remove the `icon` field from data/types.
6. Move/rename `rendering-section.data copy.ts` to the defence feature.
7. Either wire `resources-mega-menu.tsx` into `mega-menu-loaders.tsx` or delete it.

---

## Re-run Audit

```bash
npx knip
```
